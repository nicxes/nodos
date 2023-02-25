export const state = () => ({
  cart: {
    start: null,
    end: null,
    passengers: {
      adults: null,
      kids: null
    }
  }
})

export const getters = {
  getCart: (state) => {
    return state.cart
  },
  getQuantity: (state) => {
    return state.cart.passengers.adults + state.cart.passengers.kids
  }
}

export const mutations = {
  setCart (state, data) {
    state.cart = data
  }
}
