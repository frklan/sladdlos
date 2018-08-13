<template>

  <div>
    <h1>Trådfi Bulbs</h1>
    
    <table id="bulbs">
      <tr v-for="bulb in bulbs" align="left" >
        <th>{{bulb.name}} </th>
        <th height="30rem" width="150rem">{{bulb.id}}</th>
        <th><span v-if='bulb.light.onOff===true'>On</span><span v-else>Off</span></th>
        <th>
        <button class="alt" @click="toggleBulb(bulb.id)">toggle</button>
         </th>
      </tr>
    </table> 
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'tradfri-list',
  data: function () {
    return { };
  },
  computed: {
    bulbs: function() {
      return this.$store.state.Gateway.lightbulbs;
    },
  },
  methods: {
    toggleBulb(bulbId) {
      this.$store.dispatch('toggleBulb', bulbId);
      this.$store.dispatch('update');
    }
  }

}
</script>

<style scoped>
  th {
    padding-right : 2em;
    line-height: 1.5em;
  }



</style>
