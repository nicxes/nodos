<template>
  <nav class="Navbar py-4">
    <div class="container-fluid mx-auto">
      <div class="flex justify-between items-center">
        <div>
          <NuxtLink to="/">
            <img src="~assets/images/logo.png" alt="Senti Posadas" class="h-[60px]" />
          </NuxtLink>
        </div>

        <ul class="flex items-center gap-6 hidden md:flex">
          <li>
            <NuxtLink to="/" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
              Inicio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/mi-reserva" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
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
      </div>
    </div>
  </nav>
</template>

<style scoped>
.Navbar {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
}
</style>
