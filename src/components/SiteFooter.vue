<template>
  <footer class="mt-20 bg-breeze-blue text-white">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr,1fr,1fr]">
      <div class="space-y-6">
        <p class="text-sm uppercase tracking-[0.4em] text-breeze-gold">Find us</p>
        <ul class="space-y-4 text-lg">
          <li>
            <a :href="`tel:${contact.phone.replace(/\s+/g, '')}`" class="flex items-center gap-3">
              <span class="text-breeze-gold">Call</span>{{ contact.phone }}
            </a>
          </li>
          <li>
            <a :href="`mailto:${contact.mail}`" class="flex items-center gap-3">
              <span class="text-breeze-gold">Email</span>{{ contact.mail }}
            </a>
          </li>
          <li>
            <a :href="contact.mapsUrl" target="_blank" rel="noreferrer" class="flex items-center gap-3">
              <span class="text-breeze-gold">Visit</span>{{ contact.address }}
            </a>
          </li>
          <li>
            <a :href="contact.whatsappUrl" target="_blank" rel="noreferrer" class="flex items-center gap-3">
              <span class="text-breeze-gold">WhatsApp</span>{{ contact.whatsapp }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-sm uppercase tracking-[0.4em] text-breeze-gold">Information</p>
        <ul class="mt-4 space-y-3 text-sm uppercase tracking-[0.3em] text-white/80">
          <li><a href="https://breezecafe.gr/about-us/" target="_blank" rel="noreferrer">About us</a></li>
          <li><a href="https://breezecafe.gr/gallery/" target="_blank" rel="noreferrer">Gallery</a></li>
          <li><a href="https://breezecafe.gr/contact-us/" target="_blank" rel="noreferrer">Make a reservation</a></li>
        </ul>
      </div>

      <div class="space-y-4">
        <p class="text-sm uppercase tracking-[0.4em] text-breeze-gold">Follow us</p>
        <div class="flex gap-3 text-2xl">
          <a :href="contact.instagram" target="_blank" rel="noreferrer"></a>
          <a :href="contact.facebook" target="_blank" rel="noreferrer"></a>
          <a :href="contact.youtube" target="_blank" rel="noreferrer"></a>
        </div>
        <div class="rounded-3xl border border-white/20 p-6 text-center">
          <p class="text-4xl font-bold">4.9</p>
          <p class="text-sm uppercase tracking-[0.5em] text-white/70">Top Rated 2026</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { contactDetails as contact } from '@/data/contact'
</script>
