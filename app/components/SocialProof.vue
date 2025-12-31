<script setup lang="ts">
const logos = [
  { name: 'Mozilor', src: '/logos/mozilor.png' },
  { name: 'Armino', src: '/logos/armino.png' },
  { name: 'Pinterest', src: '/logos/pinterest.png' },
  { name: 'NN/g', src: '/logos/nng.png' },
  { name: 'Google', src: '/logos/google.png' },
  { name: 'Apple', src: '/logos/apple.png' },
  { name: 'Microsoft', src: '/logos/microsoft.png' },
  { name: 'Adobe', src: '/logos/adobe.png' },
  { name: 'Air India', src: '/logos/air.png' },
  { name: 'Samsung', src: '/logos/samsung.png' },
]

// duplicate once for seamless loop
const marqueeLogos = [...logos, ...logos]

const images = [
  '/images/img1.png',
  '/images/img2.png',
  '/images/img3.jpg',
]

// duplicate images
const marqueeImages = [...images, ...images]
</script>

<template>
  <section class="w-full overflow-hidden bg-white">

    <!-- 🔹 TOP LOGO MARQUEE (WHITE BG) -->
    <div class="py-16 marquee">
      <div class="marquee-track marquee-left">
        <div
          v-for="(logo, i) in marqueeLogos"
          :key="logo.name + i"
          class="marquee-item logo-item"
        >
          <img
            :src="logo.src"
            :alt="logo.name"
            class="h-8 w-auto object-contain"
          />
        </div>
      </div>
    </div>

    <!-- 🔹 BOTTOM IMAGE MARQUEE (GRADIENT BG ONLY HERE) -->
    <div class="image-marquee-bg py-10">
      <div class="marquee">
        <div class="marquee-track marquee-right">
          <div
            v-for="(img, i) in marqueeImages"
            :key="img + i"
            class="marquee-item image-item"
          >
            <img
              :src="img"
              class="h-64 w-112.5 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>


<style scoped>
/* ======================
   BASE MARQUEE
====================== */
.marquee {
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* ======================
   DIRECTIONS
====================== */
.marquee-left {
  animation-name: marquee-left;
}

.marquee-right {
  animation-name: marquee-right;
}

/* ======================
   ITEMS
====================== */
.marquee-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 64px;
  white-space: nowrap;
}

.logo-item {
  min-width: 140px;
}

.image-item {
  min-width: 360px;
}

/* ======================
   ANIMATIONS
====================== */
@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.image-marquee-bg {
  position: relative;
  overflow: hidden;

  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #f6fde4 25%,
    #e9f8b89d 60%,
    #e2f5a3 100%
  );
}

/* =========================
   ELLIPTICAL GLOW (IMAGES ONLY)
========================= */
.image-marquee-bg::before {
  content: '';
  position: absolute;

  /* 🔽 make ellipse NARROWER */
  width: 0%;
  height: 15%;

  /* center it */
  top: -10%;
  left: 50%;
  transform: translateX(-50%);

  border-radius: 50%;

  /* softer, center-focused glow */
  background: radial-gradient(
    ellipse at center,
    rgba(204, 249, 2, 0) 0%,
    rgba(164, 240, 0, 0.418) 30%,
    rgba(166, 240, 0, 0.18) 50%,
    transparent 70%
  );

  filter: blur(272.71px);
  z-index: 0;
}


/* content above glow */
.image-marquee-bg > * {
  position: relative;
  z-index: 1;
}

</style>
