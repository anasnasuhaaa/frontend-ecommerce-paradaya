<template>
  <div class="flex justify-between align-middle">
    <AdminTitle></AdminTitle>
    <button
      type="button"
      @click="modalVisible = true"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-0 text-center me-2 mb-2"
    >
      Add Category <v-icon name="fa-plus"></v-icon>
    </button>
  </div>

  <!-- Modal Create -->
  <div
    v-if="modalVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-md w-full"
    >
      <div
        class="flex items-center justify-between p-4 border-b dark:border-gray-600"
      >
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Create New Category
        </h3>
        <button
          type="button"
          @click="modalVisible = false"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <form @submit.prevent="createCategory" class="p-4">
        <div class="mb-4">
          <label
            for="name"
            class="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >Name</label
          >
          <input
            v-model="newCategory.name"
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Type category name"
            required
          />
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Add new category
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Tabel dengan Pagination -->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th scope="col" class="px-6 py-3">Category Name</th>
          <th scope="col" class="text-center px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in paginatedCategories"
          :key="index"
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <td class="px-6 py-4">
            {{ (currentPage - 1) * pageSize + index + 1 }}
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize"
          >
            {{ data.name }}
          </th>
          <td class="px-6 py-4 flex justify-center gap-2">
            <button
              type="button"
              @click="() => methodModalEdit(data)"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Edit
            </button>
            <input
              type="button"
              class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              @click="handleDelete(data)"
              value="Delete"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="flex justify-end mt-4">
    <nav aria-label="Table navigation">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <button
            :disabled="currentPage === 1"
            @click="currentPage--"
            class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        <li v-for="page in totalPages" :key="page">
          <button
            :class="[
              'px-3 py-2 leading-tight border',
              page === currentPage
                ? 'text-white bg-blue-600 border-blue-600'
                : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700',
            ]"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
        </li>
        <li>
          <button
            :disabled="currentPage === totalPages"
            @click="currentPage++"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, provide, computed } from "vue";
import AdminTitle from "../../components/AdminTitle.vue";
provide("name", "Data Categories");
import apiClient from "../../config/axios";
import { toast } from "@steveyuowo/vue-hot-toast";

const categoriesData = ref([]);
const newCategory = ref({ name: "" });
const editCategory = ref({ name: "" });
const modalVisible = ref(false);
const modalEditVisible = ref(false);

const methodModalEdit = (category) => {
  console.log(category);
  editCategory.value = category;
  modalEditVisible.value = true;
};

// Pagination data
const currentPage = ref(1);
const pageSize = ref(7);

const paginatedCategories = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return categoriesData.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(categoriesData.value.length / pageSize.value)
);

const fetchApiCategory = async (url = "/category") => {
  try {
    const { data } = await apiClient.get(url);
    categoriesData.value = data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

const createCategory = async () => {
  try {
    if (!newCategory.value.name.trim()) {
      alert("Category name cannot be empty.");
      return;
    }
    const response = await apiClient.post("/category", newCategory.value);
    categoriesData.value.push(response.data);
    newCategory.value.name = "";
    modalVisible.value = false;
    toast.success("Item Added Succesfully");
  } catch (error) {
    toast.error(error);
  }
};

const handleDelete = async (e) => {
  try {
    const deleteData = await apiClient.post(
      `/category/${e.id}/?_method=DELETE`
    );
    toast.success("Item deleted");
    await fetchApiCategory();
  } catch (error) {
    toast.error(error);
  }
};

const handleEdit = async (e) => {
  try {
    const uodateData = await apiClient.post(
      `category/${e.id}/?_method=PUT`,
      editCategory.value
    );
    modalEditVisible.value = false;
    toast.success("Item Updated");
  } catch (error) {
    toast.error(error);
  }
};

onMounted(() => {
  fetchApiCategory();
});
</script>
