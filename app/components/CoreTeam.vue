<script setup lang="ts">
const coreTeam = [
  { image: '/images/lead1.png'},
  { image: '/images/lead2.png'},
  { image: '/images/lead3.png'},
]
</script>

<template>
  <section class="bg-black text-white py-16 md:py-20">
    <div class="mx-auto max-w-7xl px-4 md:px-6">

      <!-- 🔹 HEADER -->
      <div
        class="mb-12 flex flex-col gap-6 md:flex-row  md:items-center md:justify-between"
      >
        <div class=" text-left">
          <h2 class="font-serif text-3xl md:text-5xl mb-3">
            Core Team   
          </h2>

          <p class="mx-auto md:max-w-md text-sm text-white/70 md:mx-0 md:text-base">
            The people shaping the vision and direction behind everything we build.
          </p>
        </div>

        <button
          class="hidden md:block md:mx-0 rounded-lg bg-white px-5 py-2.5
                 text-sm font-medium text-black hover:bg-white/90
                 md:text-base"
        >
          View All Speakers
        </button>
      </div>

      <!-- 🔹 CORE TEAM GRID -->
     <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 md:gap-8">
  <div
    v-for="(member, index) in coreTeam"
    :key="index"
    class="relative
           overflow-hidden rounded-xl bg-neutral-900 md:rounded-2xl"
  >
    <img
      :src="member.image"
      :alt="member.name"
      class="h-full w-full object-contain"
    />

    <!-- NAME + ROLE -->
    <div
      class="absolute bottom-0 left-0 right-0
             bg-gradient-to-t from-black/80 via-black/40 to-transparent
             px-4 py-3"
    >
      <div class="flex items-center justify-between">
        <!-- <span class="font-serif text-sm md:text-base">
          {{ member.name }}
        </span> -->
        <!-- <span class="text-xs md:text-sm italic text-white/70">
          {{ member.role }}
        </span> -->
      </div>
    </div>
  </div>
</div>


    </div>
  </section>
</template>
