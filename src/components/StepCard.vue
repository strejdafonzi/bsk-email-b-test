<template>
    <section
      id="how-it-works"
      class="flex flex-col items-center space-y-6 py-15 justify-center"
    >
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center pb-10" v-html="styledStepsHeader"></h2>

  
      <!-- Cards Row -->
      <div class="w-full px-4 sm:px-6 md:px-8">
        <div 
          class="mx-auto w-full max-w-screen-xl px-2 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card :step="1">
            <template #title> {{ currentTranslation.step1title }} </template>
            <template #description>
              <span v-html="currentTranslation.step1desc"></span>
            </template>
          </Card>

          <Card :step="2">
            <template #title> {{ currentTranslation.step2title }} </template>
            <template #description>
              <span v-html="currentTranslation.step2desc"></span>
            </template>
          </Card>

          <Card :step="3">
            <template #title> {{ currentTranslation.step3title }} </template>
            <template #description>
              <span v-html="currentTranslation.step3desc"></span>
            </template>
          </Card>
        </div>
      </div>
    </section>
  </template>
  


  <script setup>
  import { inject, computed } from 'vue';
  import Card from "./Card.vue";
  
  const translations = inject('translations');
  const currentLanguage = inject('currentLanguage');
  
  const currentTranslation = computed(() => {
    return translations[currentLanguage.value] || translations['en'];
  })
  
  const styledStepsHeader = computed(() => {
    return currentTranslation.value.stepsheader.replace(
      '{email}',
      '<span class="text-primary">email</span>'
    );
  });
  </script>
  