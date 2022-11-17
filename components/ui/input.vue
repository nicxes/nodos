<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    class="bg-white rounded-[10px] px-3 py-[18px] w-full block focus:ring-0 focus:outline-0 disabled:opacity-70 disabled:cursor-not-allowed"
    :required="required"
    :disabled="disabled"
    @input="handleInput"
  >
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
      required: false
    },
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
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
