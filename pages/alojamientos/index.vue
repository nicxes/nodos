<template>
  <section class="py-12">
    <div class="container">
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="(item, index) in data" :key="index">
          <article class="relative bg-[#F7F7F7] rounded-3xl">
            <div class="mb-3">
              <img :src="item.attributes.objeto.attributes.image_url" class="max-h-[132px] object-cover w-full rounded-t-3xl" />
            </div>
            <div class="px-4 pb-5">
              <h4 class="text-xl text-[#2A2D34] font-bold mb-1.5">
                {{ item.attributes.objeto.attributes.name }}
              </h4>
              <h5 class="text-[#919191] text-sm mb-5">
                {{ item.attributes.objeto.attributes.description }}
              </h5>
              <div class="flex justify-end">
                <NuxtLink :to="`/alojamientos/${item.id}`" class="bg-[#35BC75] text-center text-white inline-block px-4 py-2 rounded-[10px]">
                  Ver opciones desde<br/>
                  <b>{{ item.attributes.price_currency }} ${{ roundNumber(item.attributes.price) }}</b>
                </NuxtLink>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.$get('https://turismo.catam.ar/api/v1/producto_turistico/?page=1')
        .then((res) => {
          this.data = res.data
          console.log(this.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    roundNumber (number) {
      return Math.round(number)
    }
  }
}
</script>
