<template>
    <div
      class="card bg-base-300 shadow-xl transition-transform hover:scale-105 relative hover:z-10 mb-6 w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
      v-bind="$attrs"
    >
      <slot name="badge" />
  
      <div class="card-body">
        <h3 class="card-title text-3xl">
          <slot name="title">Default Plan</slot>
        </h3>
        <p class="text-base-content/60">
          <slot name="description">Plan description goes here.</slot>
        </p>
        <div class="text-5xl font-extrabold mt-6">
          <slot name="price">€0</slot>
          <span class="text-xl font-medium text-base-content/60">
            <slot name="period">/year</slot>
          </span>
        </div>
        <ul class="mt-6 space-y-2 text-base-content/70">
          <template v-if="features.length">
            <li v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
              <span class="text-primary">✓</span>{{ feature }}
            </li>
          </template>
          <slot name="features" />
        </ul>
        <div class="card-actions pt-4">
          <button
          class="btn btn-primary btn-block hover:text-zinc-100 hover:-translate-y-2 transform transition duration-300 shadow-md-5 text-sm sm:text-base md:text-lg">
            <slot name="button">Get Started</slot>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PriceCard",
    inheritAttrs: false,
    props: {
      features: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  