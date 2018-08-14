import axios from 'axios';
import router from '../../router'

const state = {
  gateway: {
    status: 'unkown',
    name: '',
    host: '',
  },
  lightbulbs: [],
  showGatewayInfo: false,
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
  /* TODO: do proper error checking, for now assume all errors  *
     != 'Network Error' are related to accessing the api..      */
  console.log(error);
  if(error == 'Error: Network Error') {
    commit('SET_GATEWAY', {status: 'Network Error'});  
  } else {
    commit('SET_GATEWAY', {status: 'api error'});
  }
}

export default {
  state,
  mutations,
  actions
}
