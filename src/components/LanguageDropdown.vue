<template>
  <div class="dropdown dropdown-end justify">
      <button tabindex="0" class="btn btn-ghost btn-circle">
          <svg class="w-18 h-18 max-w-[64px] max-h-[64px] text-base-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15"
              />
          </svg>
      </button>

      <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-b-lg w-36 mt-2 z-50">
          <li><a href="#" @click.prevent="changeLanguage('en')">🇬🇧 English</a></li>
          <li><a href="#" @click.prevent="changeLanguage('cs')">🇨🇿 Česky</a></li>
          <li><a href="#" @click.prevent="changeLanguage('de')">🇩🇪 Deutsch</a></li>
      </ul>
  </div>
</template>

<script setup>
  import { inject } from 'vue';
  
  const setLanguage = inject('setLanguage');
  
  function changeLanguage(lang) {
    setLanguage(lang);
  }
</script>