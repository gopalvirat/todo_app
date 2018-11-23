<template>
  <div id="app">
    <NavBar msg="Todo app"></NavBar>
    <BreadCrumb/>
    <transition  name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import BreadCrumb from './components/BreadCrumb'
  export default {
    name: 'App',
    components: {
      NavBar,
      BreadCrumb
    }
  }
</script>