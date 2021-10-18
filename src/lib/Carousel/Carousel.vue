<template>
  <div class="carousel">
    <div class="inner">
      <CarouselDot
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      />
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
  components: { CarouselDot },
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
          setIndex("prev");
        }, props.duration);
      }
    };
    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length as any;
      autoPlay();
    });
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
    const dotClick=(index)=>{
        state.currentIndex = index
    }
    onBeforeUnmount(() => {
      clearInterval;
      t = null;
    });
    return {
      ...toRefs(state), //调用toRef 响应式数据和 原始数据都会发生改变，Dom不变
      dotClick
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>