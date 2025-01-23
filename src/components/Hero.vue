<template>
  <section
    class="hero bg-cover h-screen"
    :style="{ backgroundImage: `url(${bghero})` }"
  >
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary"
        >
          Jelajahi Keindahan Bersama Paragon
        </h1>
        <p class="mb-6 font-light text-gray-500">
          Pilihan tepat untuk produk kecantikan dan perawatan diri.
        </p>
        <Button class="btn-primary">See All Products</Button>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
        <img
          :src="model"
          alt="Model Image"
          class="w-[80%] max-w-xs sm:max-w-sm lg:max-w-[90%] object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import model from "../assets/paragon.png";
import bghero from "../assets/bghero.jpg";
</script>
