<template>
  <div class="content3 mt-5">
    <div class="header border-b-2 border-gray-200 pb-2 mb-6">
      <p class="text-3xl font-bold text-white">Add Patient Case Study</p>
    </div>
    <div class="form-field shadow-lg rounded-lg p-8 bg-white">
      <form @submit.prevent="submitForm">
        <div class="mb-6">
          <label for="selecPatient" class="block text-gray-700 font-medium mb-2">Select Patient <sup class="text-red-700">*</sup></label>
          <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <i class="fa-solid fa-user text-gray-400 mr-2"></i>
            <select
              id="selecPatient"
              v-model="doctor.selecPatient"
              class="w-full border-none focus:outline-none"
              required
            >
              <option value="" disabled>Select</option>
              <option value="Patient A">Patient A</option>
              <option value="Patient B">Patient B</option>
            </select>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="foodAllergy" class="block text-gray-700 font-medium mb-2">Food Allergy</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-utensils text-gray-400 mr-2"></i>
              <input
                type="text"
                id="foodAllergy"
                v-model="doctor.foodAllergy"
                class="w-full border-none focus:outline-none"
                placeholder="Food Allergy"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="heartDisease" class="block text-gray-700 font-medium mb-2">Heart Diseases</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-heartbeat text-gray-400 mr-2"></i>
              <input
                type="text"
                id="heartDisease"
                v-model="doctor.heartDisease"
                class="w-full border-none focus:outline-none"
                placeholder="Heart Diseases"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="hightBloodPressure" class="block text-gray-700 font-medium mb-2">High Blood Pressure</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-tachometer-alt text-gray-400 mr-2"></i>
              <input
                type="text"
                id="hightBloodPressure"
                v-model="doctor.hightBloodPressure"
                class="w-full border-none focus:outline-none"
                placeholder="High Blood Pressure"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="diabetic" class="block text-gray-700 font-medium mb-2">Diabetic</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-syringe text-gray-400 mr-2"></i>
              <input
                type="text"
                id="diabetic"
                v-model="doctor.diabetic"
                class="w-full border-none focus:outline-none"
                placeholder="Diabetic"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="surgery" class="block text-gray-700 font-medium mb-2">Surgery</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-scalpel text-gray-400 mr-2"></i>
              <input
                type="text"
                id="surgery"
                v-model="doctor.surgery"
                class="w-full border-none focus:outline-none"
                placeholder="Surgery"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="accident" class="block text-gray-700 font-medium mb-2">Accident</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-car-crash text-gray-400 mr-2"></i>
              <input
                type="text"
                id="accident"
                v-model="doctor.accident"
                class="w-full border-none focus:outline-none"
                placeholder="Accident"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="other" class="block text-gray-700 font-medium mb-2">Others</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-ellipsis-h text-gray-400 mr-2"></i>
              <input
                type="text"
                id="other"
                v-model="doctor.other"
                class="w-full border-none focus:outline-none"
                placeholder="Others"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="familyMedical" class="block text-gray-700 font-medium mb-2">Family Medical History</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-notes-medical text-gray-400 mr-2"></i>
              <input
                type="text"
                id="familyMedical"
                v-model="doctor.familyMedical"
                class="w-full border-none focus:outline-none"
                placeholder="Family Medical History"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="currentMedication" class="block text-gray-700 font-medium mb-2">Current Medication</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-pills text-gray-400 mr-2"></i>
              <input
                type="text"
                id="currentMedication"
                v-model="doctor.currentMedication"
                class="w-full border-none focus:outline-none"
                placeholder="Current Medication"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="pregnancy" class="block text-gray-700 font-medium mb-2">Pregnancy</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-baby text-gray-400 mr-2"></i>
              <input
                type="text"
                id="pregnancy"
                v-model="doctor.pregnancy"
                class="w-full border-none focus:outline-none"
                placeholder="Pregnancy"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="breastFeeding" class="block text-gray-700 font-medium mb-2">Breast Feeding</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-baby-bottle text-gray-400 mr-2"></i>
              <input
                type="text"
                id="breastFeeding"
                v-model="doctor.breastFeeding"
                class="w-full border-none focus:outline-none"
                placeholder="Breast Feeding"
                required
              />
            </div>
          </div>
          <div class="w-1/2 mb-6">
            <label for="healthInsurance" class="block text-gray-700 font-medium mb-2">Health Insurance</label>
            <div class="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
              <i class="fa-solid fa-file-medical text-gray-400 mr-2"></i>
              <input
                type="text"
                id="healthInsurance"
                v-model="doctor.healthInsurance"
                class="w-full border-none focus:outline-none"
                placeholder="Health Insurance"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div class="w-1/2 mb-6">
            <label for="file-upload" class="block text-gray-700 font-medium mb-2">Upload Profile Picture or Document</label>
            <div class="file-upload flex items-center justify-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 relative">
              <input
                type="file"
                id="file-upload"
                @change="handleFileUpload"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*,.pdf,.doc,.docx"
              />
              <div v-if="doctor.profilePicture" class="w-full h-full flex items-center justify-center relative">
                <img v-if="isImage(doctor.profilePicture)" :src="doctor.profilePicture" alt="Profile Picture" class="w-32 h-32 object-cover rounded-full border" />
                <div v-else class="text-center text-gray-500">
                  <i class="fa-solid fa-file-alt text-3xl"></i>
                  <p>{{ doctor.fileName }}</p>
                </div>
                <button @click="removeFile" class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                  <i class="fa-solid fa-times"></i>
                </button>
              </div>
              <div v-else class="text-center text-gray-500">
                <i class="fa-solid fa-cloud-upload-alt text-3xl"></i>
                <p>Click to upload</p>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-2">Max size: 2MB</p>
          </div>
          <div class="w-1/2 mb-6">
            <!-- Additional form fields or content -->
          </div>
        </div>
        <hr class="pb-2">
        <div class="btn flex space-x-3">
        <div class="btn-save">
            <button
        type="submit"
        class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
      >
        Submit
      </button>
        </div>
        <div class="cancel"> 
            <router-link to="/doctor">
                <button
        type="cancel"
        class="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
      >
        Cancel
      </button>
            </router-link>
    </div>
  </div>
      </form>
    </div>
  </div>
</template>
  <script>
  export default {
    name: 'AddPatientCaseStudie',
    components: {
        // QuillEditor1,
    },
    data() {
      return {
        doctor: {
          selecPatient: '',
          foodAllergy: '',
          heartDisease: '',
          hightBloodPressure: '',
          diabetic: '',
          surgery: '',
          accident: '',
          other: '',
          familyMedical: '',
          currentMedication: '',
          pregnancy: '',
          breastFeeding: '',
          healthInsurance: '',
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.doctor);
      },
      handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert('File size exceeds 2MB');
          return;
        }
        this.doctor.fileName = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.doctor.profilePicture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    isImage(file) {
      return file.startsWith('data:image');
    },
    removeFile() {
      this.doctor.profilePicture = null;
      this.doctor.fileName = '';
    }
    }
  };
  </script>
  
  <style scoped>
.file-upload {
  position: relative;
  height: 150px;
  background-color: #f3f4f6;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}
.file-upload:hover {
  border-color: #3b82f6;
}
.file-upload input[type="file"] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.file-upload img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
.file-upload .text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
  </style>