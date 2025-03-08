<template>
    <div id="main-layout">
      <HeaderBar @toggle-aside="toggleMobile" />
      <div class="main">
        <AsideBar :isCollapsed="isAsideCollapsed" :isMobileHidden="isMobileHidden" :isMobile="isMobile" @toggle="toggleAside" />
        <main>
          <div :class="['content', { collapsed: isAsideCollapsed }]">
          <router-view />
        </div>
        </main>
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
        isMobileHidden: true,
        isMobile: false,
      };
    },
    methods: {
      toggleAside() {
        this.isAsideCollapsed = !this.isAsideCollapsed;
      },
      toggleMobile() {
        this.isMobileHidden =!this.isMobileHidden;
      },
      
      
    },
    mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
    
  };
  </script>
  
  <style>
  #main-layout {
    display: flex;
    margin-top: 60px; /* Offset for HeaderBar */;
  }
  
  .main {
    flex: 1;
    /* padding: 20px; */
    /* background-color: #f8f9fa; */
    overflow: auto;
  }
  .content {
    /* margin-top: 60px;  */
    margin-left: 250px; 
    padding: 25px;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    transition: margin-left 0.3s ease;
    background-color: lightblue;

  }
  
  .content.collapsed {
    margin-left: 80px;
}
@media (max-width: 768px) {
  .main {
    flex-direction: column;
  }
  .content {
    margin-left: 0;
    margin-top: 30px;
  }
  .collapsed {
    margin-left: 0;
  }
}
  </style>