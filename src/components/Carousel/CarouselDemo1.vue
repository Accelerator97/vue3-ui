<demo>
基本用法：设置自动播放/轮播时间/初始图片
</demo>

<template>
  <div class="container">
    <Carousel
      :autoplay="true"
      :duration="2000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
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
    // const getImageUrl = (name) => {
    //   return new URL(`/src/assets/images/${name}`, import.meta.url).href;
    // };
    return { carData };
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