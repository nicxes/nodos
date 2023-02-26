<template>
  <section>
    <div class="container max-w-[800px] mx-auto h-full flex flex-col justify-between">
      <form class="font-input pt-7">
        <h1 class="text-lg font-bold mb-2">
          Mi reserva
        </h1>
        <p class="text-sm mb-7">
          Para consultar tus reserva coloca tu número de reserva y DNI.
        </p>

        <p v-if="error === 'NOT_FOUND'" class="text-[#B30000] text-sm mb-7">
          No se ha encontrado la reserva consultada
        </p>

        <p v-else-if="error === 'INTERNAL_ERROR'" class="text-[#B30000] text-sm mb-7">
          Ha ocurrido un error interno, inténtelo mas tarde
        </p>

        <form @submit.prevent="handleSubmit">
          <div>
            <input
              v-model="id"
              type="text"
              placeholder="Número de reserva"
              class="text-sm py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] mb-4"
              required
            />
          </div>

          <div>
            <input
              v-model="dni"
              type="number"
              placeholder="DNI"
              class="text-sm py-4 px-4 rounded-[10px] block w-full outline-0 placeholder:text-sm placeholder:text-[#2A2D34] mb-4"
              required
            />
          </div>

          <button type="submit" class="font-display text-sm text-white font-semibold bg-[#35BC75] rounded-[10px] w-full py-4">
            Buscar
          </button>
        </form>
      </form>

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
  head: {
    title: 'Mi Reserva'
  },
  data () {
    return {
      error: null,
      id: null,
      dni: null
    }
  },
  methods: {
    handleSubmit () {
      this.$axios.$get(`https://turismo.catam.ar/api/v1/reserva/?id=${this.id}&titular__documento_identidad=${this.dni}`)
        .then((res) => {
          if (res.data.length > 0) {
            this.$router.push(`/reservas/${res.data[0].id}`)
          } else {
            this.error = 'NOT_FOUND'
          }
        })
        .catch((err) => {
          console.log(err)
          this.error = 'INTERNAL_ERROR'
        })
    }
  }
}
</script>

<style scoped>
  section {
    height: calc(100vh - 75px);
  }
</style>
