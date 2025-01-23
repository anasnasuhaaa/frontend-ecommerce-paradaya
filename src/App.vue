<script setup>
import { RouterView } from "vue-router";
import AdminaLyout from "./layouts/Admin.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <RouterView></RouterView>
  <Footer />
</template>
