<template>
  <header>
    <nav class="bg-primary text-white">
      <div
        class="max-w-screen-xl px-4 mx-auto py-4 flex items-center justify-between"
      >
        <!-- Logo -->
        <div class="flex items-center space-x-8">
          <div class="shrink-0">
            <a href="#" class="text-[26px] font-bold"> Parastore </a>
          </div>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden lg:flex items-center space-x-6 font-semibold">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/category">Categories</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
        </ul>

        <!-- Mobile Toggle Button -->
        <button
          type="button"
          @click="toggleMenu"
          aria-controls="mobile-menu"
          aria-expanded="false"
          class="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span class="sr-only">Open Menu</span>
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Actions (Search, Cart, Profile) -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Cart -->
          <router-link to="/cart" class="p-2">
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h18l-2 13H5L3 3z"
              />
              <circle cx="9" cy="19" r="1" />
              <circle cx="17" cy="19" r="1" />
            </svg>
          </router-link>

          <!-- Profile -->
          <button>
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.51 14.593C15.37 13.658 13.75 13 12 13s-3.37.658-4.51 1.593C6.51 16.528 6 18.194 6 19h12c0-.806-.51-2.472-1.49-3.407z"
              />
            </svg>
          </button>
          <button class="btn-secondary">
            <router-link to="/login">Login</router-link>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" id="mobile-menu" class="lg:hidden">
        <ul class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 space-y-4">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/category">Categories</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li>
            <!-- Mobile Search -->
            <label class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
          </li>
          <li>Cart</li>
          <li>
            <template v-if="authStore.currentUser">
              {{ authStore.currentUser.name }}
            </template>
            <template v-else>
              <router-link to="/login">Login</router-link>
            </template>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore(); // Akses authStore untuk currentUser
console.log(authStore.currentUser);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
