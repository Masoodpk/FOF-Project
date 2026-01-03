<script setup lang="ts">
// import LiquidGlassEffect from '@/components/ui/LiquidGlassEffect.vue'
</script>

<template>
  <!-- Sticky full-width wrapper -->
<div class="fixed top-[env(safe-area-inset-top)] z-50 w-full">



    <!-- Liquid glass FULL WIDTH -->
    <LiquidGlassEffect
      :radius="0"
      :blur="12"
      :frost="0.12"
      :alpha="0.9"
      class="w-full"
      container-class="pointer-events-auto"
    >
      <!-- INNER CONTAINER -->
      <div class="mx-auto max-w-7xl px-4">
        <nav
          class="flex items-center justify-between
                 py-4 text-black"
        >
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2">
            <img
              src="/logos/fof-logo.png"
              class="h-10 w-10 object-contain"
              alt="FoF"
            />
            <span class="text-lg md:text-xl font-medium" >
              FoF Kozhikode
            </span>
          </NuxtLink>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <button
              class="hidden md:block rounded-lg
                     border border-black/20
                     px-5 py-2 text-sm
                     backdrop-blur-md"
            >
              Connect with us
            </button>

            <button
              class="rounded-lg bg-black text-white
                     px-8 py-2 text-sm
                     hover:bg-neutral-900 transition"
            >
              Join Us
            </button>
          </div>
        </nav>
      </div>
    </LiquidGlassEffect>
  </div>
</template>
