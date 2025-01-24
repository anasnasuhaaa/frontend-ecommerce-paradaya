<template>
  <section class="login bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Input OTP Code
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleVerify">
            <div>
              <input
                type="number"
                v-model="otp"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="check your email"
                min="0"
                required=""
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary hover:bg-white hover:border-2 hover:border-primary hover:text-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
       
          </form>
          <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Resend OTP Code
            </button>
            <!-- Main modal -->
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div
                  class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <!-- Modal header -->
                  <div
                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                  >
                    <h3
                      class="text-xl font-semibold text-gray-900 dark:text-white"
                    >
                      Resend OTP Code
                    </h3>
                    <button
                      type="button"
                      data-modal-hide="authentication-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-4 md:p-5">
                    <form class="space-y-4" @submit.prevent="handleGenerateOtp">
                      <div>
                        <label for="email">Your email</label>
                        <input
                          type="email"
                          v-model="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { toast } from "@steveyuowo/vue-hot-toast";

const otp = ref("");
const email = ref("");
const authStore = useAuthStore();
const router = useRouter();

const handleVerify = async () => {
  try {
    await authStore.verify({ otp: otp.value });
    // await authStore.fetchMe();
    router.push("/");
    toast.success("Verify was successfull");
  } catch (error) {
    alert(error);
    console.error(error);
  }
};

const handleGenerateOtp = async () => {
  try {
    await authStore.generateOtp({ email: email.value });
  } catch (error) {
    toast.error(error);
  }
};
</script>
