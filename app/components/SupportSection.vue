<script setup lang="ts">
const row1 = [
  '/images/support/suport1.png',
  '/images/support/suport2.png',
  '/images/support/suport3.png',
  '/images/support/suport4.png',
  '/images/support/suport5.png',
  '/images/support/suport6.png',
]

const row2 = [
  '/images/support/suport7.png',
  '/images/support/suport8.png',
  '/images/support/suport9.png',
  '/images/support/suport10.png',
  '/images/support/suport11.png',
]

const row3 = [
  '/images/support/suport12.png',
  '/images/support/suport13.png',
   '/images/support/suport14.png',
]
const mobileRows = [
  [
    '/images/support/suport1.png',
    '/images/support/suport2.png',
  ],
  [
    '/images/support/suport3.png',
    '/images/support/suport4.png',
    '/images/support/suport5.png',
  ],
  [
    '/images/support/suport6.png',
    '/images/support/suport7.png',
  ],
  [
    '/images/support/suport8.png',
    '/images/support/suport9.png',
    '/images/support/suport10.png',
  ],
  [
    '/images/support/suport11.png',
    '/images/support/suport12.png',
  ],
  [
    '/images/support/suport13.png',
    '/images/support/suport14.png',
  ],
]

</script>

<template>
  <section class="bg-white py-16 md:py-20 hidden md:block">
    <div class="mx-auto max-w-7xl px-4 text-center">

      <!-- HEADER -->
      <h2 class="font-serif text-4xl md:text-5xl mb-3">
        Our Supporters
      </h2>

      <p class="mx-auto text-sm md:text-lg mt-6 text-black/70 mb-14">
         Trusted and supported by design communities and teams across the ecosystem.
      </p>

      <!-- ROW 1 : 6 LOGOS -->
    <div
  class="mb-12 grid 
         grid-cols-3 
         md:grid-cols-3 
         lg:grid-cols-6 
         gap-y-10 gap-x-6 
         place-items-center"
>
  <img
    v-for="(logo, i) in row1"
    :key="i"
    :src="logo"
    class="h-10 md:h-14 w-auto object-contain"
    alt="supporter"
  />
</div>


      <!-- ROW 2 : 5 LOGOS (BIGGER + TIGHTER) -->
   <div
  class="mb-14 grid
         grid-cols-3
         md:grid-cols-5
         gap-y-10 gap-x-1
         place-items-center"
>
  <img
    v-for="(logo, i) in row2"
    :key="i"
    :src="logo"
    class="h-10 md:h-16 w-auto object-contain"
    alt="supporter"
  />
</div>




      <!-- ROW 3 : 2 LOGOS + YOUR LOGO -->
  <div class="mb-16 flex justify-center items-center gap-x-35">
  <img
    v-for="(logo, i) in row3"
    :key="i"
    :src="logo"
    class="h-10 md:h-12 w-auto object-contain"
    alt="supporter"
  />
</div>



      <!-- FOOTER TEXT -->
      <p class="mx-auto  text-sm md:text-lg text-black/70 mb-8">
        Support the design community through contributions, venues,
        or sponsorship for an event
      </p>

      <!-- CTA -->
      <button
        class="rounded-lg bg-black px-12 py-2.5 text-white text-sm md:text-base hover:bg-black/90 transition"
      >
        Connect with us
      </button>

    </div>
  </section>
 <!-- =======================
     MOBILE SUPPORTERS
======================= -->
<section class="bg-white py-16 px-4 md:hidden">
  <div class="mx-auto max-w-sm text-center">

    <!-- HEADER -->
    <h2 class="font-serif text-3xl mb-3">
      Our Supporters
    </h2>

    <p class="text-sm text-black/70 mb-10">
      Supported by design communities and partners who believe in
      building meaningful experiences together.
    </p>

    <!-- LOGO ROWS -->
    <div class="space-y-8 mb-14">
      <div
        v-for="(row, rowIndex) in mobileRows"
        :key="rowIndex"
        class="flex justify-center gap-x-6"
      >
        <img
          v-for="(logo, i) in row"
          :key="i"
          :src="logo"
          class="h-10 sm:h-14 w-auto object-cover"
          alt="supporter"
        />
      </div>
    </div>

    <!-- FOOTER TEXT -->
    <p class="text-sm text-black/70 mb-8">
      Support the design community through contributions, venues,
      or sponsorship for an event.
    </p>

    <!-- CTA -->
    <button
      class="px-12 rounded-lg bg-black py-2.5 text-white text-sm hover:bg-black/90 transition"
    >
      Connect with us
    </button>

  </div>
</section>


</template>
