<template>
    <main  class="body-content">
     <!-- <div class="container"> -->
     <div class="header-page flex justify-between items-center border-b-2 border-gray-200 py-2">
      <div class="title-page flex items-center">
          <i class="fas fa-tachometer-alt text-4xl mr-3 text-white"></i>
        <div class="title text-white ">
          <p class=" text-3xl font-bold">Dashboard</p>
          <p class=" text-sm font-bold">Dashboard Features</p>
        </div>
      </div>
      <div class="link-back-page">
        <div class="link flex items-center">
        <p class=" text-white">DashBoard</p>
        <p class="m-3"></p>
        <p></p>
        </div>
      </div>
     </div>


      <div class="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class="items-center">
            <div class="icon  text-white p-3 rounded-lg" :style="{ backgroundColor: 'rgba(255, 182, 193, 1)' }">
              <i class="fa-solid fa-building text-3xl ml-1 items-center "></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">Departement</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>

        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class=" items-center">
            <div class="icon   text-white p-3 rounded-lg" :style="{ backgroundColor: 'rgba(54, 162, 235, 1)' }">
              <i class="fa-solid fa-user-doctor text-3xl ml-1 items-center"></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">Doctor</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>
        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class=" items-center">
            <div class="icon  text-white p-3 rounded-lg " :style="{ backgroundColor: 'rgba(255, 206, 86, 1)' }">
              <i class="fa-solid fa-bed-pulse text-3xl ml-1 items-center"></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">Patient</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>
        
        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class=" items-center">
            <div class="icon   text-white p-3 rounded-lg " :style="{ backgroundColor: 'rgba(255, 159, 64, 1)' }">
              <i class="fa-solid fa-hospital-user text-3xl ml-1 items-center"></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">Patient Appiontment</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>
        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class=" items-center">
            <div class="icon  text-white p-3  rounded-lg" :style="{ backgroundColor: 'rgba(255, 206, 86, 1)' }">
              <i class="fa-solid fa-building text-3xl ml-1  items-center"></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">
                Patient Case Studies</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>
        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class=" items-center">
            <div class="icon   text-white p-3 rounded-lg " :style="{ backgroundColor: 'rgba(75, 192, 192, 1)' }">
              <i class="fa-solid fa-building text-3xl ml-1  rounded-lg items-center"></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">
                Prescription</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>
        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class=" items-center">
            <div class="icon   text-white p-3 rounded-lg  " :style="{ backgroundColor: 'rgba(153, 102, 255, 1)' }">
              <i class="fa-solid fa-file-invoice text-3xl ml-1 rounded-lg items-center"></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">
                Invoice</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>
        <div class="card bg-white shadow-md rounded-lg p-3" >
          <div class=" items-center">
            <div class="icon  text-white p-3 rounded-lg  " :style="{ backgroundColor: 'rgba(255, 99, 132, 1)' }">
              <i class="fa-solid fa-credit-card text-3xl ml-1 items-center"></i>
            </div>
            <div class="icon-title ml-2">
              <p class="text-lg font-bold">
                Payment</p>
              <p class="text-sm">10</p>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-data grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div class="first-chart md:col-span-2  bg-white shadow-md rounded-lg p-3">
          <ChartGraph />
        </div>
        <div class="second-char md:col-span-1  bg-white shadow-md rounded-lg p-3">
          <ChartCircle />
        </div>
      </div>

        <div class=" grid grid-cols-1 md:grid-cols-3 gap-5 ">
      <div class="monthly-debit-credit bg-white shadow-md rounded-lg p-3 mt-5">
        <h2 class="text-lg font-bold mb-3">Monthly Debit/Credit</h2>
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Description</th>
              <th class="py-2 px-4 border-b">Debit</th>
              <th class="py-2 px-4 border-b">Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">Salaries</td>
              <td class="py-2 px-4 border-b">$50,000</td>
              <td class="py-2 px-4 border-b">-</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Medical Supplies</td>
              <td class="py-2 px-4 border-b">$20,000</td>
              <td class="py-2 px-4 border-b">-</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Patient Fees</td>
              <td class="py-2 px-4 border-b">-</td>
              <td class="py-2 px-4 border-b">$70,000</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Insurance Reimbursements</td>
              <td class="py-2 px-4 border-b">-</td>
              <td class="py-2 px-4 border-b">$30,000</td>
            </tr>
            <!-- Add more debit/credit entries here -->
          </tbody>
        </table>
      </div>
     <!-- Recent Activities Section -->
     <div class="recent-activities bg-white shadow-md rounded-lg p-3 mt-5">
        <h2 class="text-lg font-bold mb-3">Recent Activities</h2>
        <ul>
          <li class="mb-2">
            <p class="text-sm">Patient John Doe was admitted on 2023-10-01</p>
          </li>
          <li class="mb-2">
            <p class="text-sm">Dr. Smith scheduled a surgery for 2023-10-05</p>
          </li>
          <li class="mb-2">
            <p class="text-sm">Invoice #12345 was generated on 2023-10-02</p>
          </li>
          <!-- Add more recent activities here -->
        </ul>
      </div>

      <!-- Upcoming Appointments Section -->
      <div class="upcoming-appointments bg-white shadow-md rounded-lg p-3 mt-5">
        <h2 class="text-lg font-bold mb-3">Upcoming Appointments</h2>
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Patient Name</th>
              <th class="py-2 px-4 border-b">Date</th>
              <th class="py-2 px-4 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">John Doe</td>
              <td class="py-2 px-4 border-b">2023-10-10</td>
              <td class="py-2 px-4 border-b">10:00 AM</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Jane Smith</td>
              <td class="py-2 px-4 border-b">2023-10-11</td>
              <td class="py-2 px-4 border-b">2:00 PM</td>
            </tr>
            <!-- Add more upcoming appointments here -->
          </tbody>
        </table>
      </div>
    </div>
      <!-- Staff Availability Section -->
      <div class="staff-availability bg-white shadow-md rounded-lg p-3 mt-5">
        <h2 class="text-lg font-bold mb-3">Staff Availability</h2>
        <ul>
          <li class="mb-2">
            <p class="text-sm">Dr. Smith - Available</p>
          </li>
          <li class="mb-2">
            <p class="text-sm">Dr. Johnson - Unavailable</p>
          </li>
          <!-- Add more staff availability here -->
        </ul>
      </div>

      <!-- Patient Feedback Section -->
      <div class="patient-feedback bg-white shadow-md rounded-lg p-3 mt-5">
        <h2 class="text-lg font-bold mb-3">Patient Feedback</h2>
        <ul>
          <li class="mb-2">
            <p class="text-sm">"Great service!" - John Doe</p>
          </li>
          <li class="mb-2">
            <p class="text-sm">"Very satisfied with the treatment." - Jane Smith</p>
          </li>
          <!-- Add more patient feedback here -->
        </ul>
      </div>

      <!-- Quick Actions Section -->
      <div class="quick-actions bg-white shadow-md rounded-lg p-3 mt-5">
        <h2 class="text-lg font-bold mb-3">Quick Actions</h2>
        <div class="flex space-x-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Add New Patient</button>
          <button class="bg-green-500 text-white px-4 py-2 rounded">Schedule Appointment</button>
          <button class="bg-yellow-500 text-white px-4 py-2 rounded">Generate Report</button>
        </div>
      </div>
     <!-- </div> -->
    </main>
  </template>
  <script>
import ChartGraph from './Chart/ChartGraph.vue';
import ChartCircle from './Chart/ChartCircle.vue';

  export default {
  components: { ChartGraph, ChartCircle },
    name: 'DashBoard',
    props: ['isCollapsed'],
  };
  </script>
  
  <style scoped>
  .card {
  margin-bottom: 1rem;
}
recent-activities,
.upcoming-appointments,
.staff-availability,
.patient-feedback,
.quick-actions {
  margin-top: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}
  </style>
  