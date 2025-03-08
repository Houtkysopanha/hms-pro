<template>
    <div class="content3 mt-5">
      <div class="header border-b-2 border-gray-200 pb-2 mb-6">
        <p class="text-3xl font-bold text-white">Add Patient</p>
      </div>
      <div class="form-field shadow-lg rounded-lg p-8 bg-white">
        <form @submit.prevent="submitForm">
            <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="email" class="block text-gray-700 font-medium mb-2">Name <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-envelope text-gray-400 mr-2"></i>
                <input
                  type="text"
                  id="name"
                  v-model="doctor.name"
                  class="w-full border-none focus:outline-none"
                  placeholder="Enter patient name"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="password" class="block text-gray-700 font-medium mb-2">Email <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-lock text-gray-400 mr-2"></i>
                <input
                  type="email"
                  id="email"
                  v-model="doctor.email"
                  class="w-full border-none focus:outline-none"
                  placeholder="Enter patient email"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="email" class="block text-gray-700 font-medium mb-2">Phone <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-envelope text-gray-400 mr-2"></i>
                <input
                  type="number"
                  id="number"
                  v-model="doctor.phone"
                  class="w-full border-none focus:outline-none"
                  placeholder="Enter patient phone number"
                  required
                />
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="password" class="block text-gray-700 font-medium mb-2">Password <sup class=" text-red-700">*</sup></label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-lock text-gray-400 mr-2"></i>
                <input
                  type="password"
                  id="password"
                  v-model="doctor.password"
                  class="w-full border-none focus:outline-none"
                  placeholder="Enter patient password"
                  required
                />
              </div>
            </div>
        </div>
          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
              <label for="gender" class="block text-gray-700 font-medium mb-2">Gender</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-venus-mars text-gray-400 mr-2"></i>
                <select
                  id="gender"
                  v-model="doctor.gender"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="" disabled>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="w-1/2 mb-6">
              <label for="blood" class="block text-gray-700 font-medium mb-2">Blood Group</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-tint text-gray-400 mr-2"></i>
                <select
                  id="blood"
                  v-model="doctor.blood"
                  class="w-full border-none focus:outline-none"
                  required
                >
                  <option value="" disabled>Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
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
            <div class="w-1/2 mb-6">
              <label for="date" class="block text-gray-700 font-medium mb-2">Date of Birth</label>
              <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
                <i class="fa-solid fa-calendar text-gray-400 mr-2"></i>
                <input
                  type="date"
                  id="date"
                  v-model="doctor.date"
                  class="w-full border-none focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="w-1/2 mb-6">
  <label for="address" class="block text-gray-700 font-medium mb-2">Address</label>
  <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
    <textarea
      id="address"
      v-model="doctor.address"
      class="w-full h-32 border-none focus:outline-none resize-none"
      placeholder="Enter doctor's address"
      required
    ></textarea>
  </div>
</div>
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
    name: 'AddPatient',
    components: {
        // QuillEditor1,
    },
    data() {
      return {
        doctor: {
          name: '',
          email: '',
          password: '',
          phone: '',
          date: '',
          specialist: '',
          designation: '',
          gender: '',
          blood: '',
          department: '',
          status: '',
          address: '',
          profilePicture: null
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.doctor);
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