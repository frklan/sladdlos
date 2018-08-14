<template>
  <div v-if="isVisible"  id="myModal" class="modal">
    <div class="modal-content">
      <gateway-details></gateway-details>
      <br>
      <button class="alt" @click="close()">close</button>
    </div> 
  </div>
</template>

<script>
  import GatewayDetails from './GatewayInfo/GatewayDetails';

  export default {
    name: 'gateway-info',
    props: [],
    components: { GatewayDetails },
    data: function() {
      return { }
    },
    computed: {
      isVisible: function() {
        return this.$store.state.Gateway.showGatewayInfo;
      }
    },
    methods: {
      close() {
        this.$store.commit('SET_SHOW_GATEWAY_STATUS', false);
      }
    }
  }
</script>

<style>

</style>
