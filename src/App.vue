<template>
  <div>导航栏 | <router-link to="/" >Ben</router-link> | <router-link to="/xxx" >Ben2</router-link>
  </div>
  <hr>
  <router-view></router-view>
</template>

<script>
import Ben from './components/Ben.vue'

export default {
  name: 'App',
  components: {
    Ben
  }
}
</script>
