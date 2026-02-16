<template>
  <article class="group relative overflow-hidden rounded-[32px] bg-white shadow-card transition hover:-translate-y-2">
    <img :src="image" :alt="alt" class="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.08]" />
    <div class="space-y-3 px-8 pb-10 pt-8">
      <p class="text-xs font-semibold uppercase tracking-[0.35em] text-breeze-gold">Breeze</p>
      <h3 class="font-heading text-2xl text-breeze-blue">{{ title }}</h3>
      <p class="text-base text-slate-600">{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
  alt: string
}

defineProps<Props>()
</script>
