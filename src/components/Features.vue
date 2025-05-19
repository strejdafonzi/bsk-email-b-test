<template>
	<section id="features" class="bg-base-200 flex flex-col items-center justify-center space-y-6 px-4 py-15">
		<h2 class="text-4xl sm:text-3xl md:text-4xl font-bold text-center"> {{ currentTranslation.features }} </h2>
		<h2 class="text-lg sm:text-xl md:text-2xl text-pretty-content max-w-3xl text-center mx-auto sm:p-6 md:p-8 lg:p-10l">
        {{ currentTranslation.featuredesc }} 
  </h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
			<FeatureCard>
				<template #icon>🔒</template>
				<template #title> {{ currentTranslation.privacyprotection}} </template>
				<template #description> {{ currentTranslation.privacyprotectiondesc}} </template>
			</FeatureCard>

			<FeatureCard>
				<template #icon>🚀</template>
				<template #title> {{ currentTranslation.easysetup}} </template>
				<template #description> {{ currentTranslation.easysetupdesc}} </template>
			</FeatureCard>

			<FeatureCard>
				<template #icon>
					<!-- Bluesky SVG -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 530" fill="currentColor"
					class="inline-block w-[1em] h-[1em] text-sky-500">
						<path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
						/>
					</svg>
				</template>
				<template #title> {{ currentTranslation.blueskyintegration}} </template>
				<template #description> {{ currentTranslation.blueskyintegrationdesc}} </template>
			</FeatureCard>

			<FeatureCard>
				<template #icon>👥</template>
				<template #title> {{ currentTranslation.groupemails}} </template>
				<template #description> {{ currentTranslation.groupemailsdesc}} </template>
			</FeatureCard>

			<FeatureCard>
				<template #icon>🛡️</template>
				<template #title> {{ currentTranslation.antispam}} </template>
				<template #description> {{ currentTranslation.antispamdesc}} </template>
			</FeatureCard>

			<FeatureCard>
				<template #icon>🌐</template>
				<template #title> {{ currentTranslation.customdomanins}} </template>
				<template #description> {{ currentTranslation.customdomaninsdesc}} </template>
			</FeatureCard>
		</div>
	</section>
</template>

<script setup>
	import {
		inject, computed
	}
	from 'vue';
	import FeatureCard from './FeatureCard.vue'

	const translations = inject('translations');
	const currentLanguage = inject('currentLanguage');

	const currentTranslation = computed(() => {
		return translations[currentLanguage.value] || translations['en'];
	})
</script>