<template>
  <main class="h-screen flex items-center justify-center transition duration-150 ease-in-out" :class="form.success ? 'bg-success' : 'bg-transparent'">
    <div class="container mx-auto flex justify-center">

      <form
        v-if="!form.success"
        @submit.prevent="recovery"
        class="bg-neutral-50 rounded-3xl max-w-[461px] py-10 px-16 transition duration-150 ease-in-out"
        :class="form.success ? 'opacity-0' : 'opacity-100'"
      >
        <div class="flex justify-center mb-6">
          <Logo />
        </div>

        <p class="text-sm font-display text-[#646464] text-center mb-6">
          Coloca tu correo electrónico para recuperar tu contraseña. Recibirás un correro para blanquearla.
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

        <v-button type="submit" :disabled="form.loading">
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
      </form>

      <div v-else class="flex justify-center items-center flex-col">
        <img src="~assets/images/icons/success.svg" class="mb-7"/>
        <h1 class="font-body text-3xl text-white mb-4 font-semibold mb-4">¡Listo!</h1>
        <p class="font-display text-lg text-white max-w-[286px] text-center">Enviamos un mail para que cambies tu contraseña.</p>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Recuperar Contraseña'
  },
  data () {
    return {
      form: {
        error: false,
        success: false,
        loading: false,
        hidden: false,
        data: {
          email: ''
        }
      }
    }
  },
  methods: {
    recovery () {
      if (this.form.data.email) {
        this.form.loading = true
        console.log('loading')
        setTimeout(() => {
          this.form.success = true
        }, 3000)
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
