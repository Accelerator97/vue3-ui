<template>
  <h1>Button组件示例</h1>
  <div>
    <Demo :component="ButtonDemo1" />
  </div>
  <div>
    <Demo :component="ButtonDemo2" />
  </div>
  <div>
    <Demo :component="ButtonDemo3" />
  </div>
  <div>
    <Demo :component="ButtonDemo4" />
  </div>
</template> 

<script lang="ts">
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo4.vue";
import Demo from "../Demo.vue";
export default {
  components: { Demo },
  setup() {
    return { ButtonDemo1, ButtonDemo2, ButtonDemo3,ButtonDemo4};
  },
};
</script>