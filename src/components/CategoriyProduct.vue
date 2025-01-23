<template>
  <section class="category justify-center items-center bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mb-4 flex items-center justify-center gap-4 md:mb-8">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-6xl flex items-center">
              <svg class="w-10 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
              </svg>
              Our Brand's
            </h2>
        </div>
      </div>

  <div class="grid gap-8 px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    <a href="#" class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img :src="wardah" alt="" class="h-30 w-30 ">
        </a>
      <a href="#" class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img :src="emina" alt="" class="h-30 w-30">
      </a>
      <a href="#" class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img :src="MakeOver" alt="" class="h-30 w-30 ">
      </a>
      <a href="#" class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img :src="Tavi" alt="" class="h-30 w-30 ">
      </a>
      <a href="#" class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img :src="EarthLove" alt="" class="h-30 w-30 ">
      </a>
      <a href="#" class="shadow-xl flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img :src="insta" alt="" class="h-30 w-30 ">
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