<template>
  <header class="sticky top-0 z-50 border-b border-white/30 bg-breeze-cream/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <img :src="logo" alt="Breeze Café logo" class="h-12 w-auto" />
        <div>
          <p class="text-xs uppercase tracking-[0.35em] text-slate-500">Breeze Café</p>
          <p class="font-heading text-xl text-breeze-blue">Menu</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="transition hover:text-breeze-blue"
          :class="{ 'text-breeze-blue': route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <a :href="`tel:${contact.phone.replace(/\s+/g, '')}`" class="btn btn-secondary hidden md:inline-flex">
          Call us
        </a>
        <RouterLink to="/contact" class="btn btn-primary">Visit / contact</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import logo from '@/assets/images/breeze-blue-logo.png'
import { contactDetails as contact } from '@/data/contact'

const route = useRoute()

const links = [
  { label: 'Menu', to: '/' },
  { label: 'Contact', to: '/contact' }
]
</script>
