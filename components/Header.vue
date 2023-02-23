<template>
  <header class="Header pt-7 md:pt-0 md:mt-0">
    <div class="bg-[#ddd] h-[480px] hidden md:block">
      <img src="" alt=""/>
    </div>

    <div class="container mx-auto md:h-[200px]">
      <div class="Search bg-[#F1EDE3] py-7 md:py-12 px-4 md:px-11 relative md:top-[-150px] rounded-3xl">
        <h3 class="text-[#226B2F] text-xl md:text-2xl text-center font-bold mb-4">
          ¿Estás buscando alojamiento?
        </h3>
        <p class="text-center mb-7">
          Encontrá la mejor opción para hospedarte en <b>Posadas</b>
        </p>

        <form @submit.prevent="handleSubmit" class="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 font-display">
          <div class="md:col-span-2">
            <v-date-picker
              v-model="range"
              color="green"
              mode="dateTime"
              locale="es-AR"
              :masks="masks"
              is-range
            >
              <template v-slot="{ inputValue, inputEvents }">
                <div class="grid grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <input
                      placeholder="Fecha de entrada"
                      class="text-sm font-semibold py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] placeholder:font-normal"
                      :value="inputValue.start"
                      v-on="inputEvents.start"
                      required
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Fecha de salida"
                      class="text-sm font-semibold py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] placeholder:font-normal"
                      :value="inputValue.end"
                      v-on="inputEvents.end"
                      required
                    />
                  </div>
                </div>
              </template>
            </v-date-picker>
          </div>

          <div class="col-span-2 md:col-span-1">
            <input
              v-model="passengers"
              min="0"
              type="number"
              placeholder="Pasajeros"
              class="text-sm font-semibold py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] placeholder:font-normal"
              required
            />
          </div>

          <div class="col-span-2 md:col-span-4 md:flex justify-end md:mt-4 md:mr-4">
            <button type="submit" class="text-white font-bold bg-[#35BC75] rounded-[10px] w-full md:w-[165px] py-4 md:py-2 mb-7 md:mb-0">
              Buscar
            </button>

            <p class="text-center text-sm md:hidden font-input">
              Al buscar aceptas <NuxtLink to="/terminos" class="font-bold">términos y condiciones</NuxtLink>.
            </p>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      passengers: null,
      range: {
        start: null,
        end: null
      },
      masks: {
        input: 'YYYY-MM-DD h:mm A'
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$store.commit('cart/setCart', {
        passengers: this.passengers,
        ...this.range
      })
      this.$router.push('/alojamientos')
    }
  }
}
</script>
