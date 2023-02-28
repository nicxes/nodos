<template>
  <header class="Header bg-[#69B764] py-12">
    <div class="container mx-auto">
      <div class="Search bg-[#F1EDE3] py-7 md:py-12 px-4 md:px-11 rounded-3xl shadow">
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
              mode="date"
              locale="es-AR"
              :masks="masks"
              :min-date="new Date()"
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
            <button @click.self="toggleDropdown" type="button" class="relative bg-white text-[#2A2D34] text-sm py-4 px-4 rounded-[10px] block w-full outline-0 text-left">
              <span v-if="showPassengers" class="text-sm font-semibold">
                {{ passengers.adults }} Adultos - {{ passengers.kids }} Niños
              </span>
              <span v-else>
                Pasajeros
              </span>
              <div v-if="isDropdownOpen" class="absolute top-full left-0 z-10 bg-white rounded-b-[10px] w-full p-4 mt-[-10px]">
                <div class="flex justify-between mb-2.5">
                  <b>Adultos</b>
                  <div class="bg-[#F7F7F7] py-1 px-4 flex items-center rounded-[10px]">
                    <button @click="removeAdult" type="button" class="w-[18px] h-[20px]">
                      <svg width="13" height="1" viewBox="0 0 13 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="13" height="1" rx="0.5" fill="#2A2D34"/>
                      </svg>
                    </button>
                    <div>
                      <input
                        v-model="passengers.adults"
                        type="number"
                        class="bg-white font-semibold text-center w-[31px] rounded-[6px] mx-3"
                      >
                    </div>
                    <button @click="addMoreAdults" type="button" class="w-[18px] h-[20px]">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0.8125C7 0.663316 6.94074 0.520242 6.83525 0.414753C6.72976 0.309263 6.58668 0.25 6.4375 0.25C6.28832 0.25 6.14524 0.309263 6.03975 0.414753C5.93426 0.520242 5.875 0.663316 5.875 0.8125V5.875H0.8125C0.663316 5.875 0.520242 5.93426 0.414753 6.03975C0.309263 6.14524 0.25 6.28832 0.25 6.4375C0.25 6.58668 0.309263 6.72976 0.414753 6.83525C0.520242 6.94074 0.663316 7 0.8125 7H5.875V12.0625C5.875 12.2117 5.93426 12.3548 6.03975 12.4602C6.14524 12.5657 6.28832 12.625 6.4375 12.625C6.58668 12.625 6.72976 12.5657 6.83525 12.4602C6.94074 12.3548 7 12.2117 7 12.0625V7H12.0625C12.2117 7 12.3548 6.94074 12.4602 6.83525C12.5657 6.72976 12.625 6.58668 12.625 6.4375C12.625 6.28832 12.5657 6.14524 12.4602 6.03975C12.3548 5.93426 12.2117 5.875 12.0625 5.875H7V0.8125Z" fill="#2A2D34"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <b>Niños</b>
                  <div class="bg-[#F7F7F7] py-1 px-4 flex items-center rounded-[10px]">
                    <button @click="removeKids" type="button" class="w-[18px] h-[20px]">
                      <svg width="13" height="1" viewBox="0 0 13 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="13" height="1" rx="0.5" fill="#2A2D34"/>
                      </svg>
                    </button>
                    <div>
                      <input
                        v-model="passengers.kids"
                        type="number"
                        class="bg-white font-semibold text-center w-[31px] rounded-[6px] mx-3"
                      >
                    </div>
                    <button @click="addMoreKids" type="button" class="w-[18px] h-[20px]">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0.8125C7 0.663316 6.94074 0.520242 6.83525 0.414753C6.72976 0.309263 6.58668 0.25 6.4375 0.25C6.28832 0.25 6.14524 0.309263 6.03975 0.414753C5.93426 0.520242 5.875 0.663316 5.875 0.8125V5.875H0.8125C0.663316 5.875 0.520242 5.93426 0.414753 6.03975C0.309263 6.14524 0.25 6.28832 0.25 6.4375C0.25 6.58668 0.309263 6.72976 0.414753 6.83525C0.520242 6.94074 0.663316 7 0.8125 7H5.875V12.0625C5.875 12.2117 5.93426 12.3548 6.03975 12.4602C6.14524 12.5657 6.28832 12.625 6.4375 12.625C6.58668 12.625 6.72976 12.5657 6.83525 12.4602C6.94074 12.3548 7 12.2117 7 12.0625V7H12.0625C12.2117 7 12.3548 6.94074 12.4602 6.83525C12.5657 6.72976 12.625 6.58668 12.625 6.4375C12.625 6.28832 12.5657 6.14524 12.4602 6.03975C12.3548 5.93426 12.2117 5.875 12.0625 5.875H7V0.8125Z" fill="#2A2D34"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="mt-3 flex justify-end">
                  <button @click="toggleDropdown" type="button" class="font-input text-[#226B2F] border-[1px] border-[#226B2F] rounded-[10px] py-2 px-4">
                    Aplicar selección
                  </button>
                </div>
              </div>
            </button>
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
      isDropdownOpen: false,
      showPassengers: false,
      passengers: {
        ...this.$store.state.cart.cart.passengers
      },
      range: {
        start: this.$store.state.cart.cart.start,
        end: this.$store.state.cart.cart.end
      },
      masks: {
        input: 'DD-MM-YYYY'
      }
    }
  },
  methods: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
      this.showPassengers = true
    },
    handleSubmit () {
      this.$store.commit('cart/setCart', {
        passengers: this.passengers,
        ...this.range
      })
      this.$router.push('/alojamientos')
    },
    addMoreAdults () {
      ++this.passengers.adults
    },
    addMoreKids () {
      ++this.passengers.kids
    },
    removeAdult () {
      if (this.passengers.adults > 1) {
        --this.passengers.adults
      }
    },
    removeKids () {
      if (this.passengers.kids > 0) {
        --this.passengers.kids
      }
    }
  }
}
</script>

<style scoped>
/* hide arrows
 Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield !important;
}
</style>
