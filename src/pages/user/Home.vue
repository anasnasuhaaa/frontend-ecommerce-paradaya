<template>
  <Hero />
  <section class="mt-10">
    <div>
      <h2>Browse by Category</h2>
      <div class="flex items-center p-4 gap-4">
        <button
          class="bg-white text-primary border-2 border-primary px-4 py-2 rounded-[25px] hover:bg-primmary"
        >
          Wardah
        </button>
        <button
          class="bg-white text-primary border-2 border-primary px-4 py-2 rounded-[25px] hover:bg-primmary"
        >
          Emina
        </button>
        <button
          class="bg-white text-primary border-2 border-primary px-4 py-2 rounded-[25px] hover:bg-primmary"
        >
          Make Over
        </button>
        <button
          class="bg-white text-primary border-2 border-primary px-4 py-2 rounded-[25px] hover:bg-primmary"
        >
          Tavi
        </button>
        <button
          class="bg-white text-primary border-2 border-primary px-4 py-2 rounded-[25px] hover:bg-primmary"
        >
          Instaperfect
        </button>
      </div>
    </div>
  </section>

  <ProductCard />
</template>

<script setup>
import Hero from "../../components/Hero.vue";
import ProductCard from "../../components/ProductCard.vue";
import CategoryProduct from "../../components/CategoriyProduct.vue";
</script>
