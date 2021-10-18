<demo>
轮播组件
</demo>

<template>
  <div class="container">
    <Carousel
       :autoplay="true"
       :duration="3000"
       :initial="0"
       :hasDot="true"
       :hasDirector="true"
    >
      <CarouselItem v-for="(item,index) of carData" :key="index">
         <img :src="getImageUrl(item.img_name)" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
import Carousel from "../../lib/Carousel/Carousel.vue";
import CarouselItem from "../../lib/Carousel/CarouselItem.vue";
import carData from '../../data/carousel.js'
export default {
  components: {
    Carousel,
    CarouselItem,
  },
  setup() {
      const getImageUrl = (name) => {
        return new URL(`../../assets/images/${name}`, import.meta.url).href
    }
      return {carData,getImageUrl}
  },
};
</script>

<style lang="scss" scoped>
.container{
  height: 470px;
}
</style>