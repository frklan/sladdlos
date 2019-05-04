import axios from 'axios';

const state = {
  gateway: {
    status: 'unkown',
    name: '',
    host: '',
  },
  lightbulbs: [],
  showGatewayInfo: false,
  showSettings: false,
}

const mutations = {
  SET_GATEWAY (state, gateway) {
    state.gateway.status = gateway.status || state.gateway.status;
    state.gateway.name = gateway.name || state.gateway.name;
    state.gateway.host = gateway.host || state.gateway.host;
  },
  SET_LIGHTBULBS(state, lightbulbs) {
    state.lightbulbs = lightbulbs;
  },
  SET_SHOW_GATEWAY_STATUS(state, isVisible) {
    state.showGatewayInfo = isVisible;
  },
  SET_SHOW_SETTINGS(state, isVisible) {
    state.showSettings = isVisible;
  },
}

const actions = {
  update({ commit }) {
    const config = {headers: { 'token': getToken() } };

    axios.get(`${getBaseUrl()}/bulbs`, config)
    .then((response) => {  
      const gateway = response.data.gateway;
      const lightbulbs = response.data.lightbulbs;
      commit('SET_GATEWAY', gateway);
      commit('SET_LIGHTBULBS', lightbulbs);
      commit('SET_STATUS', 'online');
    })
    .catch((error) => checkError(error, commit));
  },
  toggleBulb({commit, dispatch}, bulbId) {
    const config = {headers: { 'token': getToken() } };
    const url = `${getBaseUrl()}/bulb/${bulbId}/toggle`;
    
    axios.put(url, '', config)
    .then(() => {dispatch('update')})
    .catch((error) => checkError(error, commit));
  }
}
function getToken() {
  return localStorage.jwtToken;
}

function getBaseUrl() {
  return localStorage.apiUrl;
}

function checkError(error, commit) {
  if(error == 'Error: Network Error') {
    commit('SET_STATUS', 'network error');  
  } else if(error == 'Error: Request failed with status code 401') {
    commit('SET_STATUS', 'authorization error');  
  } else {
    commit('SET_STATUS', 'api error');
  } 
}

export default {
  state,
  mutations,
  actions
}
