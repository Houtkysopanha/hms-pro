<template>
    <div class="main bg-white shadow-md rounded-lg">
      <div class="header flex justify-between items-center border-b-2 border-gray-300 pb-3">
        <div class="name">
          <p class="text-3xl font-medium">Notifications</p>
        </div>
        <div class="btn-deleted">
          <button @click="clearAll" class="w-20 rounded-lg font-2xl font-medium text-white shadow-md hover:bg-blue-500 h-10 p-2 bg-blue-400">Clear All</button>
        </div>
      </div>
      <div class="table-container mt-4">
        <table class="min-w-full">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 border-b text-left">Type</th>
              <th class="py-3 px-4 border-b text-left">Subject</th>
              <th class="py-3 px-4 border-b text-left">Date</th>
              <th class="py-3 px-4 border-b text-end">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(notification, index) in notifications" :key="index" class="hover:bg-gray-50 cursor-pointer" @click="openModal(notification)">
              <td class="py-5 px-4 border-b flex items-center">
                <img :src="notification.photo" alt="Profile" class="w-8 h-8 rounded-full mr-2">
                {{ notification.type }}
              </td>
              <td class="py-4 px-4 border-b">{{ notification.subject }}</td>
              <td class="py-4 px-4 border-b">{{ notification.date }}</td>
              <td class="py-4 px-4 border-b text-end">
                <button @click.stop="deleteNotification(index)" class="w-15 rounded-lg font-2xl font-medium text-white shadow-md hover:bg-green-500 h-10 p-2 bg-green-400">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modal -->
      <transition name="modal">
        <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
            <h2 class="text-2xl font-bold mb-4">Notification Details</h2>
            <p class=" border-b-2 border-gray-200"><strong>Type:</strong> {{ selectedNotification.type }}</p>
            <p class=" border-b-2 border-gray-200"><strong>Subject:</strong> {{ selectedNotification.subject }}</p>
            <p class=" border-b-2 border-gray-200"><strong>Date:</strong> {{ selectedNotification.date }}</p>
            <p class=" border-b-2 border-gray-200"><strong>Details:</strong> {{ selectedNotification.descrip }}</p>
            <button @click="closeModal" class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Close</button>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotiFication",
    data() {
      return {
        notifications: [
          { type: 'Info', subject: 'System Update', date: '01/07/2025 07:09 AM', photo: require('../assets/profile.jpg'),descrip: 'This is additional detail information for the notification.' },
          { type: 'Warning', subject: 'Password Expiry', date: '01/07/2025 07:09 AM', photo: require('../assets/profile.jpg'),descrip: 'This is additional detail information for the notification.' },
          { type: 'Alert', subject: 'Unauthorized Access', date: '01/07/2025 07:09 AM', photo: require('../assets/profile.jpg'),descrip: 'This is additional detail information for the notification.' },
          // Add more notifications as needed
        ],
        showModal: false,
        selectedNotification: null,
      };
    },
    methods: {
      openModal(notification) {
        this.selectedNotification = notification;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedNotification = null;
      },
      clearAll() {
        this.notifications = [];
      },
      deleteNotification(index) {
        this.notifications.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .main {
    padding: 20px;
  }
  .table-container {
    margin-top: 20px;
  }
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.5s;
  }
  .modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>