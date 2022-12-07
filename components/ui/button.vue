<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="type"
    class="text-sm font-semibold py-3 rounded-[10px] block w-full disabled:opacity-70 disabled:cursor-not-allowed"
    :class="[
      { 'bg-primary text-white ': primary },
      { 'bg-[#F5F7FB] text-[#5C5C5C]': secondary },
      { 'bg-success text-white ': success },
      { 'bg-error text-white ': error },
      { 'uppercase': uppercase }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
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
    },
    uppercase: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  computed: {
    primary () {
      return this.color === 'primary'
    },
    secondary () {
      return this.color === 'secondary'
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
