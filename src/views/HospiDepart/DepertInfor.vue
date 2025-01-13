<template>
    <div class="main p-5" >
        <div class="header flex justify-between border-b-2 border-gray-200 pb-2">
                <p class=" text-3xl font-bold text-white">Departments Information</p>
                    <div class="button">
                      <router-link to="/add-department">
                        <button class=" w-20 h-10 p-2 bg-white rounded-md shadow-lg text-lg text-green-600 font-medium">Edit</button>
                      </router-link>
                </div>
        </div>
        <div class="content1 mt-10 bg-white shadow-md rounded-md">
                    <div class=" content2 p-5">
                        <div class="Depart-name">
                        <p class=" text-xl font-medium">Department Name:</p>
                        <p class=" mt-2">OPD</p>
                    </div>
                    <div class="desc mt-10">
                        <p class="  text-xl font-medium">Description:</p>
                        <p class=" mt-2">This is the office of the primary department of the hospital.</p>
                    </div>
                    <div class="status mt-10">
                        <p class=" text-xl font-medium">Status:</p>
                        <p class=" mt-2 w-14 font-medium text-sm p-2 text-white bg-green-600 rounded-2xl">Active</p>
                    </div>
                    </div>
                </div>
    </div>
</template>
<script>
export default{
    name: 'DepartInfor',
}
</script>
<style scoped>


</style>