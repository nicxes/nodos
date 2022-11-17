<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="bg-white rounded-[10px] px-3 py-[18px] w-full block focus:ring-0 focus:outline-0"
    :required="required"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    required: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>
