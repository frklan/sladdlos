<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'sladdlos',
    data: function() {
      return {
        interval: {},
      }
    },
  
    created: function() {
      this.$store.dispatch('update');
      
      this.interval = setInterval(() => {
        this.$store.dispatch('update');
      }, 5000); 
    },

    beforeDestroy: function(){
      clearInterval(this.interval);
    },
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    margin: 0.5em;
    font-family: 'Source Code Pro'; 
    font-weight: 75%;
    font-size: 1.2em;
    background: #272727;
    color: #f8f8f8;
  }

  button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.5em 1.5em;
    border-radius: 0.75em;
    display: inline-block;
    color: #f8f8f8;
    background-color: #272727;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1.1px solid #f8f8f8 /*#4fc08d*/;
  }

  button.alt {
    background-color: transparent;
  }

  button:active {
    background-color: white;/*#42b983;*/
    color: #272727;
    border: 1.1px solid #f8f8f8;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    color: #f8f8f8;
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
}

  /* Modal Content/Box */
  .modal-content {
      background-color: #272727;
      margin: 15% auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%; /* Could be more or less, depending on screen size */
  }


</style>
