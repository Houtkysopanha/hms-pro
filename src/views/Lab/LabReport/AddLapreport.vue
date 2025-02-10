<template>
    <div class="content3 mt-5">
      <div class="header border-b-2 border-gray-200 pb-2 mb-6">
        <p class="text-3xl font-bold text-white">Add Lab Report</p>
      </div>
      <div class="form-field shadow-lg rounded-lg p-8 bg-white">
        <form @submit.prevent="submitForm">
          <div class="space-y-4">
            <div class="flex space-x-4" v-for="(row, index) in fieldRows" :key="index">
              <div class="w-1/2 mb-5" v-for="key in row" :key="key">
                <label :for="key" class="block text-gray-700 font-medium mb-2">{{ fields[key].label }}</label>
                <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                  <i :class="fields[key].icon" class="text-gray-400 mr-2"></i>
                 
                  <input v-if="fields[key].type === 'text'" type="text" :id="key" v-model="doctor[key]" class="w-full border-none focus:outline-none" :placeholder="fields[key].label" required />
                  <input v-else-if="fields[key].type === 'date'" type="date" :id="key" v-model="doctor[key]" class="w-full border-none focus:outline-none" required />
                  <select v-else v-model="doctor[key]" class="w-full border-none focus:outline-none" required>
                    <option value="" disabled>Select an option</option>
                    <option v-for="option in fields[key].options" :key="option" :value="option">{{ option }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <QuillEditor4 />
          </div>
          <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="file-upload" class="block text-gray-700 font-medium mb-2">Upload Profile Picture or Document</label>
            <div class="file-upload flex items-center justify-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 relative">
              <input
                type="file"
                id="file-upload"
                @change="handleFileUpload"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*,.pdf,.doc,.docx"
              />
              <div v-if="doctor.profilePicture" class="w-full h-full flex items-center justify-center relative">
                <img v-if="isImage(doctor.profilePicture)" :src="doctor.profilePicture" alt="Profile Picture" class="w-32 h-32 object-cover rounded-full border" />
                <div v-else class="text-center text-gray-500">
                  <i class="fa-solid fa-file-alt text-3xl"></i>
                  <p>{{ doctor.fileName }}</p>
                </div>
                <button @click="removeFile" class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>
              <div v-else class="text-center text-gray-500">
                <i class="fa-solid fa-cloud-upload-alt text-3xl"></i>
                <p>Click to upload</p>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-2">Max size: 2MB</p>
          </div>
          <div class="w-1/2 mb-6">
            <!-- Additional form fields or content -->
          </div>
          </div>
          <hr class="pb-2" />
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
import QuillEditor4 from './QuillEditor4.vue';
  export default {
    name: "AddLabReport",
    components: { QuillEditor4 },
   
    data() {
      return {
        doctor: { Date: "", selectPatient: "", selectDoctor: "", selectLab: "", select2: "" },
        fields: {
            Date: { label: "Date", icon: "fa-solid fa-calendar", type: "date" },
            selectPatient: { label: "Select Patient", icon: "fa-solid fa-user", type: "select",
                options: ["ID:1: Name: Patient", "ID:1: Name: Patient", "ID:1: Name: Patient", "ID:1: Name: Patient"]
             },
            selectDoctor: { label: "Select Doctor", icon: "fa-solid fa-user-md", type: "select", 
                options: ["DemeTest", "DemeTest", "DemeTest", "DemeTest"]
             },
            selectLab: { label: "Select Lab", icon: "fa-solid fa-hospital", type: "select", 
                options: ["Lab 1", "Lab 2", "Lab 3", "Lab 4"]
             },
        },
      };
    },
    computed: {
      fieldRows() {
        const keys = Object.keys(this.fields);
        return keys.reduce((rows, key, index) => {
          if (index % 2 === 0) rows.push([key]);
          else rows[rows.length - 1].push(key);
          return rows;
        }, []);
      },
    },
    methods: {
      submitForm() {
        console.log("Form submitted:", this.doctor);
      },
      handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert('File size exceeds 2MB');
          return;
        }
        this.doctor.fileName = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.doctor.profilePicture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    isImage(file) {
      return file.startsWith('data:image');
    },
    removeFile() {
      this.doctor.profilePicture = null;
      this.doctor.fileName = '';
    }
    },
  };
  </script>
  <style>
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