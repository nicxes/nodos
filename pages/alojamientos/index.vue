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

        <div class="bg-white p-4 rounded-[10px]">
          <div class="flex justify-between items-center">
            <ul class="flex gap-8">
              <li class="text-lg">
                Fecha desde:
                <span class="font-bold">
                  {{ $store.getters["cart/getCart"].start ? formatDate($store.getters["cart/getCart"].start) : '-' }}
                </span>
              </li>
              <li class="text-lg">
                Fecha hasta:
                <span class="font-bold">
                  {{ $store.getters["cart/getCart"].end ? formatDate($store.getters["cart/getCart"].end) : '-' }}
                </span>
              </li>
              <li class="text-lg">
                Pasajeros:
                <span class="font-bold">
                  {{ $store.getters["cart/getCart"].passengers ? `${$store.getters["cart/getCart"].passengers.adults} Adultos - ${$store.getters["cart/getCart"].passengers.kids} Niños` : '-' }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-[300px_auto]">
        <div class="text-transparent">
          1
        </div>
        <ul class="grid grid-cols-1 gap-4">
          <li v-for="(item, index) in data" :key="index">
            <article class="relative bg-[#F7F7F7] rounded-3xl md:grid md:grid-cols-[210px_auto_170px] md:justify-between">
              <div class="mb-3 md:m-0 md:h-full">
                <img
                  :src="item.attributes.objeto.attributes.image_url"
                  class="max-h-[132px] md:max-h-[inherit] h-full object-cover w-full"
                />
              </div>
              <div class="px-4 pb-5 md:p-5">
                <h4 class="text-xl text-[#2A2D34] font-bold mb-1.5">
                  {{ item.attributes.objeto.attributes.name }}
                </h4>
                <h5 class="text-[#919191] text-sm mb-5">
                  {{ item.attributes.objeto.attributes.description }}
                </h5>
                <div class="flex justify-end md:hidden">
                  <NuxtLink :to="`/alojamientos/${item.id}`" class="bg-[#35BC75] text-center text-white inline-block px-4 py-2 rounded-[10px]">
                    Ver opciones desde<br/>
                    <b>{{ item.attributes.price_currency }} ${{ roundNumber(item.attributes.price) }}</b>
                  </NuxtLink>
                </div>
              </div>
              <div class="hidden md:flex flex-col justify-between p-5">
                <h6 class="text-center text-sm">
                  Desde<br/>
                  <b class="text-base">{{ item.attributes.price_currency }}${{ roundNumber(item.attributes.price) }}</b>
                </h6>
                <NuxtLink :to="`/alojamientos/${item.id}`" class="bg-[#35BC75] text-center text-white font-bold inline-block px-3 py-2 rounded-[10px]">
                  Ver opciones
                </NuxtLink>
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
  head: {
    title: 'Alojamientos'
  },
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
    },
    formatDate (date) {
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear().toString()
      return `${day}/${month}/${year}`
    }
  }
}
</script>

<style scoped>
article img {
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
}

@media only screen and (max-width: 768px) {
  article img {
    border-top-right-radius: 14px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
