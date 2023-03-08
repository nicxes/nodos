<template>
  <section class="py-6">
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
              <li v-if="$store.state.cart.type === 'alojamiento'" class="text-lg">
                Fecha desde:
                <span class="font-bold">
                  {{ $store.getters["cart/getCart"].start ? formatDate($store.getters["cart/getCart"].start) : '-' }}
                </span>
              </li>
              <li v-if="$store.state.cart.type === 'alojamiento'" class="text-lg">
                Fecha hasta:
                <span class="font-bold">
                  {{ $store.getters["cart/getCart"].end ? formatDate($store.getters["cart/getCart"].end) : '-' }}
                </span>
              </li>
              <li v-if="$store.state.cart.type === 'atractivo_turistico'" class="text-lg">
                Fecha:
                <span class="font-bold">
                  {{ $store.getters["cart/getCart"].date ? formatDate($store.getters["cart/getCart"].date) : '-' }}
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

      <div class="grid grid-cols-1 md:grid-cols-[300px_auto] gap-8 md:gap-4">
        <div class="bg-[#F1EDE3] rounded-[10px] p-4">
          <h3 class="text-lg md:text-2xl text-[#226B2F] font-semibold mb-4">
            {{ $store.state.cart.type === 'alojamiento' ? 'Alojamientos' : 'Actividades' }}
            <span class="block text-black text-sm font-medium opacity-50">
              {{ data ? `${data.length} Resultados` : 'Cargando' }}
            </span>
          </h3>
          <div class="mb-4">
            <h5 class="font-semibold mb-2">
              Precio
            </h5>

            <div class="grid grid-cols-2 gap-2">
              <div>
                <input
                  v-model="filters.price_min"
                  min="0"
                  type="number"
                  placeholder="Desde"
                  class="bg-white text-[#2A2D34] text-sm p-2 rounded-[10px] block w-full outline-0"
                >
              </div>
              <div>
                <input
                  v-model="filters.price_max"
                  min="0"
                  type="number"
                  placeholder="Hasta"
                  class="bg-white text-[#2A2D34] text-sm p-2 rounded-[10px] block w-full outline-0"
                >
              </div>
            </div>
          </div>
          <div>
            <button @click="getData" type="button" class="text-white text-sm font-bold bg-[#35BC75] rounded-[10px] px-4 py-2">
              Aplicar Filtros
            </button>
          </div>
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
                    Ver esta opción desde<br/>
                    <b>{{ item.attributes.price_currency }} ${{ roundNumber(item.attributes.price) }}</b>
                  </NuxtLink>
                </div>
              </div>
              <div class="hidden md:flex flex-col justify-between p-5">
                <h6 class="text-center text-sm">
                  Desde<br/>
                  <b class="text-base">{{ item.attributes.price_currency }}${{ roundNumber(item.attributes.price) }}</b>
                </h6>
                <NuxtLink :to="`/servicios/${item.id}`" class="bg-[#35BC75] text-center text-white font-bold inline-block px-3 py-2 rounded-[10px]">
                  Ver opción
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
    title: 'Servicios'
  },
  data () {
    return {
      data: [],
      filters: {
        price_min: null,
        price_max: null
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.$get(this.buildUrl())
        .then((res) => {
          this.data = res.data
          console.log(this.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    buildUrl () {
      const filters = {}
      if (this.$store.state.cart.type) {
        filters.content_type__app_label = this.$store.state.cart.type
      }
      if (this.$store.state.cart.type === 'alojamiento') {
        filters.maximum_number_persons_min = 1
        filters.maximum_number_persons_max = this.$store.getters['cart/getQuantity']

        if (this.$store.state.cart.cart.start && this.$store.state.cart.cart.end) {
          filters.start_date = this.formatDateForRequest(this.$store.state.cart.cart.start)
          filters.end_date = this.formatDateForRequest(this.$store.state.cart.cart.end)
        }
      }

      if (this.filters.price_min) {
        filters.price_min = this.filters.price_min
      }
      if (this.filters.price_max) {
        filters.price_max = this.filters.price_max
      }

      if (Object.keys(filters).length > 0) {
        const queryString = new URLSearchParams(filters).toString()
        return `https://turismo.catam.ar/api/v1/producto_turistico/?${queryString}`
      }
    },
    roundNumber (number) {
      return Math.round(number)
    },
    formatDate (date) {
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear().toString()
      return `${day}/${month}/${year}`
    },
    formatDateForRequest (date) {
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear().toString()
      return `${year}-${month}-${day}`
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
