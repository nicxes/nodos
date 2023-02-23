export const state = () => ({
  cart: {
    start: null,
    end: null,
    passengers: null
  }
})

export const getters = {
  getCart: (state) => {
    return state.cart
  }
}

export const mutations = {
  setCart (state, data) {
    state.cart = data
  }
}
