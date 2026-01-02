<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import FluidCursor from '@/components/FluidCursor.vue'

const sectionRef = ref<HTMLElement | null>(null)
const active = ref(false)

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    active.value = entry.isIntersecting
  },
  {
    threshold: 0.25,
  }
)

// Disable on mobile (same as Inspira)
const isDesktop = ref(true)

onMounted(() => {
  isDesktop.value = window.innerWidth >= 1024
})
useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        active.value = true
      }, 120) // 👈 smooth activation
    } else {
      active.value = false
    }
  },
  { threshold: 0.3 }
)

</script>

<template>
  <section
    ref="sectionRef"
    class="relative min-h-screen overflow-hidden
           bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
  
  >
    <!-- Cursor -->
<FluidCursor
  v-if="active && isDesktop"
  :splat-force="4200"
  :curl="2.5"
  :density-dissipation="4"
/>


    <!-- Content -->
    <div class="relative z-10 px-6 py-24 max-w-7xl mx-auto text-center">
      <h2
        class="text-5xl md:text-7xl font-bold mb-6
               bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
               bg-clip-text text-transparent"
      >
        For Figma Designers
      </h2>

      <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        Elevate your design workflow with cutting-edge tools and
        fluid, immersive interactions.
      </p>
    </div>
  </section>
</template>

