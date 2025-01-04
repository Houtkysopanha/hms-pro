<template>
  <header class="header-bar fixed top-0 left-0 right-0 bg-gradient-to-r bg-slate-700 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] z-50">
    <div class="header w-full flex items-center justify-between px-6 py-3">
      <!-- Logo Section -->
      <div class="logo flex items-center gap-4">
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
      <div class="search flex-grow max-w-lg mx-6">
        <input
          type="text"
          placeholder="Search for patients, records..."
          class="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Profile Section -->
      <div class="profile flex items-center">
        <div class="relative group">
          <img
            src="../assets/profile.jpg"
            alt="Profile"
            class="w-10 h-10 rounded-full border cursor-pointer"
          />
          <!-- Dropdown Menu -->
          <div
            class="absolute right-0 mt-1 w-40 hidden group-hover:block bg-white text-gray-700 rounded-lg shadow-md z-50"
          >
            <ul class="py-2 text-sm">
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <i class="fa-solid fa-id-card-clip"></i>  View Profile
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <i class="fa-solid fa-gear"></i>  Settings
              </li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <i class="fa-solid fa-right-from-bracket"></i> Logout
              </li>
            </ul>
          </div>
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
/* Additional styles (if needed) can go here. */
</style>
