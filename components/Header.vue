<template>
  <header class="Header mt-7 md:mt-0">
    <div class="bg-[#ddd] h-[480px] hidden md:block">
      <img src="" alt=""/>
    </div>

    <div class="container mx-auto">
      <div class="Search bg-[#F1EDE3] py-7 md:py-12 px-4 md:px-11 relative md:top-[-150px] rounded-3xl">
        <h3 class="text-[#226B2F] text-xl md:text-2xl text-center font-bold mb-4">
          ¿Estás buscando alojamiento?
        </h3>
        <p class="text-center mb-7">
          Encontrá la mejor opción para hospedarte en <b>Posadas</b>
        </p>

        <form @submit.prevent="handleSubmit" class="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="hidden md:block">
            <input
              placeholder="¿A dónde quieres viajar?"
              class="py-4 px-4 rounded-[10px] block w-full outline-0"
            />
          </div>

          <div>
            <input
              placeholder="Fecha de entrada"
              class="py-4 px-4 rounded-[10px] block w-full outline-0"
            />
          </div>

          <div>
            <input
              placeholder="Fecha de salida"
              class="py-4 px-4 rounded-[10px] block w-full outline-0"
            />
          </div>

          <div class="col-span-2 md:col-span-1">
            <input
              placeholder="Pasajeros"
              class="py-4 px-4 rounded-[10px] block w-full outline-0"
            />
          </div>

          <div class="col-span-2 md:col-span-4 md:flex justify-end md:mt-4">
            <button type="submit" class="text-white font-bold bg-[#35BC75] rounded-[10px] w-full md:w-[165px] py-4 md:py-2 mb-7 md:mb-0">
              Buscar
            </button>

            <p class="text-center text-sm md:hidden">
              Al buscar aceptas <b>términos y condiciones</b>.
            </p>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleSubmit () {
      console.log('Handle submit event triggered')
    }
  }
}
</script>
