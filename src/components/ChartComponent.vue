<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { ref, onMounted, nextTick, watch } from 'vue';

// Register Chart.js components
Chart.register(...registerables);

// Define props for the component
const props = defineProps<{
  labels: string[]; // Array of labels for the chart
  data: number[]; // Array of data points
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);
const chartInstance = ref<Chart | null>(null); // Ref to store the chart instance

onMounted(async () => {
  await nextTick();
  renderChart();
});

// Watch for changes in data and labels
watch([() => props.data, () => props.labels], () => {
  renderChart();
});

function renderChart() {
  const ctx = canvasRef.value?.getContext('2d');

  if (!ctx) {
    console.error('Failed to get 2D context for canvas.');
    return;
  }

  // Destroy previous chart instance if it exists
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }

  // Create a new chart and store the instance
  chartInstance.value = new Chart(ctx, {
    type: 'bar', // Change to 'line', 'pie', etc., as needed
    data: {
      labels: props.labels, // Use dynamic labels
      datasets: [
        {
          label: 'Dynamic Data',
          data: props.data, // Use dynamic data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
</script>

<style scoped>
canvas {
  width: 100%;
  height: 400px;
}
</style>
