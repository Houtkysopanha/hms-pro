<template>
  <div class="chart-circle">
    <canvas id="myPieChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

export default {
  name: 'ChartCircle',
  setup() {
    const chartRef = ref(null);
    const pieChartRef = ref(null);

    onMounted(() => {
      const pieCtx = document.getElementById('myPieChart').getContext('2d');
      new Chart(pieCtx, {
        type: 'pie',
        data: {
          labels: ['Department', 'Doctor', 'Patient', 'Prescription', 'Invoice', 'Patient Appointments', 'Patient Case Studies', 'Payment'],
          datasets: [
            {
              label: 'Hospital Data',
              data: [30, 50, 100, 20, 40, 60, 10, 20],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Red
                'rgba(54, 162, 235, 0.2)', // Blue
                'rgba(255, 206, 86, 0.2)', // Yellow
                'rgba(75, 192, 192, 0.2)', // Green
                'rgba(153, 102, 255, 0.2)', // Purple
                'rgba(255, 159, 64, 0.2)', // Orange
                'rgba(102, 205, 170, 0.2)', // Medium Aquamarine
                'rgba(255, 182, 193, 0.2)'  // Light Pink
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)', // Red
                'rgba(54, 162, 235, 1)', // Blue
                'rgba(255, 206, 86, 1)', // Yellow
                'rgba(75, 192, 192, 1)', // Green
                'rgba(153, 102, 255, 1)', // Purple
                'rgba(255, 159, 64, 1)', // Orange
                'rgba(102, 205, 170, 1)', // Medium Aquamarine
                'rgba(255, 182, 193, 1)'  // Light Pink
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    });

    return {
      chartRef,
      pieChartRef,
    };
  },
};
</script>

<style scoped>
/* .chart-circle {
  position: relative;
  height: 400px;
  width: auto;
} */
</style>