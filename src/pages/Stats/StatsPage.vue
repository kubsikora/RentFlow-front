<template>
  <div>
    <b>STATYSTYKI</b>
    <q-layout view="lHh Lpr lFf">


      <q-page-container>
        <ChartComponent :labels="chartLabels" :data="chartData" />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChartComponent from 'components/ChartComponent.vue';

const chartLabels = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
const chartData = ref([65, 59, 80, 81, 56, 55, 40]);

// Function to update chart data dynamically
function updateChartData() {
  // Simulate fetching new data
  const newData = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];
  chartData.value = newData; // Update chart data
}

// Call the update function at intervals (optional)
updateChartData;
</script>
