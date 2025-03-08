<template>
    <div class="content3 mt-5">
      <div class="header border-b-2 border-gray-200 pb-2 mb-6">
        <p class="text-3xl font-bold text-white">Add Schedule</p>
      </div>
      <div class="form-field shadow-lg rounded-lg p-8 bg-white">
        <form @submit.prevent="submitForm">
            <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="email" class="block text-gray-700 font-medium mb-2">Select Doctor <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-signature text-gray-400 mr-2"></i>
                <input
                  type="text"
                  id="name"
                  v-model="doctor.name"
                  class="w-full border-none focus:outline-none"
                  placeholder="Select"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="blood" class="block text-gray-700 font-medium mb-2">Select Weekday <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-calendar-week text-gray-400 mr-2"></i>
                <select
                  id="week"
                  v-model="doctor.week"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="A+">Monday</option>
                  <option value="A-">Tuesday</option>
                  <option value="B+">Wednesday</option>
                  <option value="B-">Thursday</option>
                  <option value="AB+">Friday</option>
                  <option value="AB-">Saturday</option>
                  <option value="O+">Sunday</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="email" class="block text-gray-700 font-medium mb-2">Start Time <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-clock text-gray-400 mr-2"></i>
              
                <input
                  type="time"
                  id="startTime"
                  v-model="doctor.startTime"
                  class="w-full border-none focus:outline-none"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="password" class="block text-gray-700 font-medium mb-2">End Time <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-clock text-gray-400 mr-2"></i>
                <input
                  type="time"
                  id="endTime"
                  v-model="doctor.endTime"
                  class="w-full border-none focus:outline-none"
                  placeholder=" "
                  required
                />
              </div>
            </div>
        </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="gender" class="block text-gray-700 font-medium mb-2">Avg Appointment Duration (minute) <sup class=" text-red-700">*</sup> </label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-business-time text-gray-400 mr-2"></i>
                
                <select
                  id="avgAppointments"
                  v-model="doctor.avgAppointments"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="" disabled>5</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="6-">60</option>
                </select>
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="blood" class="block text-gray-700 font-medium mb-2">Serial Type <sup class=" text-red-700">*</sup> </label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-align-center text-gray-400 mr-2"></i>
                <select
                  id="serialType"
                  v-model="doctor.serialType"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="" disabled>Sequential</option>
                  <option value="A+">Sequential</option>
                  <option value="A-">Timestamp</option>
                </select>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="status" class="block text-gray-700 font-medium mb-2">Status <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-info-circle text-gray-400 mr-2"></i>
                <select
                  id="status"
                  v-model="doctor.status"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="" disabled>Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
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
            +Add Doctor
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
//   import QuillEditor1 from './QuillEditor1.vue';
  export default {
    name: 'AddSchedule',
    components: {
        // QuillEditor1,
    },
    data() {
      return {
        doctor: {
          name: '',
          week: '',
          startTime: '',
          endTime: '',
          schedule: '',
          avgAppointments: '',
          serialType: '',
          status: '',
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.doctor);
      },
     
    }
  };
  </script>
  
  <style scoped>

  </style>