<template>
  <section
    class="product-detail py-8 bg-white md:py-16 dark:bg-gray-900 antialiased"
  >
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
          <img class="w-full" :src="product" alt="" />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1
            class="text-[18px] font-semibold text-gray-900 sm:text-2xl dark:text-white"
          >
            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD,
            Mac OS, Pink
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-[20px] font-extrabold text-gray-900 sm:text-3xl dark:text-white"
            >
              $1,249.99
            </p>
          </div>

          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <button
              type="button"
              class="inline-flex items-center border-2 rounded-[25px] border-primary bg-white px-5 py-2.5 text-[16] font-semibold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Add to Cart
            </button>

            <button
              type="button"
              class="inline-flex items-center border-2 rounded-[25px] border-primary bg-primary px-5 py-2.5 text-[16] font-semibold text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Buy Now
            </button>
          </div>

          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

          <p class="mb-6 text-gray-500 dark:text-gray-400">
            Studio quality three mic array for crystal clear calls and voice
            recordings. Six-speaker sound system for a remarkably robust and
            high-quality audio experience. Up to 256GB of ultrafast SSD storage.
          </p>

          <p class="text-gray-500 dark:text-gray-400">
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
            Magic Keyboard or Magic Keyboard with Touch ID.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import product from "../assets/product.jpg";
</script>
