import axiosInstance from '@/utils/axiosInstance';

interface Task {
  status: string;
  doneDate: string;
}

interface Sprint {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
}

interface Progress {
  allTaskCount: number;
}

export const getBurndownData = async (workspaceId: number, sprintId: number) => {
  try {
    const sprintResponse = await axiosInstance.get<{ result: Sprint }>(
      `/api/sprint/${workspaceId}/${sprintId}`,
    );
    const sprint = sprintResponse.data?.result;

    const progressResponse = await axiosInstance.get<{ result: { progress: Progress } }>(
      `/api/dashboard/${workspaceId}`,
    );
    const progress = progressResponse.data?.result?.progress;

    const taskResponse = await axiosInstance.get<{ result: Task[] }>(
      `/api/task/${workspaceId}/${sprintId}/all/status`,
    );
    const tasks = taskResponse.data?.result || [];

    const doneResponse = await axiosInstance.get<{ result: Task[] }>(
      `/api/task/${workspaceId}/${sprintId}/all`,
    );
    const doneTasks = doneResponse.data?.result || [];

    return {
      sprint,
      allTaskCount: progress?.allTaskCount || 0,
      doneTaskCount: tasks.filter((task) => task.status === 'DONE').length,
      doneStoryPoints: doneTasks,
    };
  } catch (error) {
    console.error('Error fetching burndown data:', error);
    throw error;
  }
};

export const calculateBurndownData = (
  doneStoryPoints: Task[],
  sprintStartDate: string,
  sprintEndDate: string,
) => {
  const totalTasks = doneStoryPoints.length;
  const totalDays = (new Date(sprintEndDate).getTime() - new Date(sprintStartDate).getTime())
    / (1000 * 60 * 60 * 24);

  const idealData: number[] = [];
  for (let i = 0; i <= totalDays; i += 1) {
    const remainingTasks = totalTasks - (totalTasks / totalDays) * i;
    idealData.push(Math.max(0, remainingTasks)); // 음수 방지
  }

  const actualDataMap: { [date: string]: number } = doneStoryPoints.reduce(
    (acc: { [date: string]: number }, task: Task) => {
      const doneDate = new Date(task.doneDate).toLocaleDateString();
      acc[doneDate] = (acc[doneDate] || 0) + 1;
      return acc;
    },
    {},
  );

  const actualData: number[] = [];
  let remainingTasks = totalTasks;
  for (let i = 0; i <= totalDays; i += 1) {
    const currentDate = new Date(
      new Date(sprintStartDate).getTime() + i * 24 * 60 * 60 * 1000,
    ).toLocaleDateString();
    remainingTasks -= actualDataMap[currentDate] || 0;
    actualData.push(Math.max(0, remainingTasks));
  }

  return { idealData, actualData };
};
