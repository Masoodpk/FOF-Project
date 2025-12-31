<script setup lang="ts">
const badgeImage = '/logos/Badge.png'
const footerIcon = '/logos/footer.png'
</script>

<template>
  <footer class="bg-white pt-16 pb-6">
    <div class="mx-auto max-w-7xl px-4">

      <!-- =====================
           TOP INFO ROW
      ====================== -->
      <div
        class=" flex flex-col gap-10
               md:flex-row md:items-start md:justify-between"
      >
        <!-- LOCATION -->
        <div>
          <p class="mb-2 text-xs uppercase tracking-widest text-black/50">
            Location
          </p>
          <p class="text-sm leading-relaxed text-black">
            152 Thatcher Road St, Manhattan,<br />
            NY 10463, US
          </p>
        </div>

        <!-- INQUIRY -->
        <div>
          <p class="mb-2 text-xs uppercase tracking-widest text-black/50">
            Inquiry
          </p>
          <p class="text-sm text-black">
            hello@heybox.agency<br />
            +0685689696
          </p>
        </div>

        <!-- SOCIAL + BADGE -->
        <div class="flex flex-col items-start gap-6 md:items-end">
          <!-- SOCIAL ICONS -->
       <!-- SOCIAL ICONS -->
<div class="flex gap-3">
  <!-- X -->
  <a
    href="#"
    class="group flex h-10 w-10 items-center justify-center
           rounded-full border border-black/20
           transition hover:bg-lime-400"
    aria-label="X"
  >
    <svg
      viewBox="0 0 24 24"
      class="h-4 w-4 fill-black group-hover:fill-black"
    >
      <path
        d="M18.244 2H21l-6.548 7.48L22 22h-6.172l-4.83-6.01L5.66 22H3l7.07-8.08L2 2h6.328l4.37 5.4L18.244 2Z"
      />
    </svg>
  </a>

  <!-- Instagram -->
  <a
    href="#"
    class="group flex h-10 w-10 items-center justify-center
           rounded-full border border-black/20
           transition hover:bg-lime-400"
    aria-label="Instagram"
  >
    <svg
      viewBox="0 0 24 24"
      class="h-5 w-5 fill-black"
    >
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      />
    </svg>
  </a>

  <!-- Dribbble -->
  <a
    href="#"
    class="group flex h-10 w-10 items-center justify-center
           rounded-full border border-black/20
           transition hover:bg-lime-400"
    aria-label="Dribbble"
  >
    <svg
      viewBox="0 0 24 24"
      class="h-5 w-5 fill-black"
    >
      <path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.93 6.41a8.14 8.14 0 0 1-3.64.57 15.64 15.64 0 0 0-1.16-2.6 8.2 8.2 0 0 1 4.8 2.03Zm-6.93 11a8.07 8.07 0 0 1-2.5-.39 11.78 11.78 0 0 1 3.1-4.41 13.6 13.6 0 0 1 2.9.6A8.12 8.12 0 0 1 12 19.41Z"
      />
    </svg>
  </a>

  <!-- Behance -->
  <a
    href="#"
    class="group flex h-10 w-10 items-center justify-center
           rounded-full border border-black/20
           transition hover:bg-lime-400"
    aria-label="Behance"
  >
    <svg
      viewBox="0 0 24 24"
      class="h-5 w-5 fill-black"
    >
      <path
        d="M8.2 11.6c1.5 0 2.6-.7 2.6-2.1 0-1.4-1-2-2.6-2H3v8.4h5.2c1.7 0 3-.7 3-2.3 0-1.6-1.3-2.4-3-2.4Zm8.3-3.6h4v1.3h-4ZM16.8 11c-1.7 0-2.6 1.2-2.6 2.7 0 1.6.9 2.7 2.7 2.7 1.2 0 2-.6 2.3-1.7h-1.4c-.2.4-.5.7-1 .7-.8 0-1.3-.5-1.3-1.4h3.8c.1-2.1-1-3-2.5-3Z"
      />
    </svg>
  </a>

  <!-- GitHub -->
  <a
    href="#"
    class="group flex h-10 w-10 items-center justify-center
           rounded-full border border-black/20
           transition hover:bg-lime-400"
    aria-label="GitHub"
  >
    <svg
      viewBox="0 0 24 24"
      class="h-5 w-5 fill-black"
    >
      <path
        d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-3 .6-3.6-1.3-3.6-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.3 1.1 2.9.9.1-.7.3-1.1.6-1.4-2.4-.3-5-1.2-5-5.3a4 4 0 0 1 1-2.7 3.7 3.7 0 0 1 .1-2.7s.8-.3 2.8 1a9.7 9.7 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.7 3.7 0 0 1 .1 2.7 4 4 0 0 1 1 2.7c0 4.1-2.6 5-5 5.3.4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"
      />
    </svg>
  </a>
</div>

          <!-- BADGE IMAGE -->
          <img
            :src="badgeImage"
            alt="Award badge"
            class="h-40 hidden md:block"
          />
        </div>
      </div>

      <!-- =====================
           BIG JOIN US TEXT
      ====================== -->
      <div class="mb-10 overflow-hidden">
      <h2
  class="text-[80px] sm:text-[88px] md:text-[140px]
         italic ml-3 md:ml-4"
  style="font-family: 'Instrument Serif', 'Playfair Display', serif;"
>
  join us
</h2>

      </div>

      <!-- =====================
           DIVIDER
      ====================== -->
      <div class="mb-6 h-px w-full bg-black/20"></div>

      <!-- =====================
           BOTTOM BAR
      ====================== -->
      <div
        class="flex flex-col gap-4 text-center text-xs text-black/60
               md:flex-row md:items-center md:justify-between md:text-left"
      >
        <p class="flex items-center justify-center gap-2 md:justify-start">
          made with
          <img
            :src="footerIcon"
            alt="heart"
            class="h-4 w-auto"
          />
          by
          <span class="text-black">fuwad.design</span>
        </p>

        <p>© 2024 Heybox. All Rights Reserved</p>

       <button
  class="hidden md:flex items-center justify-center
         text-black/70 hover:text-black transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="h-6 w-6"
  >
    <path d="M7.41 14.59 12 10l4.59 4.59L18 13.17l-6-6-6 6z" />
  </svg>
</button>


      </div>

    </div>
  </footer>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>