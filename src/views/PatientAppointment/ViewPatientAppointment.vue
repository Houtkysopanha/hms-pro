<template>
    <div class="main p-5">
      <div class="header flex justify-between border-b-2 border-gray-200 pb-2">
        <p class="text-3xl font-bold text-white">Patient Appointment Information</p>
        <div class="button">
          <router-link to="/add-department">
            <button
              class="w-20 h-10 p-2 bg-white rounded-md shadow-lg text-lg text-green-600 font-medium"
            >
              Edit
            </button>
          </router-link>
        </div>
      </div>
      <div class="content1 mt-10 bg-white shadow-md rounded-md">
        <div class="flex space-x-4 p-4 text-start">
          <div class="w-1/2 Depart-name">
            <p class="text-xl font-medium">Patient Name:</p>
            <p class="mt-2">Dr Demo Test</p>
          </div>
          <div class="w-1/2 desc">
            <p class="text-xl font-medium">Doctor Name:</p>
            <p class="mt-2">Dr Demo Test</p>
          </div>
        </div>
        <div class="flex space-x-4 p-4 text-start">
          <div class="w-1/2 Depart-name">
            <p class="text-xl font-medium">Appointment Date:</p>
            <p class="mt-2">20 Mar 2025</p>
          </div>
          <div class="w-1/2 desc">
            <p class="text-xl font-medium">Appointment Time:</p>
            <p class="mt-2">10:25-10:48</p>
          </div>
        </div>
        <div class="flex space-x-4 p-4 text-start">
          <div class="w-1/2 Depart-name">
            <p class="text-xl font-medium">Problem:</p>
            <p class="mt-2">Stomach problem</p>
          </div>
          <!-- <div class="w-1/2 desc">
            <p class="text-xl font-medium">Serial Type:</p>
            <p class="mt-2">Sequential</p>
          </div> -->
        </div>
  
        <!-- <div class="flex space-x-4 p-4">
          <div class="w-1/2 status">
            <p class="text-xl font-medium">Status:</p>
            <p
              class="mt-2 w-14 font-medium text-sm p-2 text-white bg-green-600 rounded-2xl"
            >
              Active
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "PatientAppointInfor",
  };
  </script>
  <style scoped></style>
  