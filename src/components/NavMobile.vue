<template>
  <div class="sm:hidden bg-base-100 shadow-md py-2 mt-2">
    <div class="flex flex-col justify-items-center-safe space-y-2 px-4 ">
      <a href="#how-it-works" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
        {{ currentTranslation.howitworks }}
      </a>
      <a href="#features" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
        {{ currentTranslation.features }}
      </a>
      <a href="#pricing" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
        {{ currentTranslation.pricing }}
      </a>
      <a href="#Bluesky" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
        {{ currentTranslation.bluesky }}
      </a>
      <a href="https://bsky.app/profile/bot.bsk.email" class="btn btn-neutral btn-lg"  @click="$emit('close')">
         {{ currentTranslation.login }}
      </a>
      <div class="px-5 text-center-safe justify-items-center-safe">
        <ThemeSwitcher />
        <LanguageDropdown />
        <hr>  <!-- IMPORTANT! - This <hr> is a bearing wall, do not remove, or the whole thing breaks -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import LanguageDropdown from './LanguageDropdown.vue';

const translations = inject('translations');
const currentLanguage = inject('currentLanguage');

// Create a computed property for the current translation
const currentTranslation = computed(() => {
  return translations[currentLanguage.value] || translations['en'];
});

defineEmits(['close']);
</script>
