<template>
  <span ref="el">{{ Math.floor(count) }}</span>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const props = defineProps({
    duration: {
      type: Number,
      default: 2000,
    },
    children: {
      type: [String, Number],
      required: true,
    },
  })

  const el = ref(null)
  const count = ref(0)
  const hasAnimated = ref(false)
  const countTo = parseInt(props.children, 10)
  const frameDuration = 1000 / 60

  const easeOutQuad = (t) => t * (2 - t)

  const startCounting = () => {
    if (hasAnimated.value) return
    hasAnimated.value = true

    let frame = 0
    const totalFrames = Math.round(props.duration / frameDuration)

    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      count.value = countTo * progress

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
  }

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting()
          observer.disconnect() // stop observing after triggered
        }
      },
      { threshold: 0.5 }, // trigger when 50% is visible
    )

    if (el.value) {
      observer.observe(el.value)
    }
  })
</script>
