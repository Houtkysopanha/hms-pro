<template>
    <div class="min-h-screen flex items-center justify-center relative">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        :style="{ backgroundImage: 'url(https://ghpnews.digital/wp-content/uploads/2021/01/healthcare.jpg)' }">
      </div>
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative z-10 border-2 border-white" style="background-color: rgba(255, 255, 255, 0.6);">
        <div class="logo-hms flex justify-center mb-4">
          <img src="../../assets/logo1.png" alt="Logo" class="w-1/3">
        </div>
        <h2 class="text-blue-950 text-2xl font-bold mb-6 text-center mt-2">Hospital Management System</h2>
        <h2 class="text-blue-950 text-2xl font-bold mb-4 mt-4 text-center">Please Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full p-3 border-2 bg-transparent border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full p-3 border-2 bg-transparent border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div class="flex items-center mb-2">
            <input type="checkbox" class="w-7 h-10">
            <label for="remember" class="text-gray-700 ml-2">Remember me</label>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-950 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
          >
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Login
          </button>
        </form>
        <div v-if="loading" class="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
  <!-- Logo -->
  <!-- <img src="../../assets/logo1.png" alt="Logo" class="w-24 h-auto mb-4" /> -->
  
  <!-- Spinner -->
  <div class="spinner-square">
    <div class="square-1 square"></div>
    <div class="square-2 square"></div>
    <div class="square-3 square"></div>
  </div>
</div>


      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
        loading: false,
      };
    },
    methods: {
      handleLogin() {
        console.log('Login form submitted');
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        this.loading = true;
        // Simulating a login by storing a fake token
        sessionStorage.setItem('auth_token', 'my-token');
        
  
        // Simulate a delay with a timeout
      setTimeout(() => {
        // Simulating a login by storing a fake token
        sessionStorage.setItem('auth_token', 'my-token');

        // Redirect to the dashboard after login
        this.$router.push({ name: 'Dashboard' }).catch((err) => {
          console.error('Redirection error:', err);
        });

        this.loading = false;
      }, 3000); // 2-second delay
      },
    },
  };
  </script>
  
  <style scoped>
.spinner-square {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 120px;
}

.spinner-square > .square {
  width: 20px;
  height: 80px;
  margin: 0 5px;
  border-radius: 4px;
  background-color: rgb(111, 163, 240);
}


.square-1 {
  animation: square-anim 1.2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
}

.square-2 {
  animation: square-anim 1.2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s infinite;
}

.square-3 {
  animation: square-anim 1.2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s infinite;
}

@keyframes square-anim {
  0%, 100% {
    height: 80px;
    background-color: rgb(111, 163, 240);
  }
  40% {
    height: 120px;
    background-color: rgb(111, 200, 240);
  }
}

  </style>