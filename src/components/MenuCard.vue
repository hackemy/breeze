<template>
  <article :class="['menu-card', align === 'right' ? 'right' : '']">
    <img :src="image" :alt="alt" class="menu-card__image" />
    <div>
      <h3 class="menu-card__title">{{ title }}</h3>
      <p class="menu-card__description">{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
  alt: string
  align: 'left' | 'right'
}

defineProps<Props>()
</script>
