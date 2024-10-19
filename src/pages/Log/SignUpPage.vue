<template>
  <q-layout view="lHh Lpr lFf">
    <ToolbarComponent />
    <q-img src="pics/background.png" style="margin-top: -122px">
      <q-card class="bg-white log-card" style="margin-top: 220px">
        <div class="loginput">
          <h2 class="name text-center">{{ $t('name') }}</h2>
          <SignUpCarousel />
        </div>
      </q-card>
    </q-img>
  </q-layout>
</template>

<script setup lang="ts">
import ToolbarComponent from 'src/components/ToolbarComponent.vue';
import SignUpCarousel from './SignUpCarousel.vue';
</script>

<style scoped>
.log-card {
  width: 40%;
  height: 700px;
  margin-left: 30%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.loginput {
  margin-top: -40px;
  width: 80%;
  margin-left: 10%;
}
.name {
  color: rgb(116, 166, 225);
  font-weight: 500;
  font-size: 50px;
}
</style>
