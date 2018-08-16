<template>
  <div v-if="isVisible" class="loader">
    <dot-loader class="loader-spinner" color="#f8f8f8" ></dot-loader> <br>
    <p class="loader-text">{{ message }}</p>
  </div>
</template>

<script>
import DotLoader from 'vue-spinner/src/DotLoader.vue'

export default {

  name: 'loader',
  components: { DotLoader},
  data: function() {
    return { 
      message: '',
    }
  },
  computed: {
    isVisible: function() {
      return !(this.$store.state.Sladdlos.status === 'online');
    }
  },
  watch: {
    isVisible: function(val) {
      console.log(this.$store.state.Sladdlos.status);
      switch(this.$store.state.Sladdlos.status) {
        case 'offline': {
          this.message = 'Hold your horses!';
          break;
        }
        case 'network error': {
          this.message = 'The API not responding, is the API setting correct?';
          break;
        }
        case 'authorization error': {
          this.message = 'You are not trusted by the API. Check Token setting.';
          break;
        }
        default: {
          this.message = 'Strange things happend';
          break;
        }
      }
    }
  }

}
</script>

<style scoped>

.loader {
    margin-left: auto;
    margin-right: auto;
    margin-top: 35%;
    z-index: -1000;
    height: 100%;
    opacity: 0.5;
  }

  .loader .loader-spinner {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    flex-basis: 50%; 
  }

  .loader .loader-text{
    text-align: center;
    margin-top: 1em;
    font-size: 0.85em;
  }

</style>
