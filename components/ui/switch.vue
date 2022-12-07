<template>
  <div>
    <label :for="name" class="relative inline-flex items-center cursor-pointer" :class="{'active': value}">
      <slot name="label"></slot>
    </label>
    <input
      type="checkbox"
      v-model="value"
      :id="id"
      :name="name"
      class="hidden"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
      default: null
    },
    name: {
      type: String,
      require: true,
      default: null
    }
  },
  data () {
    return {
      value: false
    }
  },
  methods: {
    onInput () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style scoped>
  label:after {
    position: relative;
    content: '';
    height: 23px;
    width: 50px;
    background: #efefef;
    border-radius: 100px;
    display: inline-block;
    margin-left: 10px;
    transition: all 150ms ease-in-out;
  }
  label.active:after {
    background: #35BC75;
  }
  label:before {
    position: absolute;
    right: 5px;
    z-index: 2;
    content: '';
    height: 14px;
    width: 14px;
    background: #fff;
    border-radius: 100px;
    display: inline-block;
    transition: all 150ms ease-in-out;
    transform: translateX(-25px);
  }
  label.active:before {
    transform: translateX(0px);
  }
</style>
