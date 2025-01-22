<template>
  <section
    class="product w-1200px bg-white py-8 antialiased dark:bg-gray-900 md:py-12"
  >
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <!--Product Card-->
      <div
        class="mb-4 grid gap-10 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
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
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
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
              <button
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
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
              <button
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
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
              <button
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
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
              <button
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
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
              <button
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
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
              <button
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
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
              <button
                type="button"
                class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full text-center">
        <button
          type="button"
          class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Show more
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import product from "../assets/product.jpg";
import produc1 from "../assets/product (1).jpg";
</script>
