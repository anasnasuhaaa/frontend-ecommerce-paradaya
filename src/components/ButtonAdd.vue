<template>
  <button
    type="button"
    :data-modal-target="'crud-modal-' + modalToggle"
    :data-modal-toggle="'crud-modal-' + modalToggle"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-0 text-center me-2 mb-2"
  >
    {{ buttonName }} <v-icon name="fa-plus"></v-icon>
  </button>
</template>
<script setup>
import { inject } from "vue";

const buttonName = inject("buttonName");
const modalToggle = inject("modalToggle");
</script>
