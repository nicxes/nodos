<template>
  <div class="Search relative">
    <input
      v-model="filters.search"
      :placeholder="placeholder"
      type="search"
      class="text-[#5C5C5C] font-body font-semibold bg-white rounded-[10px] py-2.5 pl-[50px] pr-5 focus:outline-0"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
      default: null
    }
  },
  data () {
    return {
      filters: {
        search: ''
      }
    }
  }
}
</script>

<style scoped>
.Search::before {
  content: '';
  position: absolute;
  height: 20px;
  width: 20px;
  top: 12px;
  left: 14px;
  background-image: url('~/assets/images/icons/search.svg');
  background-size: cover;
  display: inline-block;
}
.Search input::placeholder {
  color: #5C5C5C;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  opacity: 1; /* Firefox */
}
</style>
