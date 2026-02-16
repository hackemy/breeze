<template>
  <section id="menu" class="space-y-10">
    <div class="flex flex-wrap items-baseline justify-between gap-6">
      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-breeze-gold">Menu highlights</p>
        <h2 class="mt-2 font-heading text-4xl text-breeze-blue">All-day indulgence</h2>
      </div>
      <a
        :href="menuUrl"
        target="_blank"
        rel="noreferrer"
        class="btn btn-secondary"
      >
        View full menu
      </a>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <MenuCard
        v-for="category in categories"
        :key="category.id"
        v-bind="category"
      />
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
