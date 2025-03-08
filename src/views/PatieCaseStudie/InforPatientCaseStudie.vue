<template>
  <div class="content4 mt-5">
    <div class="header flex justify-between border-b-2 border-gray-200 pb-2">
      <div class="name">
        <p class="text-3xl font-bold text-white">
          Patient Case Study Information
        </p>
      </div>
      <div class="btn-edit">
        <button class="bg-white w-20 h-10 text-green-500 rounded-md">
          Edit
        </button>
      </div>
    </div>
    <div class="profile bg-white shadow-md rounded-md p-4 mt-5">
      <div class="flex space-x-4 border-b-2 border-dashed border-gray-200 pb-5">
        <div
          class="profile w-2/6 border-b-2 border-yellow-400 rounded-e-full p-3 text-center bg-white shadow-md"
        >
          <img
            class="w-28 h-28 rounded-full"
            :src="patients.profileImage"
            alt=""
            style="margin: auto"
          />
          <div class="name pb-5">
            <p class="text-xl font-bold mt-4">{{ patients.name }}</p>
            <p>{{ patients.email }}</p>
            <p>ID: {{ patients.id }}</p>
          </div>
        </div>
        <div class="brieft-bg w-3/2"></div>
      </div>
      <div
        class="list-brief mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-start ml-5"
      >
        <div
          v-for="(medicalList, index) in medicalList"
          :key="index"
          class="row1 border-b-2 border-gray-200"
        >
          <p class="font-bold text-lg">{{ medicalList.title }}</p>
          <p class="font-medium text-md text-gray-500 mt-3">
            {{ medicalList.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InforPatientCaseStudie",
  data() {
    return {
      patients: {
        name: "Demo Test",
        email: "demo@test.com",
        id: "123456",
        profileImage: require("../../assets/profile.jpg"),
      },
      medicalList: [ 
         { title: 'Food Allergy', value: '' },
        { title: 'Heart Diseases', value: '' },
        { title: 'High Blood Pressure', value: '' },
        { title: 'Diabetic', value: '' },
        { title: 'Surgery', value: '' },
        { title: 'Accident', value: '' },
        { title: 'Others', value: '' },
        { title: 'Family Medical History', value: '' },
        { title: 'Current Medication', value: '' },
        { title: 'Pregnancy', value: '' },
        { title: 'Breast Feeding', value: '' },
        { title: 'Health Insurance', value: '' },
      ],
    };
  },
};
</script>
<style scoped></style>
