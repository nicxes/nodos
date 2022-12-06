<template>
  <h1 class="font-input text-3xl font-semibold flex items-baseline">
    {{ title }}
    <span v-if="subtitle" class="ml-2">
      |
    </span>
    <span v-if="subtitle" class="text-xl font-normal ml-1">
      {{ subtitle }}
    </span>
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
