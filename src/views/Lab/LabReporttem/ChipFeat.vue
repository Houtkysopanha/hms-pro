
<template>
  <div class="custom-select">
    <div class="selection-box" @click="toggleDropdown">
      <div v-for="(person, index) in selectedPeople" :key="index" class="chip">
        {{ person }}
        <span class="close" @click.stop="remove(person)">×</span>
      </div>
      <span v-if="selectedPeople.length === 0" class="placeholder">Select People</span>
    </div>

    <ul v-if="showDropdown" class="dropdown">
      <li 
        v-for="(person, index) in people" 
        :key="index" 
        @click="selectPerson(person)"
        :class="{ selected: selectedPeople.includes(person) }"
      >
        {{ person }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const selectedPeople = ref(['#PATIENT_NAME#', '#PATIENT_GENDER#', '#PATIENT_BLOOD#',]);
const people = ref([
  '#PATIENT_NAME#', '#PATIENT_GENDER#', '#PATIENT_BLOOD#', '#HOPSITAL_NAME', '#DOCTOR_NAME#', '#REPORT_NAME#', 
]);

const showDropdown = ref(false);

const remove = (item) => {
  selectedPeople.value = selectedPeople.value.filter(person => person !== item);
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const selectPerson = (person) => {
  if (!selectedPeople.value.includes(person)) {
    selectedPeople.value.push(person);
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: auto;
  font-family: Arial, sans-serif;
}

.selection-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 30px;
  border: 1px solid #ccc;
  padding: 7px;
  cursor: pointer;
  border-radius: 10px;
}

.chip {
  background: lightblue;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 2px;
  display: flex;
  align-items: center;
}

.close {
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
}

.placeholder {
  color: gray;
}

.dropdown {
  position: relative;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 5px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.dropdown li {
  padding: 8px;
  cursor: pointer;
}

.dropdown li:hover {
  background: #f0f0f0;
  color: black;
}

.selected {
  background: lightblue;
  color: white;
}
</style>
