const state = {
  status: 'online',
  showGatewayInfo: false,
  showSettings: false,
}

const mutations = {
  SET_STATUS (state, status) {
    state.status = status || 'offline';
  },

  SET_SHOW_GATEWAY_STATUS(state, isVisible) {
    state.showGatewayInfo = isVisible;
  },
  SET_SHOW_SETTINGS(state, isVisible) {
    state.showSettings = isVisible;
  },
}

const actions = {
  
}

export default {
  state,
  mutations,
  actions
}
