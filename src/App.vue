<script setup lang="ts">
import { useRoute } from 'vue-router';
import BasicLayout from '@/layouts/BasicLayout.vue';
import Thumbnail from '@/view/thumbnail/ThumbnailPage.vue';
import { computed } from 'vue';
import MarkupPage from '@/view/MarkupView/MarkupPage.vue';

const route = useRoute();

const showBasicLayout = computed(() => !(route.path.startsWith('/user') || route.path === '/' || route.path === '/markup'));

const showThumbnail = computed(() => route.path === '/');
const showMarkupPage = computed(() => route.path === '/markup');
</script>

<template>
  <div id="AppVue">
    <template v-if="showBasicLayout">
      <BasicLayout>
        <router-view />
      </BasicLayout>
    </template>
    <template v-else-if="showThumbnail">
      <Thumbnail />
    </template>
    <template v-else-if="showMarkupPage">
      <MarkupPage />
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<style>
#AppVue {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
