<template>
  <div class="hero bg-base-100 min-h-[10vh] md:min-h-[80vh] lg:min-h-[60vh] p-[8em]">
    <div class="hero-content bg-base-200 rounded-selector text-center container relative z-0">

      <!-- Monster holding the box -->
      <img
        src="@/assets/banner_conf.png"
        alt="monster"
        class="absolute top-[-117px] left-[-21px] w-[280px] pointer-events-none z-10"
      />

      <!-- Speech bubble -->
      <div class="absolute top-[-130px] left-[250px] w-[500px] z-20 pointer-events-none">
        <img
          src="@/assets/bubble.png"
          alt="speech bubble"
          class="w-full"
        />
        <div class="absolute top-[43%] left-[10%] w-[85%] text-center">
          <span class="text-xl font-extrabold text-blu-x">I SWEAR, IT WAS HERE A SECOND AGO...</span>
        </div>
      </div>

      <!-- Div held by the monster with 404 message -->
      <div class="w-full max-w-screen-lg sm:min-w-[20rem] min-h-[50vh] flex items-center justify-center p-6 relative overflow-hidden">

        <img
        src="@/assets/eaten.png"
        alt="eaten background"
        class="absolute opacity-5 -z-10 top-1/2 left-1/2 max-w-[600px] w-[50vw] h-auto transform -translate-x-1/2 -translate-y-1/2"
      />


        <div class="text-center w-full text-base-content relative z-10">
          <h1 class="text-6xl sm:text-7xl font-extrabold mb-4 leading-tight">
            404 – Page Not Found
          </h1>
          <p class="max-w-xl mx-auto mb-6">
            But if it was made of HTML, how was I not supposed to eat it? <br> Try another link before I get hungry again.
          </p>
          <a href="./" class="btn btn-primary btn-xl text-lg mt-10">
            Back to safety
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
