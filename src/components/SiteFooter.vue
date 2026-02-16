<template>
  <footer class="site-footer">
    <div class="site-footer__grid">
      <div>
        <p class="footer-heading">Find us</p>
        <ul class="footer-list">
          <li><a class="footer-link" :href="`tel:${contact.phone.replace(/\s+/g, '')}`">(+30) 2822023324</a></li>
          <li><a class="footer-link" :href="`mailto:${contact.mail}`">info@breezecafe.gr</a></li>
          <li><a class="footer-link" :href="contact.mapsUrl" target="_blank" rel="noreferrer">Paraliaki, Kissamos</a></li>
          <li><a class="footer-link" :href="contact.whatsappUrl" target="_blank" rel="noreferrer">6945486553</a></li>
        </ul>
      </div>

      <div>
        <p class="footer-heading">Information</p>
        <ul class="footer-list">
          <li><a class="footer-link" href="https://breezecafe.gr/about-us/" target="_blank" rel="noreferrer">About us</a></li>
          <li><a class="footer-link" href="https://breezecafe.gr/gallery/" target="_blank" rel="noreferrer">Gallery</a></li>
          <li><a class="footer-link" href="https://breezecafe.gr/contact-us/" target="_blank" rel="noreferrer">Contact us</a></li>
        </ul>
      </div>

      <div class="footer-cta">
        <button class="make-reservation" type="button">Make a reservation</button>
      </div>
    </div>

    <div class="footer-bottom">
      <div>
        <p class="footer-heading">Follow us</p>
        <ul class="footer-list">
          <li><a class="footer-link" :href="contact.instagram" target="_blank" rel="noreferrer">breeze_cafebar</a></li>
          <li><a class="footer-link" :href="contact.facebook" target="_blank" rel="noreferrer">Breeze cafe bar</a></li>
          <li><a class="footer-link" :href="contact.youtube" target="_blank" rel="noreferrer">Breeze Roof</a></li>
        </ul>
      </div>
      <div class="badge-card">
        <strong>★★★★☆ 4.9</strong>
        <span>Top Rated Restaurant 2026</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { contactDetails as contact } from '@/data/contact'
</script>
