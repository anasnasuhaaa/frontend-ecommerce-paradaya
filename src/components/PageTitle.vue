<template>
  <section
    class="hero bg-cover bg-primary-500 bg-blend-overlay h-[50vh] items-middle py-10"
    :style="{ backgroundImage: `url(${bgimg})` }"
  >
    <div class="max-w-[50%] mx-auto align-middle">
      <h1 class="text-white text-center">OUR PRODUCTS</h1>
      <label class="input input-bordered flex items-center gap-2 mt-10">
        <input type="text" class="grow" placeholder="Search" />
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
    </div>
  </section>
  <!-- <section
    class="hero bg-cover bg-primary-500 bg-blend-overlay h-[50vh] items-middle py-10"
    :style="{ backgroundImage: `url(${bgimg})` }"
  >
    <div class="max-w-[50%] mx-auto align-middle">
      <h2
        class="text-xl font-semibold text-gray-900 dark:text-white sm:text-6xl flex items-center"
      >
        <svg
          class="w-10 h-8 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
          />
        </svg>
        Paragon Brand's
      </h2>
    </div>
  </section>-->
</template>

<script setup>
import bgimg from "../assets/bg-img.jpg";
</script>
