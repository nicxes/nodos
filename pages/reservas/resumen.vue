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
          <li>
            Desde: <b>{{ $store.getters["cart/getCart"].start ? formatDate($store.getters["cart/getCart"].start) : '-' }}</b> | Hasta: <b>{{ $store.getters["cart/getCart"].end ? formatDate($store.getters["cart/getCart"].end) : '-' }}</b>
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
                required
              >
            </div>

            <div>
              <input
                v-model="owner.lastname"
                placeholder="Apellido"
                type="text"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.dni"
                placeholder="DNI"
                type="number"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.phone"
                placeholder="Teléfono celular"
                type="number"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.email"
                placeholder="Correo electrónico"
                type="email"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.birth_date"
                placeholder="Fecha de Nacimiento (DD-MM-YYYY)"
                type="date"
                pattern="DD-MM-YYYY"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.address_street"
                placeholder="Domicilio (Calle y Número)"
                type="text"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                required
              >
            </div>

            <div>
              <input
                v-model="owner.address_state"
                placeholder="Provincia"
                type="text"
                class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                required
              >
            </div>
          </div>
        </div>

        <div class="bg-[#F7F7F7] p-4 mb-4">
          <div class="flex justify-between mb-3">
            <h3 class="text-[#226B2F] font-bold">
              Otros Pasajeros
            </h3>

            <button class="text-[#226B2F] font-bold cursor-pointer" @click="addPassenger">
              +
            </button>
          </div>
          <ul class="grid grid-cols-1 gap-6">
            <li v-for="(passenger, index) in passengers" :key="index">
              <p class="text-sm mb-2.5">
                Datos del Pasajero #{{ index + 1 }}
              </p>
              <div class="grid grid-cols-1 gap-2.5">
                <div>
                  <input
                    v-model="passenger.nombre"
                    placeholder="Nombre"
                    type="text"
                    class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                    required
                  >
                </div>
                <div>
                  <input
                    v-model="passenger.apellido"
                    placeholder="Apellido"
                    type="text"
                    class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                    required
                  >
                </div>
                <div>
                  <input
                    v-model="passenger.documento_identidad"
                    placeholder="DNI"
                    type="number"
                    class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                    required
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-[#2A2D34] text-center text-xs max-w-[297px] mx-auto mb-4">
            <b>¡Importante!</b> Recordá que enviarás una solicitud de reserva al alojamiento seleccionado para las fechas deseadas. Se contactarán del alojamiento para continuar con el proceso de reservación.
          </p>

          <button type="submit" class="bg-[#35BC75] text-sm text-white font-bold rounded-[10px] w-full py-3">
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
      passengers: [
        {
          nombre: null,
          apellido: null,
          documento_identidad: null
        }
      ]
    }
  },
  head: {
    title: 'Solicitud de Reserva'
  },
  methods: {
    formatDate (date) {
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear().toString()
      return `${day}/${month}/${year}`
    },
    addPassenger () {
      this.passengers.push({
        nombre: null,
        apellido: null,
        documento_identidad: null
      })
    },
    handleSubmit () {
      const startDate = this.$store.getters['cart/getCart'].start
      const endDate = this.$store.getters['cart/getCart'].end
      const quantity = this.$store.getters['cart/getQuantity']
      const result = this.formatData(startDate, endDate, quantity, this.owner)
      const options = {
        headers: {
          'Content-Type': 'application/vnd.api+json'
        }
      }

      this.$axios.$post('https://turismo.catam.ar/api/v1/reserva/', result, options)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
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
                fecha_nacimiento: owner.birth_date,
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
            }
          },
          producto_turistico: {
            data: {
              id: this.data.id,
              type: 'ProductoTuristico'
            }
          }
        }
      }

      return data
    }
  }
}
</script>
