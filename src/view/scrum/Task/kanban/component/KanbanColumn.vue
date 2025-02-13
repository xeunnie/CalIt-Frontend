<script setup lang="ts">
import {
  computed, defineProps, ref, watch,
} from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import TaskCard from './KanbanCard.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const getTaskCountBackgroundColor = (status) => {
  if (status === 'No Status') return 'rgba(234, 179, 8, 0.1)';
  if (status === 'To Do') return 'rgba(236, 72, 153, 0.1)';
  if (status === 'In Progress') return 'rgba(168, 85, 247, 0.1)';
  return 'rgba(34, 197, 94, 0.1)';
};
const getTaskCountColor = (status) => {
  if (status === 'No Status') return 'rgba(234, 179, 8)';
  if (status === 'To Do') return 'rgba(236, 72, 153)';
  if (status === 'In Progress') return 'rgba(168, 85, 247)';
  return 'rgba(34, 197, 94)';
};

const taskCountBgStyle = computed(() => getTaskCountBackgroundColor(props.data.status));

const taskCountColorStyle = computed(() => getTaskCountColor(props.data.status));

const tasks = ref([...props.data.tasks]);

watch(() => props.data.tasks, (newTasks) => {
  tasks.value = [...newTasks];
});
</script>

<template>
  <div class="task-column">
    <div class="column-header">
      <p>{{ data.status }}</p>
      <span class="task-count"
            :style="{ backgroundColor: taskCountBgStyle, color: taskCountColorStyle }">
        {{ tasks.length }}
      </span>
    </div>
    <VueDraggableNext
      :list="tasks" item-key="id" group="tasks" draggable=".task-card" handle=".task-card">
      <TaskCard v-for="(task) in tasks" :key="task.id" :task="task"/>
    </VueDraggableNext>
    <div class="add-task-card">
      <span class="plus">+</span> <span class="add-text">Add Task</span>
    </div>
  </div>
</template>

<style scoped>
.task-column {
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 5px;
}

p {
  font-size: 14px;
  font-weight: 500;
}

.task-count {
  padding: 0 10px;
  border-radius: 30px;
}

.add-task-card {
  background-color: #F7F8FA;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.plus {
  font-weight: bold;
  background-color: #C7CED9;
  color: #fff;
  padding: 0 7px;
  border-radius: 50%;
}

.add-text {
  font-size: 12px;
}
</style>
