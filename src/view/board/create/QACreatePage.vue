<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PostEditor from '@/view/board/create/components/PostEditor.vue';
import taskData from '@/static/data/taskData';

const tasks = ref([]);
const qaFiles = ref([]);
const qaTitle = ref('');
const qaContent = ref('');
const selectedTask = ref(null);
const selectedParticipant = ref(null);

const savePost = () => {
  // 저장 로직 (axios 제거 예정)
  console.log('Saving post:', {
    qaTitle,
    qaContent,
    selectedTask,
    selectedParticipant,
    qaFiles,
  });
};

onMounted(async () => {
  const response = await taskData.getWorkspaceTaskList();
  tasks.value = response || [];
});
</script>

<template>
  <PostEditor
    :tasks="tasks"
    :enableParticipants="true"
    @update:files="qaFiles = $event"
    @update:task="selectedTask = $event"
    @update:participant="selectedParticipant = $event"
    @update:title="qaTitle = $event"
    @update:content="qaContent = $event"
  />
  <button @click="savePost">저장하기</button>
</template>
