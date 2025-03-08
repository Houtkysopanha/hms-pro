<template>
    <div class="content3 mt-5">
      <div class="header border-b-2 border-gray-200 pb-2 mb-6">
        <p class="text-3xl font-bold text-white">Edit Schedule</p>
      </div>
      <div class="form-field shadow-lg rounded-lg p-8 bg-white">
        <form @submit.prevent="submitForm">
          <!-- Form fields for editing schedule -->
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-user text-gray-400 mr-2"></i>
                <input
                  type="text"
                  id="name"
                  v-model="doctor.name"
                  class="w-full border-none focus:outline-none"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="week" class="block text-gray-700 font-medium mb-2">Week</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-calendar-week text-gray-400 mr-2"></i>
                <input
                  type="text"
                  id="week"
                  v-model="doctor.week"
                  class="w-full border-none focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="startTime" class="block text-gray-700 font-medium mb-2">Start Time</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-clock text-gray-400 mr-2"></i>
                <input
                  type="time"
                  id="startTime"
                  v-model="doctor.startTime"
                  class="w-full border-none focus:outline-none"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="endTime" class="block text-gray-700 font-medium mb-2">End Time</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-clock text-gray-400 mr-2"></i>
                <input
                  type="time"
                  id="endTime"
                  v-model="doctor.endTime"
                  class="w-full border-none focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="avgAppointments" class="block text-gray-700 font-medium mb-2">Avg Appointment Duration (minute)</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-business-time text-gray-400 mr-2"></i>
                <select
                  id="avgAppointments"
                  v-model="doctor.avgAppointments"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                </select>
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="serialType" class="block text-gray-700 font-medium mb-2">Serial Type</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-align-center text-gray-400 mr-2"></i>
                <select
                  id="serialType"
                  v-model="doctor.serialType"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="Sequential">Sequential</option>
                  <option value="Random">Random</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="status" class="block text-gray-700 font-medium mb-2">Status</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-info-circle text-gray-400 mr-2"></i>
                <select
                  id="status"
                  v-model="doctor.status"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
          <div class="btn flex space-x-3">
            <div class="btn-save">
                <button
            type="submit"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Save
          </button>
            </div>
            <div class="cancel"> 
                <router-link to="/doctor">
                    <button
            type="cancel"
            class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Cancel
          </button>
                </router-link>
        </div>
         </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditSchedule',
    data() {
      return {
        doctor: {
          name: '',
          week: '',
          startTime: '',
          endTime: '',
          avgAppointments: '',
          serialType: '',
          status: ''
        }
      };
    },
    created() {
      this.fetchDoctorInfo();
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.doctor);
      },
      fetchDoctorInfo() {
        const doctorInfo = {
          name: 'Dr Demo Test',
          week: 'Monday',
          startTime: '10:00',
          endTime: '20:00',
          avgAppointments: '5',
          serialType: 'Sequential',
          status: 'Active'
        };
        this.doctor = { ...doctorInfo };
      }
    }
  };
  </script>
  
  <style scoped>

  </style>