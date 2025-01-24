<template>
  <section
    class="hero bg-cover bg-primary-500 bg-blend-overlay h-[50vh] items-middle py-10"
    :style="{ backgroundImage: `url(${bgimg})` }"
  >
    <div class="max-w-[50%] mx-auto align-middle">
      <h1 class="text-white text-center">OUR PRODUCTS</h1>
      <label class="input input-bordered flex items-center gap-2 mt-10">
        <input
          v-model="searchQuery"
          type="text"
          class="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-5005"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="#fff"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
      <label class="input input-bordered flex items-center gap-2 mt-4">
        <select
          v-model="selectedCategory"
          class="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </label>
    </div>
  </section>
  <section class="product bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-[1200px] px-4 2xl:px-0">
      <h2 class="text-[18px] font-semibold mb-10">Our Products</h2>
      <div
        class="mb-4 grid gap-10 grid-cols-2 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="card shadow-md rounded-md"
        >
          <div class="card-img aspect-w-1 aspect-h-1">
            <img
              class="w-full h-full object-cover aspect-square"
              :src="product.image"
              alt=""
            />
          </div>
          <div class="card-body pt-6 p-4">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              {{ product.name }}
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              {{ product.description }}
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              {{ formatter.format(product.price) }}
            </p>
            <p class="mt-2 text-[14px] text-gray-600">
              Category: {{ product.category?.name || "N/A" }}
            </p>
            <div class="card-action mt-5">
              <button
                @click="goToCheckout(product)"
                type="button"
                class="btn-secondary hover:bg-primary"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import apiClient from "../config/axios";
import bgimg from "../assets/bg-img.jpg";
import { formatter } from "../utils/formated";

const products = ref([]);
const categories = ref([]);
const searchQuery = ref("");
const selectedCategory = ref("");
const router = useRouter();

const fetchProducts = async () => {
  try {
    const { data } = await apiClient.get("/products");
    products.value = data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const fetchCategories = async () => {
  try {
    const { data } = await apiClient.get("/category");
    categories.value = data.data.filter((category) =>
      products.value.some((product) => product.category?.id === category.id)
    ); // Hanya tampilkan kategori yang ada di produk
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

const filteredProducts = computed(() =>
  products.value.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      (selectedCategory.value === "" ||
        product.category?.id === selectedCategory.value)
  )
);

const goToCheckout = (product) => {
  router.push({
    name: "Checkout",
    query: {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    },
  });
};

onMounted(() => {
  fetchProducts();
  fetchCategories();
});
</script>
