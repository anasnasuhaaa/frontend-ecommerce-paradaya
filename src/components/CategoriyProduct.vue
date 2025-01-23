<template>
  <section
    class="category justify-center items-center bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16"
  >
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0"></div>

    <div class="grid gap-8 px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <a
        href="#"
        class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img :src="wardah" alt="" class="h-30 w-30" />
                </a
      >
      <a
        href="#"
        class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img :src="emina" alt="" class="h-30 w-30" />
      </a>
      <a
        href="#"
        class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img :src="MakeOver" alt="" class="h-30 w-30" />
      </a>
      <a
        href="#"
        class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img :src="Tavi" alt="" class="h-30 w-30" />
      </a>
      <a
        href="#"
        class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img :src="EarthLove" alt="" class="h-30 w-30" />
      </a>
      <a
        href="#"
        class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img :src="insta" alt="" class="h-30 w-30" />
      </a>
    </div>
  </section>
</template>

<script setup>
import wardah from "../assets/Wrdah.jpg";
import emina from "../assets/eminaaa.png";
import MakeOver from "../assets/MOver.png";
import Tavi from "../assets/taavii.jpg";
import EarthLove from "../assets/EarthL.jpg";
import insta from "../assets/instaa.jpg";
</script>
