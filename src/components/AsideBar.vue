<template>
    <aside :class="{ collapsed: isCollapsed }" class="aside-bar">
      <div class="wrapper">
        <!-- Sidebar -->
        <div
          class="asidebar flex flex-col text-white transition-all duration-300"
          :class="{ 'w-60': toggleCollapse, 'w-16': !toggleCollapse }"
        >
          <!-- Hamburger Button -->
          <div class="header-bar ">
            <div class="logo text-center">
              <div class="logo-inner text-4xl mt-16 border-dashed border-b-2 border-light-blue-500">
                <button @click="toggleCollapse" class="hamburger">
                  <p :class="{'text-3xl': toggleCollapse, 'transition-all duration-300': !toggleCollapse}" class="font-bold ">HMS</p>
                </button>
              </div>
            </div>
          </div>
          <div class="status text-center mt-2 border-dashed border-b-2 border-light-blue-500"
            :class="{ 'hidden': !isSidebarExpanded, 'block': isSidebarExpanded }">
            <div class="profile text-center">
              <img style="margin: auto" class="w-20 h-20 rounded-full border" src="../assets//profile.jpg" alt="">
            </div>
            <div class="inofor mt-2 mb-3">
              <p>Demo Test</p>
              <i class="fa-solid fa-caret-up" style="color: lightgreen; font-size: 15px;"> <span class="font-sans"> Admin</span> </i>
            </div>
          </div>
  
          <!-- Sidebar Items -->
          <div class="sidebar-list overflow-y-auto flex-1">
            <ul class="flex-1 mt-5 space-y-3">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="group"
              >
                <!-- Main Item -->
                <div
                  class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-all cursor-pointer"
                  @click="toggleDropdown(index)"
                >
                  <router-link :to="item.path" class="flex items-center">
                    <i :class="item.icon" class="w-6 h-6 text-xl ml-3"></i>
                    <span
                      class="whitespace-nowrap transition-all duration-300 ml-10"
                      :class="{ hidden: !isSidebarExpanded, block: isSidebarExpanded }"
                    >
                      {{ item.text }}
                    </span>
                  </router-link>
                  <!-- Dropdown Indicator -->
                  <i
                    v-if="item.children"
                    style="margin: 0;"
                    class="fa-solid fa-chevron-down"
                    :class="{ hidden: !isSidebarExpanded }"
                  ></i>
                </div>
                <!-- Dropdown Items -->
              <ul v-if="item.children && dropdownOpen === index" class="ml-10">
                <li
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-all cursor-pointer"
                >
                  <router-link :to="child.path" class="flex items-center">
                    <i :class="child.icon" class="w-6 h-6 text-xl ml-3"></i>
                    <span
                      class="whitespace-nowrap transition-all duration-300 ml-5"
                      :class="{ hidden: !isSidebarExpanded, block: isSidebarExpanded }"
                    >
                      {{ child.text }}
                    </span>
                  </router-link>
                </li>
              </ul>
              </li>
            </ul>
          </div>
  
          <!-- Footer -->
          <div class="footer-bar">
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 12c-2.67 0-5.33-1.34-6.4-3.46.03-.68.68-1.24 1.39-1.24.6 0 1.1.37 1.31.91 1.16 2.08 4.06 2.09 5.22 0 .21-.54.71-.91 1.31-.91.71 0 1.36.56 1.39 1.24C17.33 16.66 14.67 18 12 18z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    props: ['isCollapsed'],
    data() {
    return {
      isSidebarExpanded: true, // Default expanded state
      dropdownOpen: null, // Track the open dropdown
      menuItems: [
  { icon: "fa-solid fa-tachometer-alt", text: "Dashboard", path: "/dashboard" },
  { icon: "fa-solid fa-hospital", text: "Hospital Department", path: "/hospittal-department" },
  { icon: "fa-solid fa-user-md", text: "Doctor" },
  { icon: "fa-solid fa-user-injured", text: "Patient" },
  { icon: "fa-solid fa-calendar-check", text: "Doctor Schedule" },
  { icon: "fa-solid fa-calendar-day", text: "Patient Appointment" },
  { icon: "fa-solid fa-file-medical-alt", text: "Patient Case Study" },
  { icon: "fa-solid fa-prescription", text: "Prescription" },
  { icon: "fa-solid fa-shield-alt", text: "Insurance" },
  {
    icon: "fa-solid fa-flask",
    text: "Lab",
    path: "",
    children: [
      { icon: "fa-solid fa-vial", text: "Lab Report", path: "" },
      { icon: "fa-solid fa-file-medical", text: "Lab Report Template", path: "" }
    ]
  },
  {
    icon: "fa-solid fa-coins",
    text: "Financial Activities",
    path: "",
    children: [
      { icon: "fa-solid fa-user-tie", text: "Accountant Header", path: "" },
      { icon: "fa-solid fa-file-invoice", text: "Invoice", path: "" },
      { icon: "fa-solid fa-money-bill-wave", text: "Payment", path: "" },
      { icon: "fa-solid fa-chart-line", text: "Report", path: "" }
    ]
  },
  { icon: "fa-solid fa-code", text: "Front-ends" },
  { icon: "fa-solid fa-envelope", text: "Contact Us" },
  {
    icon: "fa-solid fa-envelope-open-text",
    text: "Email",
    path: "",
    children: [
      { icon: "fa-solid fa-envelope", text: "Email Templates", path: "" },
      { icon: "fa-solid fa-money-check-alt", text: "Payment", path: "" },
      { icon: "fa-solid fa-file-alt", text: "Report", path: "" }
    ]
  },
  {
    icon: "fa-solid fa-sms",
    text: "SMS",
    path: "",
    children: [
      { icon: "fa-solid fa-sms", text: "SMS Gateways", path: "" },
      { icon: "fa-solid fa-file-alt", text: "SMS Templates", path: "" },
      { icon: "fa-solid fa-bullhorn", text: "SMS Campaign", path: "" }
    ]
  },
  {
    icon: "fa-solid fa-cogs",
    text: "Settings",
    path: "",
    children: [
      { icon: "fa-solid fa-users-cog", text: "User  Management", path: "" },
      { icon: "fa-solid fa-tools", text: "Application Settings", path: "" },
      { icon: "fa-solid fa-envelope", text: "SMTP Settings", path: "" },
      { icon: "fa-solid fa-sliders-h", text: "General Settings", path: "" },
      { icon: "fa-solid fa-coins", text: "Currencies", path: "" },
      { icon: "fa-solid fa-percentage", text: "Tax Rates", path: "" }
    ]
  },
],
    }
  },
  methods: {
      toggleCollapse() {
        this.$emit('toggle');
        this.isSidebarExpanded = !this.isSidebarExpanded;
      },
      
    toggleDropdown(index) {
      this.dropdownOpen = this.dropdownOpen === index ? null : index; // Toggle dropdown
    },
    },
  };
  </script>
  
  <style scoped>
  .aside-bar {
    position: fixed;
    top: 60px;
    left: 0;
    width: 250px;
    height: calc(100vh - 60px);
    background-color: #343a40;
    color: white;
    /* overflow-y: auto; */
    transition: width 0.3s ease;
  }
  .sidebar-list{
    flex: 1;
    overflow-y: auto;
  }
  .aside-bar.collapsed {
    width: 70px;
  }
  
  .hamburger {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin: 10px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
  }
  
  nav ul li {
    margin: 15px 10px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }


  .wrapper {
  /* display: flex; */
  /* height: 100vh; */
  width: 100%;
  position: static;
}

.asidebar {
  width: auto;
  height: 100vh;
  background-color: #334155;
}

/* Styling for expanded/collapsed sidebar */
.asidebar {
  transition: width 0.3s ease-in-out;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
.dropdown {
  margin-left: 20px; /* Indent dropdown items */
  list-style: none;
  padding: 0;
}
.dropdown li {
  margin-bottom: 5px;
}
.asidebar {
  height: 100vh;
  transition: width 0.3s ease-in-out;
}

.dropdown {
  margin-left: 20px; /* Indent dropdown items */
  list-style: none;
  padding: 0;
}

.dropdown li {
  margin-bottom: 5px;
}

#style-3::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

#style-3::-webkit-scrollbar
{
	width: 2px;
	background-color: #F5F5F5;
}

#style-3::-webkit-scrollbar-thumb
{
	background-color: #000000;
}

.aside-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #343a40;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
}

.aside-bar.collapsed {
  width: 80px;
}

.header-bar {
  position: sticky;
  top: 0;
  background-color: #343a40;
  z-index: 10;
}

.status {
  position: sticky;
  top: 60px; /* Adjust this value based on the height of the header */
  /* background-color: #343a40; */
  z-index: 10;
}

.sidebar-list {
  flex: 1;
  overflow-y: auto;
}

.footer-bar {
  position: sticky;
  bottom: 0;
  background-color: #343a40;
  padding: 10px;
  text-align: center;
  z-index: 10;
}

.hamburger {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}
  </style>
  