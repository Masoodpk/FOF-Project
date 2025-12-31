<script setup lang="ts">
const speakers = [
  { image: '/images/speaker1.png' },
  { image: '/images/speaker2.png' },
  { image: '/images/speaker3.png' },
  { image: '/images/speaker4.png' },
  { image: '/images/speaker5.png' },
  { image: '/images/speaker6.png' },
  { image: '/images/speaker7.png' },
  { image: '/images/speaker8.png' },
]
</script>

<template>
  <section class="bg-black text-white py-16 md:py-20">
    <div class="mx-auto max-w-7xl px-4 md:px-6">

      <!-- 🔹 HEADER -->
      <div class="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="text-center md:text-left">
          <h2 class="font-serif text-3xl md:text-5xl mb-3">
            Our Speakers
          </h2>

        <p class="mx-auto max-w-sm text-sm text-white/70 md:mx-0 md:text-base">
  Meet the voices shaping modern design, creativity, and digital experiences.
</p>

        </div>

        <Button
          class="mx-auto md:mx-0 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 md:text-base"
        >
          View All Speakers
        </Button>
      </div>

      <!-- 🔹 SPEAKERS GRID -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
        <div
          v-for="(speaker, index) in speakers"
          :key="index"
          class="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 md:rounded-2xl"
        >
          <img
            :src="speaker.image"
            alt="Speaker"
            class="h-full w-full object-cover"
          />
        </div>
      </div>

    </div>
  </section>
</template>
