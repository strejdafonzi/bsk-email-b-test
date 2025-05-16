<template>
  <div class="hidden sm:flex sm:items-center sm:space-x-4">
    <a href="#how-it-works" class="btn btn-lg btn-ghost">
      {{ currentTranslation.howitworks }}
    </a>
    <a href="#features" class="btn btn-lg btn-ghost">
      {{ currentTranslation.features }}
    </a>
    <a href="#pricing" class="btn btn-lg btn-ghost">
      {{ currentTranslation.pricing }}
    </a>
    <a href="#Bluesky" class="btn btn-lg btn-ghost">
      {{ currentTranslation.bluesky }}
    </a>
    <a href="https://bsky.app/profile/bot.bsk.email" class="btn btn-neutral btn-lg">
      {{ currentTranslation.login }}
    </a>

    <ThemeSwitcher />
    <LanguageDropdown />
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import LanguageDropdown from './LanguageDropdown.vue';

const translations = inject('translations');
const currentLanguage = inject('currentLanguage');

const currentTranslation = computed(() => {
  return translations[currentLanguage.value] || translations['en'];
});

//  Debug logs
//console.log('Current language:', currentLanguage.value);
//console.log('Translations available:', translations);
//console.log('Current translation object:', currentTranslation.value);
</script>
