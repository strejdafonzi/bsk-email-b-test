<template>
  <div
    class="indicator group card w-full max-w-md dark:bg-base-200 bg-base-300 backdrop-blur-md shadow-md px-6 py-3 transition-transform duration-300 mb-10 sm:mb-0 hover:-translate-y-2"
  >
    <span
      class="indicator-item indicator-start flex items-center justify-center size-12 p-2.5 rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-extrabold tracking-wide ml-8 sm:ml-0 transition-transform duration-300 group-hover:scale-120"
    >
      {{ step }}
    </span>
    <div class="card-body space-y-2">
      <h5 class="text-3xl font-bold text-ballance grad">
        <slot name="title">Default Title</slot>
      </h5>
      <p class="text-base text-pretty leading-relaxed">
        <slot name="description">Default description text goes here.</slot>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  step: {
    type: Number,
    required: true,
    validator: (value) => Number.isInteger(value) && value > 0,
  },
});
</script>
