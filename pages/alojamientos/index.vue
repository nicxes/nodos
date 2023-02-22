<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="hidden md:block mb-7">
        <div class="mb-4">
          <a @click="$router.back()" class="text-sm cursor-pointer">
            Volver atrás
          </a>
        </div>
        <h1 class="text-4xl font-input mb-4">
          Resultados de tu búsqueda
        </h1>
      </div>

      <div class="grid md:grid-cols-4">
        <div>
          123
        </div>
        <ul class="grid grid-cols-1 gap-4 md:col-span-3">
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
