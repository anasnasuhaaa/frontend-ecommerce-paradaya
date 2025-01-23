<template>
  <section class="py-8">
    <div class="flex items-center justify-center mx-auto h-screen">
      <!-- Kontainer utama dengan styling -->
      <div
        class="max-w-[800px] mx-auto rounded-lg border border-gray-300 bg-white p-6 shadow-sm"
      >
        <div class="grid grid-cols-3 gap-4">
          <!-- Kolom 1 -->
          <div class="col-span-1 p-4">
            <img :src="avatar" class="w-[80%] mx-auto" />
          </div>
          <!-- Kolom 2 -->
          <div class="col-span-2 p-4">
            <h2 class="text-xl font-bold">Angel Monica</h2>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
            <h3 class="my-5">
              Email: <span class="font-normal">monica@gmail.com</span>
            </h3>
            <h3>Age: 24 tahun</h3>
            <button class="btn-primary mt-10">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import avatar from "../assets/avatar.png";
</script>
