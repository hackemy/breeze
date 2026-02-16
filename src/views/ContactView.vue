<template>
  <main class="mx-auto max-w-5xl px-6 py-16">
    <div class="rounded-[40px] bg-white/90 p-10 shadow-card">
      <p class="text-sm uppercase tracking-[0.35em] text-breeze-gold">Visit us</p>
      <h1 class="mt-3 font-heading text-5xl text-breeze-blue">Plan your Breeze Café visit</h1>
      <p class="mt-4 text-lg text-slate-600">
        Breeze Café is open daily for breakfast, brunch, all-day snacks, and evening cocktails. Reach out via phone or email, or jump into WhatsApp for same-day reservations.
      </p>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <div v-for="item in callouts" :key="item.label" class="rounded-3xl border border-breeze-blue/10 p-6">
          <p class="text-xs uppercase tracking-[0.4em] text-breeze-gold">{{ item.label }}</p>
          <p class="mt-3 text-2xl font-semibold text-breeze-blue">{{ item.value }}</p>
          <a :href="item.href" target="_blank" rel="noreferrer" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-breeze-blue">
            {{ item.cta }} →
          </a>
        </div>
      </div>
      <div class="mt-10 flex flex-wrap gap-4">
        <a :href="mapsUrl" target="_blank" rel="noreferrer" class="btn btn-secondary">Open on Google Maps</a>
        <a :href="officialUrl" target="_blank" rel="noreferrer" class="btn btn-primary">Browse official site</a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { contactDetails } from '@/data/contact'

const { phone, mail, address, whatsapp, whatsappUrl, mapsUrl, menuUrl: officialUrl } = contactDetails

const callouts = [
  {
    label: 'Phone',
    value: phone,
    href: `tel:${phone.replace(/\s+/g, '')}`,
    cta: 'Call now'
  },
  {
    label: 'Email',
    value: mail,
    href: `mailto:${mail}`,
    cta: 'Send email'
  },
  {
    label: 'Address',
    value: address,
    href: mapsUrl,
    cta: 'Get directions'
  },
  {
    label: 'WhatsApp',
    value: whatsapp,
    href: whatsappUrl,
    cta: 'Chat on WhatsApp'
  }
]
</script>
