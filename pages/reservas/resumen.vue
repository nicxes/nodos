<template>
  <section class="py-6 font-display">
    <div class="container max-w-[800px] mx-auto">
      <div class="bg-[#F1EDE3] p-4 rounded-[20px] mb-4">
        <h3 class="text-[#226B2F] font-bold mb-2">
          Solicitud de Reserva
        </h3>
        <h5 class="text-[#2A2D34] font-bold mb-2">
          {{ data.attributes.objeto.attributes.name }}
        </h5>
        <ul class="text-[#2A2D34] text-sm grid gap-[4px]">
          <li v-if="data.attributes.objeto.target === 'Alojamiento'">
            Desde: <b>{{ $store.getters["cart/getCart"].start ? formatDate($store.getters["cart/getCart"].start) : '-' }}</b> | Hasta: <b>{{ $store.getters["cart/getCart"].end ? formatDate($store.getters["cart/getCart"].end) : '-' }}</b>
          </li>
          <li v-else>
            Fecha de entrada: <b>{{ $store.getters["cart/getCart"].date ? formatDate($store.getters["cart/getCart"].date) : '-' }}</b>
          </li>
          <li>
            Pasajeros:
            <b>
              {{ $store.getters["cart/getCart"].passengers.adults }} Adultos
            </b>
            <span v-if="$store.getters['cart/getCart'].passengers.kids">
              -
              <b>
                {{ $store.getters["cart/getCart"].passengers.kids }} Niños
              </b>
            </span>
          </li>
          <li>
            Servicios:
            <b>
              {{ data.attributes.name }}
            </b>
          </li>
        </ul>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="bg-[#F7F7F7] p-4 mb-3">
          <h3 class="text-[#226B2F] font-bold mb-3">
            Fecha de reserva
          </h3>
          <p class="text-sm mb-2.5">
            Confirma la fecha de tu reserva
          </p>

          <div class="grid grid-cols-1 gap-2.5">
            <div v-if="data.attributes.objeto.target === 'Alojamiento'">
              <v-date-picker
                v-model="range"
                color="green"
                mode="date"
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
                        @change="handleDates"
                        required
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Fecha de salida"
                        class="text-sm font-semibold py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] placeholder:font-normal"
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                        @change="handleDates"
                        required
                      />
                    </div>
                  </div>
                </template>
              </v-date-picker>
            </div>

            <div v-else>
              <v-date-picker
                v-model="range.start"
                color="green"
                mode="date"
                locale="es-AR"
                :masks="masks"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <input
                    placeholder="Fecha de entrada"
                    class="text-sm font-semibold py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] placeholder:font-normal"
                    :value="inputValue"
                    @click="togglePopover"
                    required
                  />
                </template>
              </v-date-picker>
            </div>
          </div>
        </div>

        <div class="bg-[#F7F7F7] p-4 mb-3">
          <h3 class="text-[#226B2F] font-bold mb-3">
            Cargá tus datos
          </h3>
          <p class="text-sm mb-2.5">
            Datos del Titular de la reserva
          </p>

          <div class="grid grid-cols-1 gap-2.5">
            <div>
              <input
                v-model="owner.firstname"
                placeholder="Nombre"
                type="text"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                :disabled="loading"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.lastname"
                placeholder="Apellido"
                type="text"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                :disabled="loading"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.dni"
                placeholder="DNI"
                type="number"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                :disabled="loading"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.phone"
                placeholder="Teléfono celular"
                type="tel"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                :disabled="loading"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.email"
                placeholder="Correo electrónico"
                type="email"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                :disabled="loading"
                required
              >
            </div>

            <div>
              <v-date-picker
                v-model="owner.birth_date"
                color="green"
                mode="date"
                locale="es-AR"
                :masks="masks"
                :max-date="new Date()"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <div>
                    <input
                      placeholder="Fecha de Nacimiento"
                      class="text-sm font-semibold py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] placeholder:font-normal"
                      :value="inputValue"
                      @click="togglePopover"
                      required
                    />
                  </div>
                </template>
              </v-date-picker>
            </div>

            <div>
              <input
                v-model="owner.address_street"
                placeholder="Domicilio (Calle y Número)"
                type="text"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                :disabled="loading"
                required
              >
            </div>

            <div>
              <select
                v-model="owner.address_state"
                placeholder="Provincia"
                type="text"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                :disabled="loading || states.length === 0"
                required
              >
                <option :value="null" selected disabled>
                  Provincia
                </option>
                <option v-for="(state, i) in states" :value="state.id" :key="i">
                  <span class="text-capitalize">
                    {{ state.attributes.nombre }}
                  </span>
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="bg-[#F7F7F7] p-4 mb-4">
          <div class="flex justify-between mb-3">
            <h3 class="text-[#226B2F] font-bold">
              Otros Pasajeros
            </h3>

            <button type="button" class="text-[#226B2F] font-bold cursor-pointer" @click="addPassenger">
              +
            </button>
          </div>
          <ul class="grid grid-cols-1 gap-6">
            <li v-for="(passenger, index) in passengers" :key="index">
              <div class="flex justify-between">
                <p class="text-sm mb-2.5">
                  Datos del Pasajero #{{ index + 1 }}
                </p>
                <div>
                  <button type="button" @click="removePassenger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="14" width="14" fill="#226B2F">
                      <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-2.5">
                <div>
                  <input
                    v-model="passenger.nombre"
                    placeholder="Nombre"
                    type="text"
                    class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                    :disabled="loading"
                    required
                  >
                </div>
                <div>
                  <input
                    v-model="passenger.apellido"
                    placeholder="Apellido"
                    type="text"
                    class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                    :disabled="loading"
                    required
                  >
                </div>
                <div>
                  <input
                    v-model="passenger.documento_identidad"
                    placeholder="DNI"
                    type="number"
                    class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                    :disabled="loading"
                    required
                  >
                </div>
                <div>
                  <label class="mt-2 flex items-center">
                    <input
                      v-model="passenger.is_children"
                      type="checkbox"
                      class="accent-[#35BC75] text-white"
                    >
                    <span class="text-sm ml-2">
                      Si, esta persona es menor de edad.
                    </span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-[#2A2D34] text-center text-xs max-w-[297px] mx-auto mb-4">
            <b>¡Importante!</b> Recordá que enviarás una solicitud de reserva al proveedor seleccionado para las fechas deseadas. Se contactarán para continuar con el proceso de reservación.
          </p>

          <button type="submit" class="bg-[#35BC75] text-sm text-white font-bold rounded-[10px] w-full py-3" :disabled="loading">
            Enviar Soliditud
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, query }) {
    const res = await $axios.$get(`https://turismo.catam.ar/api/v1/producto_turistico/${query.id}`)
    const data = res.data
    return { data }
  },
  data () {
    return {
      loading: false,
      date: this.$store.state.cart.cart.date,
      range: {
        start: this.$store.state.cart.cart.start || this.$store.state.cart.cart.date,
        end: this.$store.state.cart.cart.end
      },
      masks: {
        input: 'DD-MM-YYYY'
      },
      states: [],
      owner: {
        dni: null,
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        address_street: null,
        address_state: null,
        birth_date: null
      },
      passengers: []
    }
  },
  head: {
    title: 'Solicitud de Reserva'
  },
  mounted () {
    this.setQuantity()
    this.getStates()
  },
  methods: {
    capitalizeWords (str) {
      const words = str.split(' ')

      const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })

      const capitalizedStr = capitalizedWords.join(' ')

      return capitalizedStr
    },
    setQuantity () {
      const quantity = this.$store.getters['cart/getQuantity'] - 1

      if (quantity > 0) {
        for (let i = 0; i < quantity; i++) {
          this.addPassenger()
        }
      }
    },
    getStates () {
      this.$axios.$get('https://turismo.catam.ar/api/v1/ubicacion/?nombre=&parent_id=4650&parent_nombre=&tipo=PR')
        .then((res) => {
          const data = res.data

          data.forEach((item) => {
            item.attributes.nombre = this.capitalizeWords(item.attributes.nombre)
          })

          console.log(data)
          this.states = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    formatDate (date) {
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear().toString()
      return `${day}/${month}/${year}`
    },
    formatBirthDate (date) {
      return date.toISOString().slice(0, 10)
    },
    addPassenger () {
      this.passengers.push({
        nombre: null,
        apellido: null,
        documento_identidad: null,
        is_children: false
      })
    },
    removePassenger () {
      this.passengers.pop()
    },
    handleDates () {
      this.$store.commit('cart/setDates', this.range)
    },
    handleSubmit () {
      this.loading = true

      const startDate = this.range.start
      const endDate = this.data.attributes.objeto.target === 'Alojamiento' ? this.range.end : this.range.start
      const quantity = this.$store.getters['cart/getQuantity']
      const result = this.formatData(startDate, endDate, quantity, this.owner)
      const options = {
        headers: {
          'Content-Type': 'application/vnd.api+json'
        }
      }

      this.$axios.$post('https://turismo.catam.ar/api/v1/reserva/', result, options)
        .then((res) => {
          this.$router.push(`/reservas/${res.data.id}`)
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
        })
    },
    formatData (startDate, endDate, quantity, owner) {
      const data = {
        data: {
          type: 'Reserva',
          attributes: {
            start_date: startDate,
            end_date: endDate,
            cantidad: quantity
          },
          relationships: {
            titular: {
              data: {
                nombre: owner.firstname,
                apellido: owner.lastname,
                documento_identidad: owner.dni,
                fecha_nacimiento: this.formatBirthDate(owner.birth_date),
                domicilio: owner.address_street,
                correo_electronico: owner.email,
                ubicacion: {
                  type: 'Ubicacion',
                  id: 1
                }
              }
            },
            acompaniantes: {
              data: [
                ...this.passengers
              ]
            },
            producto_turistico: {
              data: {
                type: 'ProductoTuristico',
                id: this.data.id
              }
            }
          }
        }
      }

      return data
    }
  }
}
</script>

<style scoped>
input[type="checkbox"]:checked:before{
  background-color: #35BC75;
}
</style>
