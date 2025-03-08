<template>
     <div class="content3 mt-5">
    <div class="header border-b-2 border-gray-200 pb-2 mb-6">
      <p class="text-3xl font-bold text-white">Add Insurances</p>
    </div>
    <div class="form-field shadow-lg rounded-lg p-8 bg-white">
      <form @submit.prevent="submitForm">
        <div class="mb-6">
          <label for="selecPatient" class="block text-gray-700 font-medium mb-2">Insurances Name <sup class="text-red-700">*</sup></label>
          <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <i class="fa-solid fa-user text-gray-400 mr-2"></i>
            <input
              type="text"
              id="insuranceName"
              v-model="doctor.insuranceName"
              class="w-full border-none focus:outline-none"
              placeholder="Insurance Name"
              required
              >
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="Services Tax" class="block text-gray-700 font-medium mb-2">Services Tax</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-percent text-gray-400 mr-2"></i>
            
              <input
                type="text"
                id="Services Tax"
                v-model="doctor.servicesTax"
                class="w-full border-none focus:outline-none"
                placeholder="Services Tax"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="discount" class="block text-gray-700 font-medium mb-2">Discount</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-percent text-gray-400 mr-2"></i>
              <input
                type="text"
                id="discount"
                v-model="doctor.discount"
                class="w-full border-none focus:outline-none"
                placeholder="Discount"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="insuranceNumber" class="block text-gray-700 font-medium mb-2">Insurance Number</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-arrow-down-9-1 text-gray-400 mr-2"></i>
        
              <input
                type="text"
                id="insuranceNumber"
                v-model="doctor.insuranceNumber"
                class="w-full border-none focus:outline-none"
                placeholder="Insurance Number"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="insuranceCode" class="block text-gray-700 font-medium mb-2">Insurances Code</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">

              <i class="fa-solid fa-code text-gray-400 mr-2"></i>
              <input
                type="text"
                id="insuranceCode"
                v-model="doctor.insuranceCode"
                class="w-full border-none focus:outline-none"
                placeholder="Insurances Code"
                required
              />
            </div>
          </div>
        </div>
        <hr>

        <div class="table1 mb-5">
          <table class=" w-full mt-4">
            <thead class=" bg-gray-300 p-4 mb-3">
              <tr>
                <th class="p-3 text-start">Desease Name</th>
                <th class="text-start" >Desease Type</th>
                <th class="text-start" >Add / Remove</th>
              </tr>
              </thead>
              <tbody class="">
                <tr class=" ">
                  <td class="text-start">
                   
                      <input class=" border-2 border-gray-200 p-2 mt-3 w-96 focus:outline-none rounded-lg"  type="text" name="" id="" placeholder="Desease Name">
                   
                  </td>
                  <td class="text-start">
                    <input class=" border-2 border-gray-200 p-2 mt-3 w-96 focus:outline-none rounded-lg" type="text" name="" id="" placeholder="Dessease Type">
                  </td>
                  <td>
                    <div class="btn-re-add  mt-3">
                      <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Add</button>
                      <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ml-2">Remove</button>

                    </div>
                  </td>
                </tr>
              </tbody>
          
          </table>

          </div>
          <hr class=" mb-5">

          <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="Hospital-Rate" class="block text-gray-700 font-medium mb-2">Hospital Rate</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              
              <i class="fa-brands fa-slack text-gray-400 mr-2"></i>
              <input
                type="text"
                id="hospitalRate"
                v-model="doctor.hospitalRate"
                class="w-full border-none focus:outline-none"
                placeholder="Hospital Rate"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="nsuranceRate" class="block text-gray-700 font-medium mb-2">Insurance Rate</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">

              <i class="fa-solid fa-percent text-gray-400 mr-2"></i>
              <input
                type="text"
                id="nsuranceRate"
                v-model="doctor.insuranceRate"
                class="w-full border-none focus:outline-none"
                placeholder="Insurance Rate"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="Total" class="block text-gray-700 font-medium mb-2">Total</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
             
              <i class="fa-solid fa-calendar text-gray-400 mr-2"></i>
              <input
                type="text"
                id="Total"
                v-model="doctor.total"
                class="w-full border-none focus:outline-none"
                placeholder="Total"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
              <label for="status" class="block text-gray-700 font-medium mb-2">Status </label>
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

        
        <hr class=" mb-2">
        
    
        <div class="">
          <div class="mb-6">
          <QuillEditor3 />
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
import QuillEditor3 from './QuillEditor3.vue';

export default{
    name: "AddInsurance",
    components: {
        QuillEditor3
    },
    data() {
      return {
        doctor: {
          insuranceName: "",
          servicesTax: "",
          discount: "",
          insuranceNumber: "",
          insurancetype: "",
          insuranceCode: "",
          diseasName: "",
          diseasType: "",
          hospitalRate: "",
          insuranceRate: "",
          total: "",
          status: "",
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.doctor);
      },
    }
}
</script>
<style scoped>
.file-upload {
  position: relative;
  height: 150px;
  background-color: #f3f4f6;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}
.file-upload:hover {
  border-color: #3b82f6;
}
.file-upload input[type="file"] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.file-upload img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
.file-upload .text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
  </style>