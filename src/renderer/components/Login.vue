<template>

  <div id="myModal" class="modal">
    <div class="modal-content">
      <p>Please provide a API URL and a valid JWT token to access the Trådfri API</p><br>
      <p>API URL: <input v-model="apiUrl" :placeholder="apiUrlPlaceholder"></p>
      <p>JWT Token: <input v-model="jwtToken" :placeholder="jwtTokenPlaceholder"></p>
      <!--<button class="alt" @click="login()">login</button>-->
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
    // login: function() {
    //     localStorage.jwtToken = this.jwtToken;
    //     localStorage.apiUrl = this.apiUrl;
    //     this.$store.dispatch('update');
    //     console.log(this.apiUrl);
    // },
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
