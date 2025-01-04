<template>
    <div id="main-layout">
      <HeaderBar />
      <div class="main">
        <AsideBar :isCollapsed="isAsideCollapsed" @toggle="toggleAside" />
        <div :class="['content', { collapsed: isAsideCollapsed }]">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderBar from '@/components/HeaderBar.vue';
  import AsideBar from '@/components/AsideBar.vue';
  
  export default {
    name: 'MainLayout',
    components: { HeaderBar, AsideBar },
    data() {
      return {
        isAsideCollapsed: false,
      };
    },
    methods: {
      toggleAside() {
        this.isAsideCollapsed = !this.isAsideCollapsed;
      },
    },
  };
  </script>
  
  <style>
  .main-layout {
    display: flex;
    margin-top: 60px; /* Offset for HeaderBar */;
  }
  
  .main {
    flex: 1;
    padding: 20px;
    /* background-color: #f8f9fa; */
    overflow: auto;
  }
  
  .content {
    margin-top: 60px; /* Matches HeaderBar height */
    margin-left: 250px; /* Matches AsideBar width */
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    transition: margin-left 0.3s ease;
  }
  
  .content.collapsed {
    margin-left: 70px;
  }
  </style>