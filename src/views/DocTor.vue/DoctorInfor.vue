<template>
    <div class="content4 mt-5">
        <div class="header flex justify-between border-b-2 border-gray-200 pb-2">
            <div class="name">
                <p class=" text-3xl font-bold text-white">Doctor Information</p>
            </div>
            <div class="btn-edit">
                <button class=" bg-white w-20 h-10 text-green-500 rounded-md">
                    Edit
                </button>
            </div>
        </div>
        <div class="profile bg-white shadow-md rounded-md p-4 mt-5 ">
           <div class=" flex space-x-4 border-b-2 border-dashed border-gray-200 pb-5 ">
            <div class="profile w-2/6 border-b-2 border-yellow-400 rounded-e-full p-3 text-center bg-white shadow-md">
                <img class="w-28 h-28 rounded-full" src="../../assets/profile.jpg" alt="" style="margin: auto;">
               <div class="name pb-5">
                <p class=" text-xl font-bold mt-4">Dr Demo Test</p>
                <p class=" text-sm text-gray-500 mt-2">General Doctor</p>
               </div>
            </div>
            <div class="brieft-bg w-3/2">
            </div>

           </div>
           <div class="list-brief mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-start ml-5 ">
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Name</p>
      <p class="font-medium text-md text-gray-500 mt-3">Dr Demo Test</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Email</p>
      <p class="font-medium text-md text-gray-500 mt-3">drdemotest@gmail.com</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Phone</p>
      <p class="font-medium text-md text-gray-500 mt-3">099 1123 1234</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Address</p>
      <p class="font-medium text-md text-gray-500 mt-3">Office # 02, First Floor Allied Commercial Plaza</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Specialist</p>
      <p class="font-medium text-md text-gray-500 mt-3">General Doctor</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Designation</p>
      <p class="font-medium text-md text-gray-500 mt-3">Doctor</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Gender</p>
      <p class="font-medium text-md text-gray-500 mt-3">Male</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Blood Group</p>
      <p class="font-medium text-md text-gray-500 mt-3">o-</p>
    </div>
    <div class="row1 border-b-2 border-gray-200">
      <p class="font-bold text-lg">Date of Birth</p>
      <p class="font-medium text-md text-gray-500 mt-3">2000-02-20</p>
    </div>
    <div class="row1 ">
      <p class="font-bold text-lg">Biography</p>
      <p class="font-medium text-md text-gray-500 mt-3">none</p>
    </div>
    <div class="row1">
      <p class="font-bold text-lg">Departement</p>
      <p class="font-medium text-md text-gray-500 mt-3">OPD</p>
    </div>
    <div class="row1">
      <p class="font-bold text-lg">Status</p>
      <p class="font-medium text-md text-white mt-3"><span class=" bg-green-500 w-20 rounded-full p-2">Active</span></p>
    </div>
  </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'DoctorInfor'
}
</script>
<style scoped>


</style>