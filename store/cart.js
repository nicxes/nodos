export const state = () => ({
  cart: {
    start: null,
    end: null,
    date: null,
    passengers: {
      adults: 1,
      kids: 0
    }
  },
  type: 'alojamiento'
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
  },
  setType (state, data) {
    state.type = data
  }
}
