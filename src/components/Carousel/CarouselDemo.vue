<template>
  <h1>Carousel组件示例</h1>
  <div>
    <Demo :component="CarouselDemo1" />
    <Demo :component="CarouselDemo2" />
  </div>
</template> 

<script lang="ts">
import CarouselDemo1 from "./CarouselDemo1.vue";
import CarouselDemo2 from "./CarouselDemo2.vue";
import Demo from "../Demo.vue";

export default {
  components: { Demo },
  setup() {
    return { CarouselDemo1, CarouselDemo2};
  },
};
</script>