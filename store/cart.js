export const state = () => ({
  cart: {
    start: null,
    end: null,
    passengers: {
      adults: 1,
      kids: 0
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
  },
  setDates (state, data) {
    state.cart.start = data.start
    state.cart.end = data.end
  }
}
