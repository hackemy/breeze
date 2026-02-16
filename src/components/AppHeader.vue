<template>
  <header class="site-header">
    <RouterLink to="/">
      <img :src="logo" alt="Breeze Café" class="site-header__logo" />
    </RouterLink>
    <button class="hamburger" aria-label="Open navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/breeze-blue-logo.png'
</script>
