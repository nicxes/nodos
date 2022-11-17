<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="type"
    class="text-white text-sm font-semibold uppercase py-3 rounded-[10px] block w-full mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
    :class="[
      { 'bg-primary': primary },
      { 'bg-success': success },
      { 'bg-error': error }
    ]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
      required: false
    },
    href: {
      type: String,
      default: null,
      required: false
    },
    color: {
      type: String,
      default: 'primary',
      required: false
    },
    type: {
      type: String,
      default: 'button',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    primary () {
      return this.color === 'primary'
    },
    success () {
      return this.color === 'success'
    },
    error () {
      return this.color === 'error'
    }
  }
}
</script>
