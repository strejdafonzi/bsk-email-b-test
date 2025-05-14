<template>
      <div class="hero bg-base-200 min-h-fit pb-5">
        <div class="hero-content text-center container">
          <div class="max-w-screen pb-[10vh]"> 
            <img src="../assets/post_monster.png" alt="logo" 
            class="turno select-none mx-auto max-w-60 " 
            :class="Math.random() > 0.5 ? 'spin-cw' : 'spin-ccw'" /> <!-- I couldn't decide whether the mascot should spin clockwise or counterclockwise, so I made it random. -->

            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pretty-content grad">
              Secure Email Proxy for Bluesky
            </h1>
            <h2 class="text-lg sm:text-xl md:text-2xl text-pretty-content max-w-3xl text-center mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
              Get a secure and anonymous email address connected to your Bluesky handle without revealing your real email address.
            </h2>
            <button class="btn btn-xl btn-primary mx-2 hover:-translate-y-2 transform transition duration-300">Get Started</button>
            <button class="btn btn-xl btn-secondary hover:-translate-y-2 transform transition duration-300">Visit our Bluesky</button>
          </div>
        </div>
      </div>
  </template>
