<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=trending_up"
  />
  <div class="q-pa-md q-gutter-sm">
    <q-banner
      class="q-banner"
      :class="{ 'bg-gray': isGray[0], 'bg-primary text-white': !isGray[0] }"
    >
      <b>UWAGA!</b> Na dzień 22 Stycznia w godzinach 12:00 do 14:00 zaplanowano wyłączenie prądu. Dziękujemy za wyrozumiałość.
      <template v-slot:action>
        <q-btn flat color="white" label="Potwierdź" @click="makeGray(0)" />
      </template>
    </q-banner>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-banner
      class="q-banner"
      :class="{ 'bg-gray': isGray[1], 'bg-primary text-white': !isGray[1] }"
    >
      W dniu 20.02 w budynku odbędą się kontrole stanu instalacji gazowej. Prosimy o otwieranie drzwi
      <template v-slot:action>
        <q-btn flat color="white" label="Potwierdź" @click="makeGray(1)" />
      </template>
    </q-banner>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const isGray = ref([false, false]);


const makeGray = (index: number) => {
  isGray.value[index] = true;
};
</script>

<style>
.bg-gray {
  background-color: gray !important;
  color: white !important;
}
</style>
