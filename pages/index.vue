<template>
  <section class="h-screen flex items-center justify-center">
    <div class="container mx-auto flex justify-center">

      <form class="bg-neutral-50 rounded-3xl max-w-[461px] py-10 px-16">
        <div class="flex justify-center mb-6">
          <Logo />
        </div>

        <p class="font-display text-[#646464] text-center mb-6">
          Te damos la bienvenida a [producto], coloca tus datos para ingresar
        </p>

        <label class="font-input font-medium block mb-4">
          Usuario
        </label>

        <v-input
          type="email"
          placeholder="Coloca aquí tu correo electrónico"
          class="mb-6"
        />

        <label class="font-input font-medium block mb-4">
          Contraseña
        </label>

        <v-input
          type="password"
          placeholder="Coloca aquí tu contraseña"
          class="mb-6"
        />

        <button
          type="submit"
          class="bg-primary text-white text-sm uppercase py-3 rounded-[10px] block w-full mb-6"
        >
          Ingresar
        </button>

        <p class="text-center">
          <NuxtLink to="/" class="text-sm text-[#565656]">
            ¿Olvidaste tu contraseña? Te ayudamos.
          </NuxtLink>
        </p>
      </form>

    </div>
  </section>
</template>

<style scoped>
  form {
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.05);
  }
</style>
