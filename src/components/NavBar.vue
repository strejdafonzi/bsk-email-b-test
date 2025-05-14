<template>
    <div class="w-full max-h-fit" id="Navigace">
      <nav class="w-full px-6 py-4 shadow-md">
        <div class="flex items-center justify-between w-full">
          <div class="text-2xl sm:text-3xl font-bold tracking-wide pointer-events-none">
            📧bsk.<span class="text-primary">email</span>
          </div>
  
          <!-- Hamburger -->
          <div class="sm:hidden">
            <button @click="open = !open" class="btn btn-ghost btn-circle">
              <svg v-if="!open" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <!-- Desktop Navigation -->
          <NavDesktop />
        </div>
  
        <!-- Mobile Menu -->
        <NavMobile v-if="open" @close="open = false" />
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, inject } from 'vue'
  import NavDesktop from './NavDesktop.vue'
  import NavMobile from './NavMobile.vue'
  
  const open = ref(false)
  </script>
