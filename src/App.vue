<script setup>
import { RouterView, useRoute, useRouter } from "vue-router";
import AdminaLyout from "./layouts/Admin.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { Toaster } from "@steveyuowo/vue-hot-toast";
const route = useRoute();
</script>

<template>
  <Header v-if="!route.meta.hideHeader" />
  <Toaster />
  <RouterView></RouterView>
  <Footer />
</template>
