<template>
  <section class="product bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-[1200px] px-4 2xl:px-0">
      <h2 class="text-[18px] font-semibold mb-10">Our Products</h2>
      <!--Product Card-->
      <div
        class="mb-4 grid gap-10 grid-cols-2 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div class="card">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="product" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              <router-link to="/detail-produk"
                >Radiant Charge Gel Cleanser</router-link
              >
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button
                @click="handlePayment"
                type="button"
                class="btn-secondary hover:bg-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="product" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              <router-link to="/detail-produk"
                >Radiant Charge Gel Cleanser</router-link
              >
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button type="button" class="btn-secondary hover:bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="product" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              <router-link to="/detail-produk"
                >Radiant Charge Gel Cleanser</router-link
              >
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button type="button" class="btn-secondary hover:bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="product" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              <router-link to="/detail-produk"
                >Radiant Charge Gel Cleanser</router-link
              >
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button type="button" class="btn-secondary hover:bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div class="card mt-10">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="produc1" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              Radiant Charge Gel Cleanser
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button type="button" class="btn-secondary hover:bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card mt-10">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="produc1" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              Radiant Charge Gel Cleanser
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button type="button" class="btn-secondary hover:bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card mt-10">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="produc1" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              Radiant Charge Gel Cleanser
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button type="button" class="btn-secondary hover:bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div class="card mt-10">
          <div class="card-img aspect-w-1 aspect-h-1">
            <img class="w-full h-full object-cover" :src="produc1" alt="" />
          </div>
          <div class="card-body pt-6">
            <h2
              class="text-[18px] font-bold leading-tight text-gray-900 hover:underline"
            >
              Radiant Charge Gel Cleanser
            </h2>
            <p class="mt-1 text-[16px] text-gray-500">
              Lorem ipsum dolor sit amet
            </p>
            <p
              class="mt-3 text-[20px] font-extrabold leading-tight text-gray-900"
            >
              $1,699
            </p>

            <div class="card-action mt-5">
              <button type="button" class="btn-secondary hover:bg-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import product from "../assets/product.jpg";
import produc1 from "../assets/product (1).jpg";
import bgimg from "../assets/bg-img.jpg";
import apiClient from "../config/axios";

const handlePayment = async () => {
  try {
    const response = await apiClient.post("/orders");
    console.log(response);
    await snap.pay(response.data.token, {
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
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
</script>
