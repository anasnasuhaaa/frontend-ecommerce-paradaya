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
          data-collapse-toggle="mobile-menu"
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
          <button>
            <router-link to="/cart"
              ><svg
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
                <circle cx="17" cy="19" r="1" /></svg
            ></router-link>
          </button>

          <!-- Profile -->
          <button>
            <router-link to="/profile">
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
                /></svg
            ></router-link>
          </button>
          <button class="btn-secondary">
            <router-link to="/login">Login</router-link>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden lg:hidden">
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
          <li>Profile</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<!--<template>
  <header>
    <nav class="bg-primary text-white">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-8">
            <div class="shrink-0">
              <a href="#" title="" class="">
                <img
                  class="block w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                  alt=""
                />
              </a>
            </div>

            <ul
              class="lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center font-semibold"
            >
              <li class="shrink-0">
                <router-link to="/">Home</router-link>
              </li>
              <li class="shrink-0">
                <router-link to="/category">Categories</router-link>
              </li>
              <li class="shrink-0">
                <router-link to="/products">Products</router-link>
              </li>
            </ul>
          </div>
          
          <div class="form-control">
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
          </div>

          <div class="flex items-center lg:space-x-2">
            <button
              id="myCartDropdownButton1"
              data-dropdown-toggle="myCartDropdown1"
              type="button"
              class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <svg
                class="w-5 h-5 lg:me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
            </button>

            <button
              id="userDropdownButton1"
              data-dropdown-toggle="userDropdown1"
              type="button"
              class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <svg
                class="w-5 h-5 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-width="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>

            <button
              type="button"
              data-collapse-toggle="ecommerce-navbar-menu-1"
              aria-controls="ecommerce-navbar-menu-1"
              aria-expanded="false"
              class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
            >
              <span class="sr-only"> Open Menu </span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="ecommerce-navbar-menu-1"
          class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
        >
          <ul
            class="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3"
          >
            <li>
              <a
                href="#"
                class="hover:text-primary-700 dark:hover:text-primary-500"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-primary-700 dark:hover:text-primary-500"
                >Best Sellers</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-primary-700 dark:hover:text-primary-500"
                >Gift Ideas</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-primary-700 dark:hover:text-primary-500"
                >Games</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-primary-700 dark:hover:text-primary-500"
                >Electronics</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-primary-700 dark:hover:text-primary-500"
                >Home & Garden</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>-->
