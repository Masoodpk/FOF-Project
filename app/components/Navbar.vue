<script setup lang="ts">
    import { Button } from '@/components/ui/button'
</script>
<template>
  <div class="px-12 bg-white text-black flex flex-col">
    <!-- Navbar -->
    <header class="w-full">
      <nav class="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 md:px-0">
        <!-- Left: Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">

          <img
            src="/logos/fof-logo.png"
            alt="FoF Kozhikode logo"
            class="h-11 w-11 object-contain"
          />
          <span class="text-lg md:text-2xl tracking-tight">
            FoF Kozhikode
          </span>
        </NuxtLink>

        <!-- Right: Buttons -->
        <div class="flex items-center gap-3">
          <Button
            type="button"
            class="rounded-lg border cursor-pointer border-black px-5 py-2 text-sm md:text-base font-medium tracking-tight transition-colors"
          >
            Connect with us
          </Button>
          <Button
            type="button"
            class="rounded-lg bg-black cursor-pointer text-white px-10 py-2 text-sm md:text-base font-medium tracking-tight hover:bg-neutral-900 transition-colors"
          >
            Join Us
          </Button>
        </div>
      </nav>
    </header>
  </div>
</template>
