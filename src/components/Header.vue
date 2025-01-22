<template>
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
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered w-24 md:w-auto"
            />
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
</template>
