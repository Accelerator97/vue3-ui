<template>
  <h1>Carousel组件示例</h1>
  <div>
    <Demo :component="CarouselDemo1" />
  </div>
</template> 

<script lang="ts">
import CarouselDemo1 from "./CarouselDemo1.vue";
import Demo from "../Demo.vue";

export default {
  components: { Demo },
  setup() {
    return { CarouselDemo1};
  },
};
</script>