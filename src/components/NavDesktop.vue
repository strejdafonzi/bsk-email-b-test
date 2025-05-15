<template>
  <div class="hidden sm:flex sm:items-center sm:space-x-4">
      <a href="#how-it-works" class="btn btn-lg btn-ghost">{{ translations[currentLanguage].howitworks }}</a>
      <a href="#features" class="btn btn-lg btn-ghost">{{ translations[currentLanguage].features }}</a>
      <a href="#pricing" class="btn btn-lg btn-ghost">{{ translations[currentLanguage].pricing }}</a>
      <a href="#Bluesky" class="btn btn-lg btn-ghost">{{ translations[currentLanguage].bluesky }}</a>
      <a href="https://bsky.app/profile/bot.bsk.email" class="btn btn-neutral btn-lg">{{ translations[currentLanguage].login }}</a>
      <ThemeSwitcher />
      <LanguageDropdown />
  </div>
</template>

<script setup>
  import { inject } from 'vue';
  import ThemeSwitcher from './ThemeSwitcher.vue';
  import LanguageDropdown from './LanguageDropdown.vue';
  
  const translations = inject('translations');
  const currentLanguage = inject('currentLanguage');
</script>