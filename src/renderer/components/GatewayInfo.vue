<template>
  <div id="wrapper">
    <h1>Gateway Status</h1>

    <table id="bulbs">
      <tr align="left">
        <th>Status</th>
        <th>{{gateway.status}} </th>
      </tr>
      <tr align="left">
        <th>Name</th>
        <th>{{gateway.name}}</th>
      </tr>
      <tr align="left">
        <th>Host</th>
        <th>{{gateway.host}} </th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'gateway-info',
  components: {},
  data: function () {
    return { }
  },
  computed: {
    gateway: function() {
      return this.$store.state.Gateway.gateway;
    },
  }
}
</script>

<style scoped>
  th {
    padding-right : 2em;
    line-height: 1.5em;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
