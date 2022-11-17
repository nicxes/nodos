<template>
  <img
    src="~assets/images/logo.png"
    alt="Senti Posadas"
    :height="height"
    :width="width"
  />
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      required: false,
      default: 'auto'
    },
    width: {
      type: String,
      required: false,
      default: 'auto'
    }
  }
}
</script>
