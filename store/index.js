export const state = () => ({
  isMainMenuOpen: false
})

export const mutations = {
  toggle (state) {
    state.isMainMenuOpen = !state.isMainMenuOpen
  }
}
