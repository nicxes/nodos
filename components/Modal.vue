<template>
  <div class="fixed top-0 left-0 ring-0 bottom-0 w-full z-40 flex items-center justify-center">
    <div class="absolute bg-black/20 left-0 right-0 bottom-0 top-0 w-full"/>

    <div class="relative bg-white w-full max-w-[460px] rounded-[10px] shadow z-50 pt-10 pb-6 px-10">
      <div class="flex flex-col justify-center font-body">
        <h3 class="text-[#646464] text-xl text-center font-bold mb-3">
          Estás por inhabilitar una empresa
        </h3>
        <p class="text-center mb-12">
          ¿Seguro que deseas continuar?
        </p>
        <div class="flex items-center gap-x-6">
          <v-button color="secondary" :uppercase="false">
            Cancelar
          </v-button>

          <v-button :uppercase="false">
            Aceptar
          </v-button>
        </div>
      </div>
    </div>
  </div>
</template>
