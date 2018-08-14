<template>
  <div id="wrapper">

    <div class="main">
      <tradfri-list></tradfri-list>
    </div>
    
    <div class="footer">
      <font-awesome-icon icon="heartbeat" v-bind:class="heartbeatColor" />
      <font-awesome-icon icon="digital-tachograph" @click="showGatewayInfo()"/>
    </div>

    <!-- modal dialogs..-->
    <gateway-info/>
    <login v-if="gateway.status==='api error' || gateway.status==='Network Error'"></login>
  </div>
</template>

<script>
  import GatewayInfo from './GatewayInfo';
  import TradfriList from './TradfriList';
  import OfflineWarning from './OfflineWarning';
  import Login from './Login';

  export default {
    name: 'landing-page',
    components: { GatewayInfo, TradfriList, OfflineWarning, Login},
    data: function() {
      return { 
      }
    },
    computed: {
      gateway: function() {
        return this.$store.state.Gateway.gateway;
      },
       heartbeatColor: function() {
        return this.$store.state.Gateway.gateway.status === 'online' ? 'heartbeat-green' : 'heartbeat-red';
      }
    },
    methods: {
      showGatewayInfo: function() {
        this.$store.commit('SET_SHOW_GATEWAY_STATUS', true);
      }
    }
  }
</script>

<style scoped>
  .left-side {
    display: flex;
    flex-direction: column;
    max-width: 45%; 
  }

  .right-side {
    flex:1;
    min-width:20%;
    /*max-width: 45%; */
    margin-left: 2.5em;
  }

  .footer {
    position: fixed;
    z-index: 100; 
    bottom: 0;
    left: 0;
    padding: 0.2em;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    height: 2.5em;
    vertical-align: middle;
    text-align: right;
    line-height: 2.0em;
    background: #272727;
  }

   .heartbeat-green {
   color:forestgreen; 
  } 

  .heartbeat-red {
   color:red; 
  } 
  
</style>
