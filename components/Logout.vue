<template>
  <div class="px-6 mb-12">
    <button @click="logout" class="font-display text-[20px] text-[#646464] font-semibold text-left">
      Cerrar Sesión
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$router.push('/')
    }
  }
}
</script>
