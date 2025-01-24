<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="max-w-[900px] mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div
        class="lg:col-span-2 rounded-lg border border-gray-300 bg-white p-6 shadow-sm"
      >
        <h1 class="text-[20px] font-bold mb-4">{{ productName }}</h1>
        <img
          :src="productImage"
          alt="Product Image"
          class="mb-4 h-20 rounded-md"
        />
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label for="first_name" class="mb-2 block text-sm font-medium">
              First Name
            </label>
            <input
              v-model="data.first_name"
              type="text"
              id="first_name"
              class="block w-full rounded-lg border p-2.5"
              required
            />
          </div>
          <div>
            <label for="last_name" class="mb-2 block text-sm font-medium">
              Last Name
            </label>
            <input
              v-model="data.last_name"
              type="text"
              id="last_name"
              class="block w-full rounded-lg border p-2.5"
              required
            />
          </div>
        </div>
        <div class="mt-5">
          <label for="email" class="mb-2 block text-sm font-medium"
            >Email</label
          >
          <input
            v-model="data.email"
            type="email"
            id="email"
            class="block w-full rounded-lg border p-2.5"
            required
          />
        </div>
        <div class="mt-5">
          <label for="address" class="mb-2 block text-sm font-medium"
            >Address</label
          >
          <input
            v-model="data.address"
            type="text"
            id="address"
            class="block w-full rounded-lg border p-2.5"
            required
          />
        </div>
        <div class="mt-5">
          <label for="quantity" class="mb-2 block text-sm font-medium"
            >Quantity</label
          >
          <input
            v-model="data.quantity"
            type="number"
            id="quantity"
            class="block w-full rounded-lg border p-2.5"
            min="1"
            required
          />
        </div>
        <div class="mt-5">
          <button
            @click="proceedToPayment"
            class="w-full bg-primary text-white p-2.5 rounded-lg"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <div class="mt-6 lg:mt-0">
        <div class="rounded-lg border bg-white p-6 shadow-sm">
          <h2 class="mb-4 text-lg font-medium">Order Summary</h2>
          <dl class="space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-base font-semibold">Total</dt>
              <dd class="text-base font-bold">
                {{ formatter.format(totalPrice) }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import apiClient from "../config/axios";
import { formatter } from "../utils/formated";

const route = useRoute();

const productName = route.query.name;
const productImage = route.query.image;
const productPrice = parseFloat(route.query.price);
onMounted(() => {
  console.log(route.query);
});

// const firstName = ref("");
// const lastName = ref("");
// const email = ref("");
// const address = ref("");
// const quantity = ref(1);
const data = reactive({
  product_id: route.query.id,
  first_name: "",
  last_name: "",
  email: "",
  address: "",
  quantity: null,
});
const totalPrice = computed(() => data.quantity * productPrice);

const token = localStorage.getItem("token");

const proceedToPayment = async () => {
  try {
    console.log(data);
    const response = await apiClient.post("/orders", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);

    await snap.pay(response.data.snap_token, {
      onSuccess: function (result) {
        console.log("success");
        console.log(result);
      },
      onPending: function (result) {
        console.log("pending");
        console.log(result);
      },
      onError: function (result) {
        console.log("error");
        console.log(result);
      },
      onClose: function () {
        console.log("customer closed the popup without finishing the payment");
      },
    });
    console.log(response.data.token); // Use this token with Midtrans Snap
  } catch (error) {
    console.error(error);
  }
};
</script>
