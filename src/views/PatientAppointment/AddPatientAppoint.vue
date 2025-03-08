<template>
    <div class="content3 mt-5">
      <div class="header border-b-2 border-gray-200 pb-2 mb-6">
        <p class="text-3xl font-bold text-white">Add Patient Appointment</p>
      </div>
      <div class="form-field shadow-lg rounded-lg p-8 bg-white">
        <form @submit.prevent="submitForm">
          <!-- Other form fields -->
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="patientName" class="block text-gray-700 font-medium mb-2">Patient Name</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-user text-gray-400 mr-2"></i>
                <input
                  type="text"
                  id="patientName"
                  v-model="appointment.patientName"
                  class="w-full border-none focus:outline-none"
                  placeholder="Enter patient name"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="patientEmail" class="block text-gray-700 font-medium mb-2">Patient Email</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-envelope text-gray-400 mr-2"></i>
                <input
                  type="email"
                  id="patientEmail"
                  v-model="appointment.patientEmail"
                  class="w-full border-none focus:outline-none"
                  placeholder="Enter patient email"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="appointmentDate" class="block text-gray-700 font-medium mb-2">Appointment Date</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-calendar text-gray-400 mr-2"></i>
                <input
                  type="date"
                  id="appointmentDate"
                  v-model="appointment.appointmentDate"
                  class="w-full border-none focus:outline-none"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="appointmentTime" class="block text-gray-700 font-medium mb-2">Appointment Time</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-clock text-gray-400 mr-2"></i>
                <input
                  type="time"
                  id="appointmentTime"
                  v-model="appointment.appointmentTime"
                  class="w-full border-none focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
          
            <div class="w-1/2 mb-6">
              <label for="problem" class="block text-gray-700 font-medium mb-2">Problem</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <textarea
                  id="problem"
                  v-model="appointment.problem"
                  class="w-full h-32 border-none focus:outline-none resize-none"
                  placeholder="Enter patient's problem"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <hr class="pb-2">
          <div class="btn flex space-x-3">
            <div class="btn-save">
                <button
            type="submit"
            class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Submit
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
    name: 'AddPatientAppoint',
    data() {
      return {
        appointment: {
          patientName: '',
          patientEmail: '',
          appointmentDate: '',
          appointmentTime: '',
          doctor: '',
          problem: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.appointment);
      }
    }
  };
  </script>
  
  <style scoped>

  </style>