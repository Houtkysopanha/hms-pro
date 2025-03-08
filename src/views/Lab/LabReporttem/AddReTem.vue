<template>
    <div class="content3 mt-5">
      <div class="header border-b-2 border-gray-200 pb-2 mb-6">
        <p class="text-3xl font-bold text-white">Add Patient</p>
      </div>
      <div class="form-field shadow-lg rounded-lg p-8 bg-white">
        <form @submit.prevent="submitForm">
            <div class="flex space-x-4">
            <div class="w-full mb-6">
              <label for="email" class="block text-gray-700 font-medium mb-2">Template Name <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-envelope text-gray-400 mr-2"></i>
                <input
                  type="text"
                  id="name"
                  v-model="doctor.name"
                  class="w-full border-none focus:outline-none"
                  placeholder="Template Name"
                  required
                />
              </div>
            </div>
    
          </div>
        
        
          <label for="email" class="block text-gray-700 font-medium mb-2">Report Body <sup class=" text-red-700">*</sup></label>
          <div class=" mb-5">
            <ChipFeat />
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
  import ChipFeat from './ChipFeat.vue';
//   import QuillEditor1 from './QuillEditor1.vue';
  export default {
    name: 'AddReTem',
    components: {
        // QuillEditor1,
        ChipFeat,
    },
    data() {
      return {
        doctor: {
          name: '',
         
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