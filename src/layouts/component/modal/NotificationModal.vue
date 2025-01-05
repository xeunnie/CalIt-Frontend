<script setup lang="ts">
import notificationData from '@/static/data/notificationData';
</script>

<template>
  <div>
    <div v-for="notification in notificationData.notifications" :key="notification.id">
      {{ notification.message }}
    </div>
  </div>
</template>

<style scoped>
  div {
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
  }
</style>
