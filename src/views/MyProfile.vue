<template>
    <div class="content3 mt-5">
      <div class="header-content flex justify-between items-center border-b-2 border-gray-200 pb-2 mb-6">
        <div class="header ">
        <p class="text-3xl font-bold text-gray-800">My Profile</p>
      </div>
      <div class="btn-edit">
        <button class=" w-20 h-10 rounded-md font-medium text-white shadow-md hover:bg-white " style=" background-color: lightblue;">
            Edit
        </button>
      </div>
      </div>
      <div class="profile-picture mb-6 flex flex-col items-center py-2" style="background-color: lightblue;">
        <img class="w-32 h-32 rounded-full border" src="../assets/profile1.png" alt="">
         
        </div>
      <div class="profile-container flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
        <div class="profile-info w-full">
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Name</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-user text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.name"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-envelope text-gray-400 mr-2"></i>
              <input
                type="email"
                v-model="profile.email"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Phone</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-phone text-gray-400 mr-2"></i>
              <input
                type="tel"
                v-model="profile.phone"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Address</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-map-marker-alt text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.address"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Specialist</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-stethoscope text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.specialist"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Designation</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-briefcase text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.designation"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Gender</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-venus-mars text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.gender"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Blood Group</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-tint text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.bloodGroup"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Department</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-building text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.department"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Status</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <i class="fa-solid fa-info-circle text-gray-400 mr-2"></i>
              <input
                type="text"
                v-model="profile.status"
                class="w-full border-none focus:outline-none"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyProfile',
    data() {
      return {
        profile: {
          name: 'Dr. Demo Test',
          email: 'drdemotest@gmail.com',
          phone: '099 1123 1234',
          address: '123 Main St, City, Country',
          specialist: 'General Doctor',
          designation: 'Senior Doctor',
          gender: 'Male',
          bloodGroup: 'O+',
          department: 'Cardiology',
          status: 'Active'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .content3 {
    padding: 20px;
    background-color: #f9fafb;
    min-height: 100vh;
  }
 
  .profile-picture img {
    border: 4px solid #e2e8f0;
  }
  </style>