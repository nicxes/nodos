<template>
  <section class="py-8 md:py-12">
    <div class="container mx-auto">
      <h3 class="font-input text-2xl font-semibold mb-6">
        Novedades
      </h3>

      <client-only>
        <div ref="swiper" class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="~assets/images/desktop.png" class="hidden md:block w-full rounded-[10px]">
              <img src="~assets/images/mobile.png" class="block md:hidden w-full rounded-[10px]">
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </section>
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
