<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide, onMounted } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 500 ? true : false);
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false; //在移动端中，每次切换的时候关闭侧边栏
      }
    });
    provide("asideVisible", asideVisible);
  },
};
</script>


<style lang="scss" scoped>
</style>
