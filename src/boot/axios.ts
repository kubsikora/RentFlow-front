import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({
  baseURL: process.env.VITE_APP_API_BASE_URL || 'https://api.example.com',
});

export default boot(({ app }) => {
  // dla użycia wewnątrz plików Vue jako this.$axios i this.$api

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
