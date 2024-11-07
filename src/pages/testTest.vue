<template>
  <q-btn @click="btn()" />
  <br />
  {{ liczba }}
</template>

<script setup lang="ts">
import { AxiosResponse } from 'axios';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
const liczba = ref(0);
const btn = () => {
  liczba.value += 1;
  api
    .get('/test')
    // .get(`/test`)
    .then((response: AxiosResponse<number>) => {
      alert(response.data);
    });
};
</script>
