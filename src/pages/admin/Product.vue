<template>
  <div class="flex justify-between align-middle">
    <AdminTitle></AdminTitle>
    <button
      type="button"
      @click="openAddModal"
      class="text-white btn btn-md bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-0 text-center me-2 mb-2"
    >
      Add Product <v-icon name="fa-plus"></v-icon>
    </button>
  </div>

  <!-- Modal Create/Edit -->
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
          {{ isEditMode ? "Edit Product" : "Create New Product" }}
        </h3>
        <button
          type="button"
          @click="closeModal"
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
      <form
        @submit.prevent="isEditMode ? updateProduct() : createProduct()"
        class="p-4"
        enctype="multipart/form-data"
      >
        <div class="mb-4">
          <label
            for="name"
            class="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >Name</label
          >
          <input
            v-model="name"
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product name"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="price"
            class="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >Price</label
          >
          <input
            v-model="price"
            type="number"
            id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product price"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="description"
            class="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >Description</label
          >
          <textarea
            v-model="description"
            id="description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product description"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label
            for="image"
            class="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >Image</label
          >
          <input
            type="file"
            id="image"
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            @change="handleFileChange"
          />
        </div>
        <div class="mb-4">
          <label
            for="stock"
            class="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >Stock</label
          >
          <input
            v-model="stock"
            type="number"
            id="stock"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Stock quantity"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="category_id"
            class="block text-sm font-medium text-gray-900 dark:text-white mb-2"
            >Category</label
          >
          <select
            v-model="category_id"
            id="category_id"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          >
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            {{ isEditMode ? "Update Product" : "Add new product" }}
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th>Image</th>
          <th scope="col" class="px-6 py-3">Product Name</th>
          <th scope="col" class="px-6 py-3">Category</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Stock</th>
          <th scope="col" class="text-center px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in products"
          :key="index"
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ index + 1 }}</td>
          <td class="px-6 py-4">
            <img :src="data.image" class="h-16" alt="" />
          </td>
          <td class="px-6 py-4">{{ data.name }}</td>
          <td class="px-6 py-4">{{ data.category?.name }}</td>
          <td class="px-6 py-4">{{ data.price }}</td>
          <td class="px-6 py-4">{{ data.stock }}</td>
          <td class="px-6 py-4 flex">
            <button
              type="button"
              @click="openEditModal(data)"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Edit
            </button>
            <button
              type="button"
              @click="deleteProduct(data)"
              class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import AdminTitle from "../../components/AdminTitle.vue";
provide("name", "Data Products");
import apiClient from "../../config/axios";
import { toast } from "@steveyuowo/vue-hot-toast";

const products = ref([]);
const categories = ref([]);

const modalVisible = ref(false);
const isEditMode = ref(false);

const currentProductId = ref(null);

const name = ref("");
const price = ref("");
const description = ref("");
const stock = ref("");
const category_id = ref("");
const image = ref(null);

const fetchProducts = async () => {
  try {
    const { data } = await apiClient.get("/products");
    products.value = data.data;
  } catch (error) {
    toast.error("Error fetching products");
  }
};

const fetchCategories = async () => {
  try {
    const { data } = await apiClient.get("/category");
    categories.value = data.data;
  } catch (error) {
    toast.error(error);
  }
};

const handleFileChange = (e) => {
  image.value = e.target.files[0];
};

const openAddModal = () => {
  resetForm();
  isEditMode.value = false;
  modalVisible.value = true;
};

const openEditModal = (product) => {
  currentProductId.value = product.id;
  name.value = product.name;
  price.value = product.price;
  description.value = product.description;
  stock.value = product.stock;
  category_id.value = product.category_id;
  image.value = null;
  isEditMode.value = true;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  resetForm();
};

const resetForm = () => {
  currentProductId.value = null;
  name.value = "";
  price.value = "";
  description.value = "";
  stock.value = "";
  category_id.value = "";
  image.value = null;
};

const createProduct = async () => {
  try {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("description", description.value);
    if (image.value) {
      formData.append("image", image.value);
    }
    formData.append("stock", stock.value);
    formData.append("category_id", category_id.value);

    await apiClient.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Product created successfully");
    fetchProducts();
    closeModal();
  } catch (error) {
    toast.error(error.response?.data?.message || "Error creating product");
  }
};

const updateProduct = async () => {
  try {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("description", description.value);
    if (image.value) {
      formData.append("image", image.value);
    }
    formData.append("stock", stock.value);
    formData.append("category_id", category_id.value);

    await apiClient.post(
      `/products/${currentProductId.value}?_method=PUT`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    toast.success("Product updated successfully");
    fetchProducts();
    closeModal();
  } catch (error) {
    toast.error(error.response?.data?.message || "Error updating product");
  }
};

const deleteProduct = async (product) => {
  try {
    const response = await apiClient.delete(`/products/${product.id}`);
    toast.success(response.data.message);
    fetchProducts();
  } catch (error) {
    toast.error(error.response?.data?.message || "Error deleting product");
  }
};

onMounted(() => {
  fetchProducts();
  fetchCategories();
});
</script>
