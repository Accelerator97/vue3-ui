<template>
  <div class="gulu-carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="gulu-carousel-inner">
      <CarouselDot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      />
      <CarouselDirector dir="prev"  @dirClick="dirClick" :hasDirector="hasDirector"/>
      <CarouselDirector dir="next"  @dirClick="dirClick" :hasDirector="hasDirector"/>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from "vue";
import CarouselDot from "./CarouselDot.vue";
import CarouselDirector from "./CarouselDirector.vue";
export default {
  name: "Carousel",
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor: String,
  },
  components: { CarouselDot,CarouselDirector },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0,
    });
    let t = null; //定时器的id
    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex("next");
        }, props.duration);
      }
    };
    const setIndex = (dir) => {
      switch (dir) {
        case "next":
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0;
          }
          break;
        case "prev":
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1;
          }
          break;
        default:
          break;
      }
    };
    const dotClick = (index) => {
      state.currentIndex = index;
    };
    const mouseEnter =() =>{
        _clearIntervalFn()
    }
    const mouseLeave =() =>{
        autoPlay()
    }
    function _clearIntervalFn(){
        clearInterval(t)
        t = null
    }
    const dirClick = (dir)=>{
        setIndex(dir) 
    }
    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length as any;
      autoPlay();
    });
    onBeforeUnmount(() => {
      clearInterval;
      t = null;
    });
    return {
      ...toRefs(state), //调用toRef 响应式数据和 原始数据都会发生改变，Dom不变
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick
    };
  },
};
</script>

<style lang="scss" scoped>
.gulu-carousel {
  width: 100%;
  height: 100%;
  .gulu-carousel-inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>