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
      id: null
    }
  },
  methods: {
    handleSubmit () {
      console.log('test')
    }
  }
}
</script>

<style scoped>
  section {
    height: calc(100vh - 75px);
  }
</style>
