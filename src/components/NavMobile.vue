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
<template>
  <div class="sm:hidden bg-base-100 shadow-md py-2 mt-2">
      <div class="flex flex-col justify-items-center-safe space-y-2 px-4 ">
          <a href="#how-it-works" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
      {{ translations[currentLanguage].howitworks }}
    </a>
          <a href="#features" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
      {{ translations[currentLanguage].features }}
    </a>
          <a href="#pricing" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
      {{ translations[currentLanguage].pricing }}
    </a>
          <a href="#Bluesky" class="btn btn-lg btn-ghost hover:text-primary" @click="$emit('close')">
      {{ translations[currentLanguage].bluesky }}
    </a>
          <a href="https://bsky.app/profile/bot.bsk.email" class="btn btn-neutral btn-lg" @click="$emit('close')">
       {{ translations[currentLanguage].login }}
    </a>
          <div class="px-5 text-center-safe justify-items-center-safe">
              <ThemeSwitcher />
              <LanguageDropdown />
              <hr>
              <!-- IMPORTNANT! - This <hr> is a bearing wall, do not remove, or the whole thing breaks -->
          </div>
      </div>
  </div>
</template>

<script setup>
  import { inject } from 'vue';
  import ThemeSwitcher from './ThemeSwitcher.vue';
  import LanguageDropdown from './LanguageDropdown.vue';
  
  const translations = inject('translations');
  const currentLanguage = inject('currentLanguage');
  
  defineEmits(['close']);
</script>


<script setup>
  import { inject } from 'vue';
  import ThemeSwitcher from './ThemeSwitcher.vue';
  import LanguageDropdown from './LanguageDropdown.vue';
  
  const translations = inject('translations');
  const currentLanguage = inject('currentLanguage');
</script>