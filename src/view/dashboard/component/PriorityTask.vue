<script setup lang="ts">
import coworker1 from '@/assets/icon/persona/space1.svg';
import coworker2 from '@/assets/icon/persona/space2.svg';
import coworker3 from '@/assets/icon/persona/space3.svg';

const tasks = [
  {
    id: 1,
    title: 'Create user flow for Finance App',
    description: '워크 스페이스 명',
    priority: 'High Priority',
    dueDate: 'December 15th, 2023',
    actionText: 'Detail',
    idName: 'WS-1',
    isStarted: 'Started',
  },
  {
    id: 2,
    title: 'App usability testing with Maze',
    description: 'on Hour project',
    priority: 'Med Priority',
    dueDate: 'January 21st, 2024',
    actionText: 'Research',
    idName: 'WS-2',
    isStarted: 'Not Started',
  },
  {
    id: 3,
    title: 'App usability testing with Maze',
    description: 'on Hour project',
    priority: 'Med Priority',
    dueDate: 'January 21st, 2024',
    actionText: 'Research',
    idName: 'WS-3',
    isStarted: 'Not Started',
  },
];

const priorityClass = (priority) => ({
  'high-priority': priority === 'High Priority',
  'med-priority': priority === 'Med Priority',
});
</script>

<template>
  <div class="priority-task">
    <h3>Priority Task</h3>
    <div class="task-card-container">
      <div class="task-card" v-for="task in tasks" :key="task.id">
        <div class="task-header">
          <div class="titles">
            <h4>{{ task.title }}</h4>
            <p>{{ task.description }}</p>
          </div>
          <div class="priority">
            <p :class="priorityClass(task.priority)">{{ task.priority }}</p>
            <p class="task-id">{{ task.idName }}</p>
          </div>
        </div>
        <div class="task-info">
          <div class="task-info-txt">
            <p>{{ task.isStarted }}</p>
            <div>
              <img :src="coworker1" alt="coworker1">
              <img :src="coworker2" alt="coworker2">
              <img :src="coworker3" alt="coworker3">
            </div>
          </div>
          <div class="task-percent">
            <hr>
          </div>
        </div>
        <div class="task-footer">
          <p>Due: {{ task.dueDate }}</p>
          <button>{{ task.actionText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.priority-task {
  //padding: 20px;
}

h3{
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 1rem;
}

h4{
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  width: 12rem;
}

p{
  margin: 0;
}

.task-card-container{
  display: flex;
  gap: 1rem;
}

.task-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 15px;
  width: 338px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.task-header {
  display: flex;
  //justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
}

.task-info{
  .task-info-txt{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #909090;
  }
  img{
    width: 24px;
    height: 24px;
  }
}

.task-percent{
  hr{
    width: 100%;
    height: 3px;
    background-color: #909090;
    margin: 0;
  }
}

.task-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  button{
    background-color: #F0F0F0;
    border: none;
    padding: 4px 12px;
    border-radius: 4px;
  }
}

.titles {
  position: relative;
  padding-left: 10px;
}

.titles::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #EC284E;
}

.priority{
  width: 100%;
  font-size: 12px;
  p{
    text-align: center;
  }
  .task-id{
    text-align: end;
    color: #909090;
    margin-top: 5px;
  }
}

.high-priority {
  color: #EC284E;
  border: 1px solid #EC284E;
  border-radius: 4px;
  //height: 24px;
  padding: 4px;
  //width: 92px;
  //display: flex;
  //width: 100%;
  //justify-content: center;
}

.med-priority {
  color: #D7A601;
  border: 1px solid #D7A601;
  border-radius: 4px;
  //height: 24px;
  padding: 4px;
  //width: 92px;
  //display: flex;
  //width: 100%;
  //justify-content: center;
}
</style>
