<demo>
示例二：隐藏dot和director
</demo>

<template>
  <div class="container">
    <Carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="false"
      :hasDirector="false"
    >
      <CarouselItem v-for="(item, index) of carData" :key="index">
          <img :src="item" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
import Carousel from "../../lib/Carousel/Carousel.vue";
import CarouselItem from "../../lib/Carousel/CarouselItem.vue";
import carData from "../../data/carousel.js";
export default {
  components: {
    Carousel,
    CarouselItem,
  },
  setup() {
    return { carData};
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 500px;
  .gulu-carousel {
    .gulu-carouselItem {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>