<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-zixingche"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc/intro">文档</router-link>
    </ul>
    <svg v-if="toggleAisdeButtonVisible" class="toggleAsideButton" @click="toggleAside">
       <use xlink:href="#icon-caozuo-caidan"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, onMounted, Ref } from "vue";
export default {
  props:{
    toggleAisdeButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    }
    return { toggleAside};
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  background: white;
  box-shadow: 5px 0 5px rgba(51 51 51/10%);
  display: flex;
  padding: 16px;
  position: fixed; //固定在浏览器顶部
  top: 0;//固定在浏览器顶部
  left: 0;//固定在浏览器顶部
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto; //靠左显示
    padding-left:10px;
    svg{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    padding-right:10px;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAsideButton {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) { //支持响应式
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAsideButton {
      display: inline-block;
    }
  }
}
</style>