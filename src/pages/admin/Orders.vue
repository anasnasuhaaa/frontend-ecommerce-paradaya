<template>
  <div>
    <div class="flex justify-between align-middle mb-4">
      <h1 class="text-2xl font-semibold">Orders</h1>
    </div>

    <!-- Tabel Orders -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">#</th>
            <th scope="col" class="px-6 py-3">Order ID</th>
            <th scope="col" class="px-6 py-3">Customer Name</th>
            <th scope="col" class="px-6 py-3">Total Price</th>
            <th scope="col" class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in orders"
            :key="order.id"
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ order.order_id }}
            </td>
            <td class="px-6 py-4">
              {{ order.first_name }} {{ order.last_name }}
            </td>
            <td class="px-6 py-4">
              {{ formatter.format(order.total_price) }}
            </td>
            <td class="px-6 py-4 capitalize">
              {{ order.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiClient from "../../config/axios";
import { formatter } from "../../utils/formated";

const orders = ref([]);

// Fungsi untuk mengambil data orders
const fetchOrders = async () => {
  try {
    const { data } = await apiClient.get("/orders");
    orders.value = data;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

onMounted(() => {
  fetchOrders();
});
</script>
