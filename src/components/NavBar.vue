<template>
	<div
	  id="Navigace"
	  class="sticky top-0 w-full z-50 bg-base-100 shadow-md flex items-center justify-between px-6 h-20 relative"
	>
	  <!-- Logo (no scale on scroll) -->
	  <div
		class="flex items-center space-x-1 whitespace-nowrap font-bold tracking-wide text-2xl sm:text-3xl origin-left"
	  >
		<svg
		  id="BskyEnvelope"
		  class="pointer-events-none inline-block align-middle h-[1.25em] w-auto"
		  xmlns="http://www.w3.org/2000/svg"
		  viewBox="0 0 400 200"
		>
		  <!-- SVG content unchanged -->
		  <defs>
			<linearGradient
			  id="blue-gradient"
			  x1="165.44"
			  y1="29.72"
			  x2="235.08"
			  y2="99.35"
			  gradientUnits="userSpaceOnUse"
			>
			  <stop offset="0" stop-color="#598ac2" />
			  <stop offset=".21" stop-color="#5483ba" />
			  <stop offset=".55" stop-color="#496fa4" />
			  <stop offset=".95" stop-color="#375080" />
			  <stop offset="1" stop-color="#354d7c" />
			</linearGradient>
		  </defs>
		  <rect
			fill="#1b1b2e"
			x="105.95"
			y="-54.6"
			width="188.62"
			height="309.41"
			rx="24.16"
			ry="24.16"
			transform="translate(300.37 -100.15) rotate(90)"
		  />
		  <rect fill="#d3cdbc" x="47.56" y="7.8" width="305.41" height="184.62" rx="22.16" ry="22.16" />
		  <path
			fill="#c6bfb0"
			d="M338.33,167.5l-123.86-122.16c-7.82-7.71-20.61-7.71-28.43,0l-123.86,122.16c-4.62,4.56-6.49,10.82-5.64,16.78,3.69,2.75,8.25,4.38,13.18,4.38h261.08c4.93,0,9.49-1.63,13.18-4.38.84-5.96-1.03-12.22-5.65-16.77Z"
		  />
		  <path
			fill="#273151"
			d="M60.63,13.51c-1.18,5.88.59,12.21,5.33,16.74l120.47,115.02c7.6,7.26,20.05,7.26,27.65,0l120.47-115.02c4.53-4.32,6.33-10.27,5.47-15.92H60.7c-.04-.27-.04-.55-.07-.82Z"
		  />
		  <path
			fill="#d3cdbc"
			d="M65.97,24.58l120.47,115.02c7.6,7.26,20.05,7.26,27.65,0l120.47-115.02c3.16-3.02,4.99-6.83,5.52-10.77H60.44c.53,3.95,2.37,7.76,5.53,10.77Z"
		  />
		  <path
			fill="url(#blue-gradient)"
			d="M175.41,40.1c10.06,7.55,20.88,22.86,24.85,31.08,3.97-8.22,14.79-23.53,24.85-31.08,7.26-5.45,19.02-9.66,19.02,3.75,0,2.68-1.54,22.51-2.44,25.73-3.13,11.19-14.54,14.05-24.69,12.32,17.74,3.02,22.26,13.02,12.51,23.03-18.51,19-26.61-4.77-28.68-10.86-.38-1.12-.56-1.64-.56-1.19,0-.44-.18.08-.56,1.19-2.07,6.09-10.17,29.85-28.68,10.86-9.75-10-5.23-20.01,12.51-23.03-10.15,1.73-21.56-1.13-24.69-12.32-.9-3.22-2.44-23.05-2.44-25.73,0-13.42,11.76-9.2,19.02-3.75Z"
		  />
		</svg>
		<span class="pointer-events-none">bsk.</span>
		<span class="text-primary pointer-events-none">email</span>
	  </div>
  
	  <!-- Menu, language, theme icons -->
	  <div class="flex items-center space-x-4">
		<!-- Hamburger (mobile only) -->
		<button
		  @click="open = !open"
		  class="sm:hidden btn btn-ghost btn-circle"
		  aria-label="Toggle Menu"
		>
		  <svg v-if="!open" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		  </svg>
		  <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
		  </svg>
		</button>
  
		<!-- Desktop nav -->
		<NavDesktop :t="t" :languages="languages" :currentLanguage="currentLanguage" @language-change="setLanguage" />
	  </div>
  
	  <!-- Mobile nav dropdown -->
	  <NavMobile
		v-if="open"
		:t="t"
		:languages="languages"
		:currentLanguage="currentLanguage"
		@language-change="setLanguage"
		@close="open = false"
		class="absolute top-16 right-0  rounded-b-lg z-50"
	  />
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import NavDesktop from './NavDesktop.vue';
  import NavMobile from './NavMobile.vue';
  import { useTranslations, languages, currentLanguage, setLanguage } from '@/lang.js';
  
  const open = ref(false);
  
  const { currentTranslation } = useTranslations();
  const t = currentTranslation;
  </script>
  