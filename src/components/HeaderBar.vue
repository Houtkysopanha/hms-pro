<template>
  <header class="header-bar fixed top-0 left-0 right-0 bg-gradient-to-r shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] z-50">
    <div class="header w-full flex items-center justify-between px-6 py-3">
      <!-- Logo Section -->
      <div class="logo flex items-center gap-4">
        <button @click="$emit('toggle-aside')" class="hamburger md:hidden">
          <i class="fa-solid fa-bars text-2xl text-white"></i>
        </button>
        <img
          src="../assets/logo1.png"
          alt="Logo"
          class="w-12 h-12 rounded-full"
        />
        <p class="text-white font-bold text-sm leading-tight">
          Hospital Management <br />
          System
        </p>
      </div>

      <!-- Search Section -->
      <div class="search flex-grow max-w-lg mx-6 hidden md:block">
        <input
          type="text"
          placeholder="Search for patients, records..."
          class="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Profile Section -->
      <div class="profile flex items-center">
        <div class="relative mr-2  pl-4">
            <router-link to="/notifications">
              <i class="fa-solid fa-bell text-2xl text-white mr-4 cursor-pointer"></i>
            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
            </router-link>
          </div>
        <div class="relative group">
          <img
            src="../assets/profile1.png"
            alt="Profile"
            class="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
          />
          <!-- Dropdown Menu -->
          <div
            class="absolute right-0 mt-1 w-40 hidden group-hover:block bg-white text-gray-700 rounded-lg shadow-md z-50"
          >
            <ul class="py-2 text-sm">
              <router-link to="/my-profile">
           
                  <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <i class="fa-solid fa-id-card-clip"></i>  View Profile
              </li>
             
              </router-link>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <i class="fa-solid fa-gear"></i>  Settings
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <i class="fa-solid fa-right-from-bracket"></i> Logout
              </li>
            </ul>
          </div>
          
        </div>
        <div class="name text-white ml-2">
          <p class=" font-bold">Demo Test</p>
          <p class=" text-sm">Admin</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style scoped>
.header-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #343a40;
}

.header {
  width: 100%;
}
.profile-picture img{
  border: 2px solid gainsboro;
}
.hamburger {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
  .search {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
