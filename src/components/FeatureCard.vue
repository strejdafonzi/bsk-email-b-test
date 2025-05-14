<template>
    <div class="hover:-translate-y-2 transform transition duration-300 card w-[30rem] bg-base-100 shadow-md">
      <div class="flex justify-start items-center space-x-4 pt-6 pl-6 text-4xl">
        <slot name="icon" />
      </div>
      <div class="card-body">
        <h5 class="text-3xl font-bold text-base-content py-2">
          <slot name="title" />
        </h5>
        <p class="text-base leading-relaxed">
          <slot name="description" />
        </p>
      </div>
    </div>
  </template>
  