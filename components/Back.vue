<template>
  <div>
    <button
      class="text-[#919191] text-sm font-display flex items-center mb-4"
      @click="$router.back()"
    >
      <img src="~assets/images/icons/arrow-back.svg" />
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: 'Volver atrás'
    }
  }
}
</script>
