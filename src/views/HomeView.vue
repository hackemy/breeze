<template>
  <main>
    <section class="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-16 lg:flex-row lg:items-center">
      <div class="flex-1 space-y-6">
        <p class="text-sm uppercase tracking-[0.4em] text-breeze-gold">Kissamos, Crete</p>
        <h1 class="font-heading text-5xl text-breeze-blue lg:text-6xl">
          Mediterranean flavors from sunrise coffees to sunset cocktails.
        </h1>
        <p class="text-lg text-slate-600">
          Breeze Café is an all-day cafe bar on the Kissamos waterfront. Brunch, pinsa, desserts, smoothies, cocktails.
          The menu below mirrors the official Breeze selection.
        </p>
        <div class="flex flex-wrap gap-4">
          <a :href="`tel:${phone.replace(/\s+/g, '')}`" class="btn btn-primary">Call to order</a>
          <RouterLink to="/contact" class="btn btn-secondary">How to visit</RouterLink>
        </div>
      </div>
      <div class="flex-1">
        <div class="rounded-[40px] bg-white/80 p-6 shadow-card">
          <img src="@/assets/images/breeze-coffee.png" alt="Breeze Café collage" class="rounded-[32px]" />
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6">
      <MenuGrid />
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MenuGrid from '@/components/MenuGrid.vue'
import { contactDetails } from '@/data/contact'

const phone = contactDetails.phone
</script>
