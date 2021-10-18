<template>
  <transition>
    <div class="carouselItem" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, toRefs, watch } from "vue";
export default {
  name: "CarItem",
  setup() {
    const instance = getCurrentInstance(); //获取当前实例
    // console.log(instance);

    const state = reactive({
      //从实例的vnode上拿到key，并且设置为响应式
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex,
    });
    //watch接受两个回调，第一个回调返回要监听的对象，第二个回调是数据改变时的回调函数, 有2个参数, 第一个是改变后的数据, 第二个是改变前的数据;
    watch(
      () => {
        return instance.parent.ctx.currentIndex;
      },
      (value) => {
        state.currentIndex = value;
      }
    );

    return { ...toRefs(state) };
  },
};
</script>

<style lang="scss" scoped>
.carouselItem {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.v-enter-active,
.v-leave-active{
    transition: all .3s linear;
}
.v-enter-active{
    transform: translateX(100%);
}
.v-enter-to{
    transform: translateX(0);
}
.v-leave-active{
    transform: translateX(0%);
}
.v-leave-to{
    transform: translateX(-100%);
}
img {
  width: 100%;
}
</style>