<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  friends: {
    type: Array,
    required: false,
  },
  enableParticipants: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:files', 'update:task', 'update:participant', 'update:title', 'update:content']);

const qaTitle = ref('');
const qaContent = ref('');
const selectedTask = ref(null);
const selectedParticipant = ref(null);
const qaFiles = ref([]);

const handleFileChange = (event) => {
  qaFiles.value = Array.from(event.target.files);
  emits('update:files', qaFiles.value);
};

const updateTask = (taskId) => {
  selectedTask.value = taskId;
  emits('update:task', taskId);
};

const updateParticipant = (participant) => {
  selectedParticipant.value = participant;
  emits('update:participant', participant);
};

const updateTitle = (title) => {
  qaTitle.value = title;
  emits('update:title', title);
};

const updateContent = (content) => {
  qaContent.value = content;
  emits('update:content', content);
};
</script>

<template>
  <div class="post-editor">
    <!-- 게시글 제목 -->
    <div class="post-title-container">
      <span class="column">게시글 제목</span>
      <label for="title-input">
      <input
        id="title-input"
        v-model="postTitle"
        class="title-editor"
        placeholder="게시글 제목"
        @input="updateTitle($event.target.value)"
      />
      </label>
    </div>

    <!-- 참여자 지정 (선택적) -->
    <div v-if="enableParticipants" class="author-section">
      <div class="participants">
        <span class="column">담당자</span>
        <label for="participant-select">
        <select
          v-model="selectedParticipant"
          placeholder="참여자를 선택하세요"
          @change="updateParticipant($event)"
        >
          <option v-for="friend in friends" :key="friend.searchUserIdx" :value="friend">
            {{ friend.userName }}
          </option>
        </select>
        </label>
      </div>
    </div>

    <div class="task-section">
      <span class="column">태스크 연동하기</span>
      <label for="task-select">
      <select v-model="selectedTask" class="title-editor" @change="updateTask($event.target.value)">
        <option v-for="task in tasks" :key="task.id" :value="task.id">
          {{ task.title }}
        </option>
      </select>
      </label>
    </div>

    <div class="file-upload">
      <span class="column">파일 업로드</span>
      <label for="file-input">
      <input type="file" multiple @change="handleFileChange" />
      </label>
    </div>

    <div class="content-section">
      <label for="content-text">
      <textarea
        id="content-text"
        v-model="qaContent"
        placeholder="게시글 내용을 입력하세요..."
        class="content-editor"
        @input="updateContent($event.target.value)"
      ></textarea>
      </label>
    </div>
  </div>
</template>

<style scoped>
.post-editor {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.title-editor,
.content-editor {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
}
</style>
