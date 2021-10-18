<template>
  <h1>Selector组件示例</h1>
  <div>
    <Demo :component="SelectorDemo1" />
  </div>
</template> 

<script lang="ts">
import SelectorDemo1 from "./SelectorDemo1.vue";
import Demo from "../Demo.vue";

export default {
  components: { Demo },
  setup() {
    return { SelectorDemo1};
  },
};
</script>

<style lang="scss" scoped>
</style>