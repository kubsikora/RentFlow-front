<template>
  <q-banner class="banner">
    <div class="card1">
      <p>{{ $t('counter.deadline') }}</p>
      <h4>{{ date }}</h4>
    </div>
    <div class="card2">
      <p>{{ $t('messages.new') }}</p>
      <p style="color: black">//todo idk co tu</p>
    </div>
    <div class="card3" :style="{ backgroundColor: getColor(Count) }">
      <p>{{ $t('messages.new') }}</p>
      <h1 style="margin-top: 30px">{{ Count }}</h1>
    </div>
  </q-banner>

  <p style="color: black">//pa jaki kozak</p>
  <q-btn @click="Count = Count + 1">+1</q-btn>
  <q-btn @click="Count = Count - 1">-1</q-btn>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const Count = ref(0);
const date = ref('27.10.2024');

const getColor = (value: number) => {
  const redIntensity = Math.min(255, value * 25);
  if (value == 0) {
    return `rgba(255, ${255 - redIntensity}, ${255 - redIntensity}, 1)`;
  } else {
    return `rgba(255, ${255 - redIntensity}, ${255 - redIntensity}, 0.6)`;
  }
};
watch(Count, () => {
  if (Count.value < 0) {
    Count.value = 0;
  }
});
</script>
<style>
.banner {
  -webkit-box-shadow: 0px 0px 9px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 9px -7px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 9px -7px rgba(66, 68, 90, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 750px;
  height: 220px;
  overflow: hidden;
}
.card1 {
  /* background-color: red; */
  border-radius: 16px 0px 0px 16px;
  background-color: white;
  margin-top: -9px;
  margin-left: -18px;
}
.card2 {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  /* background-color: blue; */
  margin-top: -220px;
  margin-left: 232px;
}
.card3 {
  /* background-color: GREEN; */
  border-radius: 0px 16px 16px 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: -220px;
  margin-left: 482px;
}
.card2,
.card1,
.card3 {
  overflow: hidden;
  color: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  padding: 20px;
  width: 250px;
  height: 220px;
  text-align: center;
}
</style>
