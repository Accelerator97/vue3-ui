<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component = "SwitchDemo1"/>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from "./SwitchDemo1.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";
export default {
  components: {
    Demo
  },
  setup() {
    const bool = ref(false);
    return {
      SwitchDemo1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
