<template>
    <div class="hero bg-base-200 min-h-fit pb-5">
      <div class="hero-content text-center container">
        <div class="max-w-screen pb-[10vh]">
          <img
            src="../assets/post_monster.png"
            alt="logo"
            class="turno select-none mx-auto max-w-60"
            :class="spinClass"
          />  
          <h1
            class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pretty-content grad"
          >
            {{ currentTranslation.maintitle }}
          </h1>
          <h2
            class="text-lg sm:text-xl md:text-2xl text-pretty-content max-w-3xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10"
          >
            {{ currentTranslation.subtitle }}
          </h2>
          <button
            type="button"
            class="btn btn-xl btn-primary mx-2 hover:-translate-y-2 transform transition duration-300"
          >
            {{ currentTranslation.getstarted }}
          </button>
          <button
            type="button"
            class="btn btn-xl btn-neutral border-2 border-blu-l hover:-translate-y-2 transform transition duration-300"
          >
            {{ currentTranslation.visitbluesky }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { inject, computed, ref, onMounted } from 'vue';
  
  // Inject translation dependencies
  const translations = inject('translations');
  const currentLanguage = inject('currentLanguage');
  
  const DEFAULT_LANG = 'en';
  
  // Compute current translation, fallback to DEFAULT_LANG
  const currentTranslation = computed(() => {
    return translations[currentLanguage.value] || translations[DEFAULT_LANG];
  });
  
  // Spin class is randomly assigned once on mount and stable
  const spinClass = ref('');
  
  onMounted(() => {
    spinClass.value = Math.random() > 0.5 ? 'spin-cw' : 'spin-ccw';
  });
  </script>
  