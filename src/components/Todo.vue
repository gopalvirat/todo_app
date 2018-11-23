<template>
  <div class="col-lg-12">
    <div class="">
       <router-link to="/todo/add">Add New </router-link>
      <input type="text" class="form-control">
    </div>
  </div>
</template>

<script>

import store from '../store/store.js';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  compupted:{
    count(){
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
