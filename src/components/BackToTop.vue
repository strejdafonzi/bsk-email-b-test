<template>
    <button
      v-if="visible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 flex items-center space-x-2 border-blu-mN color-blu-d btn btn-circle btn-xl hover:bg-blu-m">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 ">
  <path fill-rule="evenodd" d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
</svg>


    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const visible = ref(false);
  
  const onScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = scrollPosition / pageHeight;
  
    // Show button after 20% scroll
    visible.value = scrollPercent > 0.2;
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', onScroll);
    onScroll(); // check on mount
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });
  </script>
  