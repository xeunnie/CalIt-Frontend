import '@/assets/style/styles.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

router.onError((error) => {
  console.error('Router error:', error);
});
app.use(router);
app.mount('#app');
