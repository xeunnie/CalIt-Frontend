<script setup>
import {
  ref, onBeforeUnmount,
} from 'vue';
import WorkspaceModal from '@/layouts/component/modal/WorkspaceModal.vue';
import message from '@/assets/icon/menu/message.svg';
import notification from '@/assets/icon/menu/notification.svg';
import user1 from '@/assets/icon/persona/user1.svg';
import arrow from '@/assets/icon/menu/arrow.svg';
import ChatModal from '@/layouts/component/modal/ChatModal.vue';
import NotificationModal from '@/layouts/component/modal/NotificationModal.vue';
import chatbot from '@/assets/icon/menu/chatbot.svg';

const showChatModal = ref(false);
const showNotificationModal = ref(false);
const showWorkspaceModal = ref(false);

const toggleChatModal = () => {
  showChatModal.value = !showChatModal.value;
};

const toggleNotificationModal = () => {
  showNotificationModal.value = !showNotificationModal.value;
};

const toggleWorkspaceModal = () => {
  showWorkspaceModal.value = !showWorkspaceModal.value;
};

const closeChatModal = () => {
  showChatModal.value = false;
};

const closeNotificationModal = () => {
  showNotificationModal.value = false;
};

const closeWorkspaceModal = () => {
  showWorkspaceModal.value = false;
};

const handleClickOutside = (event) => {
  if (
    showChatModal.value
    && !event.target.closest('.chat')
    && !event.target.closest('.notification-item')
    && !event.target.closest('.chat-modal')
  ) {
    closeChatModal();
  }
  if (
    showNotificationModal.value
    && !event.target.closest('.notification')
    && !event.target.closest('.notification-item')
    && !event.target.closest('.notification-modal')
  ) {
    closeNotificationModal();
  }
  if (
    showWorkspaceModal.value
    && !event.target.closest('.workspace-bundle')
    && !event.target.closest('.workspace-list-container')
  ) {
    closeWorkspaceModal();
  }
};

// onMounted(async () => {
//   document.addEventListener('click', handleClickOutside);
//   await notificationStore.getAlarmData();
// });

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

// const loginId = computed(() => (userStore.user.value ? userStore.user.value.loginId : ''));
</script>

<template>
  <div class="header">
    <div class="user-name">
      <p class="outfit">User</p>
    </div>
    <div class="right-side">
      <div class="notice-bundle">
        <div>
          <router-link :to="`/my/chatbot`">
            <img
              :src="chatbot"
              alt="chatbot"
              style="width: 27px; height: 27px"
            />
          </router-link>
        </div>
        <button class="chat" @click="toggleChatModal">
          <img :src="message" alt="chat"/>
        </button>
        <button class="notification" @click="toggleNotificationModal">
          <img :src="notification" alt="notification"/>
          <span
            class="alarm-indicator"
          ></span>
        </button>
      </div>
      <button class="workspace-bundle" @click="toggleWorkspaceModal">
        <div class="user-name">Workspace</div>
          <img :src="user1" alt="persona" class="workspace-persona"/>
          <img
            :src="arrow"
            alt="arrow"
            :class="{ 'arrow-rotated': showWorkspaceModal }"
            class="arrow"
          />
      </button>
      <ChatModal v-if="showChatModal" :close-modal="closeChatModal"/>
      <NotificationModal v-if="showNotificationModal" :close-modal="closeNotificationModal"/>
      <WorkspaceModal
        v-if="showWorkspaceModal"
        :close-modal="closeWorkspaceModal"
      />
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #fff;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  width: calc(100% - 16.25rem);
  z-index: 100;
}

.user-name {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}

.right-side {
  display: flex;
  gap: 20px;
  align-items: center;
}

img {
  width: 30px;
  height: 30px;
}

.notice-bundle {
  display: flex;
  gap: 10px;
  position: relative;
}

.workspace-bundle {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  background-color: #f3f6ff;
  padding: 5px 10px;
  border-radius: 25px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2) inset;
}

.arrow {
  width: 30px;
  height: 30px;
}

.arrow-rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.chat::after {
  content: '';
  position: absolute;
  right: 2.4rem;
  top: 3px;
  width: 10px;
  height: 10px;
  background-color: #ff6b6b;
  border-radius: 50%;
  border: 2px solid white;
}

.alarm-indicator {
  position: absolute;
  top: 3px;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #ff6b6b;
  border-radius: 50%;
  border: 2px solid white;
}
</style>
