<template>
	<div class="hero bg-base-100 min-h-[10vh] md:min-h-[80vh] lg:min-h-[60vh] p-[8em] -ml-20 sm:ml-0">
		<div class="hero-content glass bg-base-300 rounded-selector text-center container relative z-0">

			<!-- Monster holding the box -->
			<img src="@/assets/banner.png" alt="monster" class="absolute top-[-117px] left-[-21px] w-[280px] pointer-events-none z-10"
			/>

			<!-- Speech bubble image -->
			<div class="absolute top-[-100px] left-[260px] w-[400px] z-20 pointer-events-none hidden sm:block">
				<img src="@/assets/bubble.png" alt="speech bubble" class="w-full" />
				<div class="absolute top-[35%] left-[5%] w-[95%]">
					<strong class="font-extrabold text-blu-x text-lg font-extraboldmr-[2rem] animate-pulse">{{ currentTranslation.monstersays}} </strong>
				</div>
			</div>

			<!-- DEPRICATED FLASHING BANNER, REPLACED BY MONSTER
        <div class="w-full max-w-screen-lg sm:min-w-[20rem]">
        <span class="animate-pulse badge badge-xl badge-accent p-4 py-5 m-8 hover:scale-105 transform transition duration-300 pointer-events-none">
            LIMITED TIME OFFER
        </span>
        </div>
        -->

			<!-- Hero Content -->
			<div class="w-full max-w-screen-lg sm:min-w-[20rem]">

				<h1 class="p-5 text-5xl font-bold text-wrap text-base-content">
          {{ currentTranslation.lifetimeproaccess }}
          <span class="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
            {{ currentTranslation.earlyadopters }}
            </span>
          </h1>

				<p>
          {{ currentTranslation.offerdesc }}
				</p>

				<div class="bg-base-100 rounded-selector flex flex-col items-center justify-center px-6 py-4 my-6 space-y-2 sm:px-10 sm:py-6 sm:space-y-3">
					<span class="stat-title font-bold sm:text-lg text-base-content">{{ currentTranslation.offerremain }}</span>
					<span class="animate-pulse stat-value text-4xl sm:text-6xl text-primary font-extrabold">100</span>
				</div>

				<button class="btn btn-primary hover:-translate-y-2 transform transition duration-300 shadow-md-5 m-5 py-4 px-6 text-sm sm:text-base md:text-lg lg:text-xl text-center whitespace-normal break-words">
					{{ currentTranslation.lifetime }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		inject, computed
	}
	from 'vue';

	const translations = inject('translations');
	const currentLanguage = inject('currentLanguage');

	const currentTranslation = computed(() => {
		return translations[currentLanguage.value] || translations['en'];
	})
</script>