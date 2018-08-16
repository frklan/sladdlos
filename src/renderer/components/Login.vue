<template>

  <div v-if="isVisible" id="myModal" class="modal">
    <div class="modal-content">
      <p v-if="this.$store.state.Gateway.gateway.status === 'Network Error'">Can't connect with the API, please check the JWT access token and API URL</p>
      <p v-else>Current settings</p>        
      <br>
      <p>API URL: <input v-model="apiUrl" placeholder="https://example.com/api/v1"></p>
      <p>JWT Token: <input v-model="jwtToken" placeholder="Enter a JWT token"></p>
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
      newApiUrl : '',
      newJwtToken: '',
      isApiDirty: false,
      isTokenDirty: false,
    }
  },
  computed: {
    isVisible: function() {
      return this.$store.state.Gateway.showSettings;
    },
    apiUrl: {
      get: function() {
        if(this.isApiDirty === false){
          return localStorage.apiUrl || '';
        }
        return this.newApiUrl;
      },
      set: function(val) {
        this.newApiUrl = val;
        this.isApiDirty = true;
      }
    },
    jwtToken: {
      get: function() {
        if(this.isTokenDirty === false) {
          return localStorage.jwtToken || '';
        } 
        return this.newJwtToken;
      },
      set: function(val) {
        this.newJwtToken = val;
        this.isTokenDirty = true;
      }
    },
  },
  whatch:{
  },
  methods: {
    close: function() {
      if(this.isApiDirty === true){
        localStorage.apiUrl = this.newApiUrl;
        this.$store.dispatch('update');
        this.isApiDirty = false;
      }
      if(this.isTokenDirty === true){        
        localStorage.jwtToken = this.newJwtToken;
        this.$store.dispatch('update');
        this.isTokenDirty = false;
      }
      this.$store.commit('SET_SHOW_SETTINGS', false);
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
