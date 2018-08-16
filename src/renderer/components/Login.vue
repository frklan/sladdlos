<template>

  <div v-if="isVisible" id="myModal" class="modal">
    <div class="modal-content">
      <p v-if="this.$store.state.Gateway.gateway.status === 'Network Error'">Can't connect with the API, please check the JWT access token and API URL</p>
      <p v-else>Current settings</p>        
      <br>
      <p>API URL: <input v-model="apiUrl" :placeholder="apiUrlPlaceholder"></p>
      <p>JWT Token: <input v-model="jwtToken" :placeholder="jwtTokenPlaceholder"></p>
      <button class="alt" @click="close()">close</button>
    </div>
  </div>
</template>

<script>
import url from 'url';

export default {
  name: 'login',
  data: function() {
    return {
    }
  },
  computed: {
    apiUrlPlaceholder: function() {
      return localStorage.apiUrl || 'https://example.com/api/v1';
    },
    apiUrl: {
      get: function() {
        return localStorage.apiUrl || '';
      },
      set: function(val) {
        let url = {};
        try { 
          url = new URL(val);
        } catch (e) {
          console.log(e);
          return;
        }
        localStorage.apiUrl = url;
        this.$store.dispatch('update');
      },
    },
    isVisible: function() {
      return this.$store.state.Gateway.showSettings;
    },
    jwtTokenPlaceholder: function() {
      return localStorage.jwtToken || 'Enter a JWT token';
    },
    jwtToken: {
      get: function() {
      return localStorage.jwtToken || '';
      },
      set: function(val) {
        localStorage.jwtToken = val;
        this.$store.dispatch('update');
      }
    },
  },
  methods: {
    close: function() {
      this.$store.commit('SET_SHOW_SETTINGS', false);
      this.$store.dispatch('update');
    },
  }
}
</script>

<style>
  input {
    width: 100%;
    font-size: 0.9em;
    margin-bottom: 1em;
  }
</style>
