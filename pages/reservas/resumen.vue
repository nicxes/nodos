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
            Desde: <b>20/03/2023</b> | Hasta: <b>24/03/2023</b>
          </li>
          <li>
            Pasajeros: <b>2 Adultos</b>
          </li>
          <li>
            Servicios: <b>Habitación Deluxe</b>
          </li>
        </ul>
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
              placeholder="Nombre"
              type="text"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
              required
            >
          </div>

          <div>
            <input
              placeholder="Apellido"
              type="text"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
              required
            >
          </div>

          <div>
            <input
              placeholder="DNI"
              type="number"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
              required
            >
          </div>

          <div>
            <input
              placeholder="Teléfono celular"
              type="number"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
            >
          </div>

          <div>
            <input
              placeholder="Correo electrónico"
              type="email"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
            >
          </div>

          <div>
            <input
              placeholder="Domicilio (Calle y Número)"
              type="text"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
            >
          </div>

          <div>
            <input
              placeholder="Ciudad"
              type="text"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
            >
          </div>

          <div>
            <input
              placeholder="Provincia"
              type="text"
              class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
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
                >
              </div>
              <div>
                <input
                  v-model="passenger.apellido"
                  placeholder="Apellido"
                  type="text"
                  class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
                >
              </div>
              <div>
                <input
                  v-model="passenger.dni"
                  placeholder="DNI"
                  type="number"
                  class="bg-white px-3 py-4 rounded-[10px] w-full placeholder-black placeholder:text-sm outline-0"
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
      passengers: [
        {
          nombre: null,
          apellido: null,
          dni: null
        }
      ]
    }
  },
  head: {
    title: 'Solicitud de Reserva'
  },
  methods: {
    addPassenger () {
      this.passengers.push({
        nombre: null,
        apellido: null,
        dni: null
      })
    }
  }
}
</script>
