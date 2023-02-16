export const state = () => ({
  cart: {
    date_entry: null,
    date_exit: null,
    passengers: null
  }
})

export const mutations = {
  setCart (state, data) {
    state.cart = data
  }
}
