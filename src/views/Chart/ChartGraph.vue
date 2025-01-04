<template>
  <div class="chart-graph">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  name: 'ChartGraph',
  setup() {
    const chartRef = ref(null);

    onMounted(() => {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Patients Admitted',
              backgroundColor: 'rgba(255, 223, 186, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              data: [120, 150, 180, 200, 170, 190, 220],
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Patients',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Months',
              },
            },
          },
        },
      });
    });

    return {
      chartRef,
    };
  },
};
</script>

<style scoped>
/* .chart-graph {
  position: relative;
  height: 400px;
  width: auto;
  margin: 0;
} */
</style>