<template>
    <div class="content4 mt-5">
        <div class="header flex justify-between border-b-2 border-gray-200 pb-2">
            <div class="name">
                <p class=" text-3xl font-bold text-white">Lab Report Information</p>
            </div>
            <div class="flex space-x-4">
                <div class="btn-edit">
                <button class=" bg-white w-20 h-10 text-green-500 rounded-md">
                    Edit
                </button>
            </div>
            <div class="btn-edit" >
                <button @click="printPage" class=" bg-white w-20 h-10 text-blue-600 rounded-md">
                    <i class="fa-solid fa-print"></i>   Print
                </button>
            </div>
            </div>
        </div>
        <div class="profile bg-white shadow-md rounded-md p-4 mt-5 ">
           <div class=" flex space-x-4 border-b-2 border-dashed border-gray-200 pb-5 ">
            <div class="profile w-2/6 border-b-2 border-yellow-400 rounded-e-full p-3 text-center m-0 bg-white shadow-md">
                <img class="w-28 h-28 rounded-full" src="../../../assets/profile.jpg" alt="" style="margin: auto;">
               <div class="name pb-5 ">
                <p class=" text-xl font-bold mt-4">Patient: Demo Test</p>
                <p>2025-02-03</p>
                <p>ID: 12345</p>
               </div>
            </div>
            <div class="brieft-bg w-3/2">
            </div>

           </div>
           <div class="list-brief mt-5 gap-4 text-start ml-5 ">
            <div class="header-left text-end">
                <p>Report Date: 27 Feb 2025</p>
                <p>Lab Report ID #00010</p>
            </div>
            <div class="report-body">
                <div class="logo flex items-center justify-center space-x-2 text-center">
                    <img class=" w-14 bg-slate-500" src="../../../assets/logo1.png" alt="">
                <p class=" font-bold text-2xl">Hospital Management System</p>
                </div>
                <div class=" text-center mt-2 mb-10">
                    <p class="mt-5">Office # 2, 1st Floor, Allied Commercial Plaza, Main Chandni Chowk, Rawalpindi.</p>
                    <p class="mt-5">Email: hms123@gmail.com</p>
                    <p class="mt-2 mb-5">Phone: 099 672 234</p>
                    <p class=" font-bold mt-2">Lab Report</p>
                </div>
            </div>
   
  </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'InforLab',
    methods: {
    printPage() {
      window.print();
    }
  }
}
</script>