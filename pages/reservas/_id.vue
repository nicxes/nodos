<template>
  <section class="pt-7">
    <div class="container max-w-[800px] mx-auto h-full flex flex-col justify-between">
      <div>
        <h1 class="text-lg font-input font-semibold">
          Tu reserva: {{ data.id }}
        </h1>
        <div class="bg-[#F7F7F7] p-4 rounded-[20px] mb-10">
          <h3 class="font-semibold mb-1">
            Servicios contratados
          </h3>
          <h4 class="text-sm font-semibold mb-4">
            {{ data.attributes.producto_turistico.objeto.attributes.name }}
          </h4>
          <ul>
            <li v-if="data.attributes.objeto.target === 'Alojamiento'">
              Desde: {{ formatDate(data.attributes.start_date) }}
            </li>
            <li v-if="data.attributes.objeto.target === 'Alojamiento'">
              Hasta: {{ formatDate(data.attributes.end_date) }}
            </li>
            <li v-if="data.attributes.objeto.target !== 'Alojamiento'">
              Fecha: {{ formatDate(data.attributes.start_date) }}
            </li>
            <li>
              Pasajeros: {{ numAdults }} adultos + {{ numKids }} niño
            </li>
            <li>
              {{ data.attributes.producto_turistico.name }}
            </li>
          </ul>
        </div>
        <h3 class="font-semibold mb-4">
          Datos del proveedor
        </h3>
        <p class="text-sm font-medium mb-4">
          {{ data.attributes.producto_turistico.objeto.attributes.name }}
          <span v-if="alojamiento && alojamiento.attributes.legal_name">
            - {{ alojamiento.attributes.legal_name }}
          </span>
        </p>
        <p v-if="getPhoneFromAlojamiento" class="text-sm font-medium mb-4">
          Teléfono: {{ getPhoneFromAlojamiento.contact_point }}
        </p>
        <p v-if="getWappFromAlojamiento" class="text-sm font-medium mb-4">
          Whatsapp: {{ getWappFromAlojamiento.contact_point }}
        </p>
        <p v-if="alojamiento && alojamiento.attributes.correos_electronicos.length" class="text-sm font-medium mb-7">
          Correo electrónico:
          <span v-for="(email, index) in alojamiento.attributes.correos_electronicos" :key="index">
            - {{ email.contact_point }}
          </span>
        </p>
        <ul class="grid gap-3">
          <li v-if="getPhoneFromAlojamiento">
            <a :href="getPhoneFromAlojamiento.contact_point" type="button" class="font-display text-center text-sm text-white font-semibold bg-[#35BC75] rounded-[10px] w-full py-4">
              Llamar
            </a>
          </li>
          <li v-if="getWappFromAlojamiento">
            <a :href="`https://wa.me/${getWappFromAlojamiento.contact_point}`" type="button" target="_blank" class="font-display text-center text-sm text-white font-semibold bg-[#35BC75] rounded-[10px] w-full py-4">
              Enviar WhatsApp
            </a>
          </li>
          <li v-if="alojamiento && alojamiento.attributes.correos_electronicos[0] && alojamiento.attributes.correos_electronicos[0].contact_point">
            <a :href="alojamiento.attributes.correos_electronicos[0].contact_point" type="button" class="font-display text-center text-sm text-white font-semibold bg-[#35BC75] rounded-[10px] w-full py-4">
              Enviar Correo
            </a>
          </li>
        </ul>
      </div>

      <div class="font-input bg-[#F5F5F5] rounded-[10px] text-center py-4 mb-8">
        <h5 class="text-sm font-semibold mb-2.5">
          ¿Necesitas ayuda?
        </h5>
        <p class="text-sm mb-2">
          Contactate con nuestros asesores
        </p>
        <p class="text-sm font-semibold">
          0800-000-0000
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const res = await $axios.$get(`https://turismo.catam.ar/api/v1/reserva/${params.id}`)
    const data = res.data
    return { data }
  },
  data () {
    return {
      numAdults: 1,
      numKids: 0,
      alojamiento: null
    }
  },
  computed: {
    getWappFromAlojamiento () {
      return this.alojamiento ? this.alojamiento.attributes.telefonos.find(phone => phone.type === 'wsp') : null
    },
    getPhoneFromAlojamiento () {
      return this.alojamiento ? this.alojamiento.attributes.telefonos.find(phone => phone.type === 'fijo') : null
    }
  },
  head: {
    title: 'Mi reserva'
  },
  created () {
    this.getAlojamiento()
    this.countAdultsAndKids()
  },
  methods: {
    formatDate (str) {
      const date = new Date(str)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear().toString()
      return `${day}/${month}/${year}`
    },
    getAlojamiento () {
      this.$axios.$get(`https://turismo.catam.ar/api/v1/alojamiento/${this.data.attributes.producto_turistico.objeto.id}`)
        .then((res) => {
          this.alojamiento = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    countAdultsAndKids () {
      let numAdults = 0
      let numKids = 0

      for (let i = 0; i < this.data.attributes.acompaniante.length; i++) {
        if (this.data.attributes.acompaniante[i].is_children) {
          numKids++
        } else {
          numAdults++
        }
      }

      this.numAdults = numAdults
      this.numKids = numKids
    }
  }
}
</script>

<style scoped>
section {
  height: calc(100vh - 75px);
}
</style>
