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
</script>
