<template>
  <nav class="Navbar relative font-display py-4">
    <div class="container-fluid mx-auto">
      <div class="flex justify-between items-center h-[43px]">
        <div v-if="$route.name !== 'alojamientos' && $route.name !== 'alojamientos-id' && $route.name !== 'reservas-resumen'">
          <NuxtLink to="/">
            <img src="~assets/images/logo.png" alt="Senti Posadas" class="h-[50px]" />
          </NuxtLink>
        </div>

        <div v-else>
          <button @click="goBack" class="flex items-center text-xs text-[#919191]">
            <svg width="7" height="12" viewBox="0 0 7 12" class="mr-2">
              <path d="M5.37226 11.2509C5.26021 11.2513 5.1495 11.2266 5.04827 11.1786C4.94703 11.1305 4.85785 11.0605 4.78726 10.9734L1.16476 6.47344C1.05445 6.33924 0.994141 6.17091 0.994141 5.99719C0.994141 5.82347 1.05445 5.65514 1.16476 5.52094L4.91476 1.02094C5.04206 0.867777 5.22499 0.771458 5.42331 0.753174C5.62163 0.734889 5.81909 0.796135 5.97226 0.923439C6.12542 1.05074 6.22174 1.23368 6.24002 1.432C6.25831 1.63032 6.19706 1.82778 6.06976 1.98094L2.71726 6.00094L5.95726 10.0209C6.04897 10.131 6.10723 10.2651 6.12514 10.4072C6.14305 10.5494 6.11986 10.6937 6.05832 10.8231C5.99677 10.9525 5.89945 11.0616 5.77787 11.1374C5.65629 11.2132 5.51553 11.2526 5.37226 11.2509Z" fill="#919191"/>
            </svg>

            Volver atrás
          </button>
        </div>

        <ul class="flex items-center gap-6 hidden md:flex">
          <li>
            <NuxtLink to="/" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" :class="$route.name === 'index' ? 'text-[#35BC75]' : null">
              Inicio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/reservas" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
              Mi reserva
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacidad" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
              Política de Privacidad
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/terminos" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
              Términos y condiciones
            </NuxtLink>
          </li>
        </ul>

        <div class="md:hidden">
          <div v-if="$route.name !== 'alojamientos' && $route.name !== 'alojamientos-id' && $route.name !== 'reservas-resumen'">
            <button @click="toggleMenu">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.5C3 5.36739 3.05268 5.24021 3.14645 5.14645C3.24021 5.05268 3.36739 5 3.5 5H20.5C20.6326 5 20.7598 5.05268 20.8536 5.14645C20.9473 5.24021 21 5.36739 21 5.5C21 5.63261 20.9473 5.75979 20.8536 5.85355C20.7598 5.94732 20.6326 6 20.5 6H3.5C3.36739 6 3.24021 5.94732 3.14645 5.85355C3.05268 5.75979 3 5.63261 3 5.5ZM3 12C3 11.8674 3.05268 11.7402 3.14645 11.6464C3.24021 11.5527 3.36739 11.5 3.5 11.5H20.5C20.6326 11.5 20.7598 11.5527 20.8536 11.6464C20.9473 11.7402 21 11.8674 21 12C21 12.1326 20.9473 12.2598 20.8536 12.3536C20.7598 12.4473 20.6326 12.5 20.5 12.5H3.5C3.36739 12.5 3.24021 12.4473 3.14645 12.3536C3.05268 12.2598 3 12.1326 3 12ZM3 18.5C3 18.3674 3.05268 18.2402 3.14645 18.1464C3.24021 18.0527 3.36739 18 3.5 18H20.5C20.6326 18 20.7598 18.0527 20.8536 18.1464C20.9473 18.2402 21 18.3674 21 18.5C21 18.6326 20.9473 18.7598 20.8536 18.8536C20.7598 18.9473 20.6326 19 20.5 19H3.5C3.36739 19 3.24021 18.9473 3.14645 18.8536C3.05268 18.7598 3 18.6326 3 18.5Z" fill="#226B2F"/>
              </svg>
            </button>
          </div>

          <div v-else>
            <h6 class="text-sm">
              Servicios en <b>Posadas</b>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMenu () {
      this.$store.commit('toggle')
    },
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.Navbar {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
}
</style>
