<template>
  <section class="site-shell">
    <div class="menu-grid">
      <MenuCard
        v-for="category in categories"
        :key="category.id"
        v-bind="category"
      />
    </div>

    <div class="site-divider" />

    <div class="flex justify-center">
      <a :href="menuUrl" target="_blank" rel="noreferrer" class="full-menu-button">
        Full Menu
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { menuCategories } from '@/data/menu'
import { contactDetails } from '@/data/contact'
import MenuCard from './MenuCard.vue'

const categories = menuCategories
const menuUrl = contactDetails.menuUrl
</script>
