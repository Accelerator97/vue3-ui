<template>
  <h1>Magnifier组件示例</h1>
  <div>
    <Demo :component="MagnifierDemo1" />
  </div>
</template> 

<script>
import Demo from "../Demo.vue";
import MagnifierDemo1 from './MagnifierDemo1.vue'
export default {
    components: { Demo },
    setup() {
    return { MagnifierDemo1};
  },
};
</script>

<style lang="scss" scoped>
</style>