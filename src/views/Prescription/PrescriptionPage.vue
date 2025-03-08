<template>
  <main>
    <div
      class="header-page flex justify-between items-center border-b-2 border-gray-200 py-2"
    >
      <div class="title-page flex items-center">
        <i class="fa-solid fa-prescription text-4xl mr-3 text-white"></i>
        <div class="title">
          <p class="text-3xl font-bold text-white">Prescription</p>
          <p class="text-sm font-bold text-white">Prescription Features</p>
        </div>
      </div>
      <div class="link-back-page">
        <div class="link flex items-center">
          <p class="text-white">DashBoard</p>
          <p class="m-3 text-white">/</p>
          <p class="text-white">Home</p>
        </div>
      </div>
    </div>
    <div class="content-page">
      <div class="button-add flex justify-start items-center mt-5">
        <router-link to="/AddPrescription">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            + Add Prescription
          </button>
        </router-link>
      </div>
      <div class="table-data mt-5 p-3 bg-white rounded-lg shadow-lg">
        <div
          class="header-table flex justify-between items-center border-b-2 border-dashed border-gray-300"
        >
          <p class="text-3xl font-medium py-2">Prescription List</p>
          <div class="show-table flex items-center">
            <p>Show |</p>
            <select
              class="bg-gray-100 border mx-2 border-gray-300 items-center text-gray-900 text-sm rounded-full px-2"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            <p>in 1 <span>of 100</span></p>
          </div>
        </div>
        <div class="search-table flex relative mt-5">
          <input
            type="text"
            placeholder="Search for departments..."
            class="w-80 p-3 pl-10 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <i
            class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          ></i>
          <div class="button">
            <button
              class="ml-2 p-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg border-2"
            >
              Sort<i class="fa-solid fa-arrow-up-short-wide"></i>
            </button>
          </div>
        </div>

        <table
          class="min-w-full bg-white border border-gray-200 mt-5 rounded-lg overflow-hidden"
        >
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 border-b text-center justify-center">
                <div class="flex items-center">
                  ID
                  <!-- <i class="fa-solid fa-sort ml-2 cursor-pointer"></i> -->
                </div>
              </th>
              <th class="py-3 px-4 border-b text-center justify-center">
                <div class="flex items-center">
                  Doctor Name
                  <!-- <i class="fa-solid fa-sort ml-2 cursor-pointer"></i> -->
                </div>
              </th>
              <th class="py-3 px-4 border-b text-center justify-center">
                <div class="flex items-center">
                  Patient Name
                  <!-- <i class="fa-solid fa-sort ml-2 cursor-pointer"></i> -->
                </div>
              </th>
              <th class="py-3 px-4 border-b text-center justify-center">
                <div class="flex items-center">
                  Date
                  <!-- <i class="fa-solid fa-sort ml-2 cursor-pointer"></i> -->
                </div>
              </th>
              <th class="py-3 px-4 border-b text-center justify-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(department, index) in departments"
              :key="index"
              class="hover:bg-gray-50"
            >
              <td class="py-4 px-4 border-b text-start">
                {{ department.id }}
              </td>
              <td class="py-4 px-4 border-b text-start">
                {{ department.doctorname }}
              </td>
              <td class="py-4 px-4 border-b text-start">
                {{ department.patientname }}
              </td>
              <td class="py-4 px-4 border-b text-start">
                {{ department.date }}
              </td>
              <td class="py-4 px-4 border-b text-center">
                <router-link to="/InforPatientCaseStudie">
                  <button
                    @click="editItem(department)"
                    class="text-green-600 w-10 bg-green-200 rounded-full hover:text-green-700, hover:bg-blue-300 mr-2"
                  >
                    <i class="fa-regular fa-eye"></i>
                  </button>
                </router-link>
                <router-link to="/EditPatientCaseStudie">
                  <button
                    @click="editItem(department)"
                    class="text-blue-600 w-10 bg-blue-200 rounded-full hover:text-blue-700, hover:bg-blue-300"
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </router-link>
                <button
                  @click="deleteItem(department)"
                  class="text-red-500 w-10 bg-red-200 rounded-full hover:text-red-700, hover:bg-red-100 ml-2"
                >
                  <i class="fa-regular fa-square-minus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="previous-next flex space-x-2 justify-end border-t-2 border-dashed py-2 items-center mt-4"
        >
          <button
            @click="prevPage"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
          <div class="flex space-x-2">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'py-2 px-4 rounded',
                {
                  'bg-blue-500 text-white': currentPage === page,
                  'bg-gray-300 hover:bg-gray-400 text-gray-800':
                    currentPage !== page,
                },
              ]"
            >
              {{ page }}
            </button>
          </div>
          <button
            @click="nextPage"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "PrescriptionPage",
  data() {
    return {
      search: "",
      rowsPerPage: 5,
      rowsPerPageOptions: [10, 20, 30, 40, 50],
      departments: [
        {
          id: 1,
          doctorname: "John Doe",
          patientname: "Jane Doe",
          date: "2021-10-10",
        },
        // Add more departments as needed
      ],
      currentPage: 1,
      totalPages: 10, // Adjust this based on your data
    };
  },
  computed: {
    filteredDepartments() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.departments
        .slice(start, end)
        .filter((department) =>
          department.name.toLowerCase().includes(this.search.toLowerCase())
        );
    },
  },
  methods: {
    viewItem(item) {
      // Handle view action
      console.log("View item:", item);
    },
    editItem(item) {
      // Handle edit action
      console.log("Edit item:", item);
    },
    deleteItem(item) {
      // Handle delete action
      console.log("Delete item:", item);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.table-data {
  margin-top: 20px;
}
.search-table {
  position: relative;
}
.previous-next {
  margin-top: 20px;
}
</style>
