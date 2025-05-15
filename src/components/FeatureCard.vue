<template>
  <div class="card bg-base-100 shadow-md transition-transform transform hover:-translate-y-1 w-full h-full">
      <div class="card-body space-y-4">
          <div class="text-4xl">
              <slot name="icon" />
          </div>
          <h3 class="text-2xl font-bold text-base-content">
      <slot name="title" />
    </h3>
          <p>
              <slot name="description" />
          </p>
      </div>
  </div>
</template>