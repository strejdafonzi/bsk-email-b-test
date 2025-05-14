<template>
    <div class="hover:-translate-y-2 transform transition duration-300 indicator card w-96 bg-base-200 shadow-md">
      <span
        class="indicator-item indicator-start text-base-content font-extrabold bg-gradient-to-br from-primary to-secondary w-12 h-12 p-4 rounded-full flex items-center justify-center"
      >
        {{ step }}
      </span>
      <div class="card-body">
        <h5 class="text-3xl font-bold text-transparent bg-gradient-to-bl from-primary to-secondary bg-clip-text">
          <slot name="title" />
        </h5>
        <p class="text-base leading-relaxed">
          <slot name="description" />
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    step: {
      type: [String, Number],
      required: true
    }
  });
  </script>
  