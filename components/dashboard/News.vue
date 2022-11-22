<template>
  <div class="mb-16">
    <h3 class="font-input text-2xl font-semibold mb-9">
      Novedades
    </h3>

    <client-only>
      <div ref="swiper" class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://i.imgur.com/HuwMMfA.png" class="w-full">
          </div>
          <div class="swiper-slide">
            <img src="https://i.imgur.com/HuwMMfA.png" class="w-full">
          </div>
          <div class="swiper-slide">
            <img src="https://i.imgur.com/HuwMMfA.png" class="w-full">
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

export default {
  async mounted () {
    await this.$nextTick()
    new Swiper(this.$refs.swiper, {})
  }
}
</script>
