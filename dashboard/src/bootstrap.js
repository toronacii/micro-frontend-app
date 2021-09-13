import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  createApp(Dashboard).mount(el);
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-isolated-dashboard-app');
  el && mount(el);
}

export { mount };