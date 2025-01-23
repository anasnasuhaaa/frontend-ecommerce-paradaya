<script setup>
import { RouterView } from "vue-router";
import AdminaLyout from "./layouts/Admin.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { Toaster } from "@steveyuowo/vue-hot-toast";
</script>

<template>
  <Header />
  <Toaster />
  <RouterView></RouterView>
  <Footer />
</template>
