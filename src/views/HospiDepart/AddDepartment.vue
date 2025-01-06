<template>
        <div class="mt-5">
          <div class="header flex justify-end">
            <p>HospitalDepartment</p>
            <p class="mx-2">/</p>
            <p>Dashboard</p>
        </div>
        <div class="form-content bg-white shadow-md rounded-lg p-3 mt-10">
            <p class="text-2xl font-medium border-b-2 border-dashed border-gray-300 pb-4">Add Department</p>
            <div class="Add-depart mt-8">
                <label class=" text-lg font-medium" for="Department Name">Department Name <sup style="color: red;">*</sup></label>
            <div class="flex items-center border mt-1 border-gray-300 rounded-md overflow-hidden">
    <span class="bg-gray-100 text-gray-600 px-5 py-3"><i class="fa-solid fa-signature"></i></span>
    <input
      type="text"
      class="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
      placeholder="Department Name"
      aria-label="Department Name"
    />
  </div>
            </div>
            <div class="describetion mt-4">
                <label class=" text-lg font-medium mb-1" for="Department Name">Description</label>
                <QuillEditor v-model:content="editorContent" />
            </div>
            <div class="status mt-4">
  <label class="text-lg font-medium" for="status-select">
    Status <sup style="color: red;">*</sup>
  </label>
  <div class="flex items-center border mt-1 border-gray-300 rounded-md overflow-hidden">
    <span class="bg-gray-100 text-gray-600 px-5 py-3">
        <i class="fa-solid fa-bell"></i>
    </span>
    <select
      id="status-select"
      class="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
      aria-label="Status"
    >
      <option value="">Status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>
</div>
<div class="button mt-6">
            <button class="w-40 p-3 rounded-lg text-white text-2xl font-medium shadow-md hover:bg-green-200 hover:text-black bg-green-300">Submit</button>
            <button class="w-40 ml-3 p-3 rounded-lg text-white text-2xl font-medium shadow-md hover:bg-yellow-200 hover:text-black bg-yellow-300">Cancel</button>
        </div>
        </div>
        </div>
</template>
<script>
import QuillEditor from './QuillEditor.vue'
export default {
    name: 'AddDepartment',
    components: { QuillEditor },
}

</script>
<style scoped>
</style>