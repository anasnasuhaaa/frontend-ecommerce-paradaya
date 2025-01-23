<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div class="max-w-[900px] mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Form Section -->
      <div
        class="lg:col-span-2 rounded-lg border border-gray-300 bg-white p-6 shadow-sm"
      >
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- First Name -->
          <div>
            <label
              for="first_name"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="John"
              required
            />
          </div>

          <!-- Last Name -->
          <div>
            <label
              for="last_name"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div class="mt-5">
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Email"
            required
          />
        </div>
        <div class="mt-5">
          <label
            for="address"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Address"
            required
          />
        </div>
        <div class="mt-5">
          <button
            type=""
            class="block w-full rounded-lg bg-primary p-2.5 text-white font-bold hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      <!-- Subtotal Section -->
      <div class="mt-6 lg:mt-0">
        <div
          class="rounded-lg border border-gray-300 bg-white p-6 shadow-sm dark:border-gray-600 dark:bg-gray-800"
        >
          <h2 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
            Order Summary
          </h2>
          <dl class="space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-base font-semibold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">
                $8,104.00
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
