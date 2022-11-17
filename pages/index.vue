<template>
  <section class="h-screen flex items-center justify-center">
    <div class="container mx-auto flex justify-center">

      <form
        @submit.prevent="login"
        class="bg-neutral-50 rounded-3xl max-w-[461px] py-10 px-16"
      >
        <div class="flex justify-center mb-6">
          <Logo />
        </div>

        <p class="font-display text-[#646464] text-center mb-6">
          Te damos la bienvenida a [producto], coloca tus datos para ingresar
        </p>

        <label for="email" class="font-input font-medium block mb-4">
          Usuario
        </label>

        <v-input
          id="email"
          v-model="form.data.email"
          type="email"
          placeholder="Coloca aquí tu correo electrónico"
          class="mb-6"
          :required="true"
          :disabled="form.loading"
        />

        <label for="password" class="font-input font-medium block mb-4">
          Contraseña
        </label>

        <v-input
          id="password"
          v-model="form.data.password"
          type="password"
          placeholder="Coloca aquí tu contraseña"
          class="mb-6"
          :required="true"
          :disabled="form.loading"
        />

        <v-button
          type="submit"
          :disabled="form.loading"
        >
          <span v-if="form.loading" class="flex justify-center">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>

          <span v-else>
            Ingresar
          </span>
        </v-button>

        <p class="text-center">
          <NuxtLink to="/" class="text-sm text-[#565656]">
            ¿Olvidaste tu contraseña? Te ayudamos.
          </NuxtLink>
        </p>
      </form>

    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Ingresar'
  },
  data () {
    return {
      form: {
        loading: false,
        data: {
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    login () {
      if (this.form.data.email || this.form.data.password) {
        this.form.loading = true
        console.log('loading')
      }
    }
  }
}
</script>

<style scoped>
  form {
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.05);
  }
</style>
