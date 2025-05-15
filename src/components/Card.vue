<template>
  <div class="hover:-translate-y-2 transform transition duration-300 indicator card w-[30rem] dark:bg-base-200 glass/80 shadow-md px-6 py-3">

      <span class="indicator-item indicator-start flex items-center justify-center w-14 h-14 p-2.5 rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-extrabold tracking-wide">
      {{ step }}
    </span>
      <div class="card-body space-y-2">
          <h5 class="text-3xl font-bold grad">
        <slot name="title" />
      </h5>
          <p class="text-base text-pretty leading-relaxed">
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