<template>
  <div class="gulu-imgWrapper" v-magnifier>
    <a
      :href="link"
      class="gulu-magnifierWrapper"
      :target="blank ? '_blank' : ''"
      :style="{ width: maWidth + 'px', height: maHeight + 'px' }"
    >
      <img class="gulu-magnifierImg" :src="imgUrl" :alt="imgAlt" />
    </a>
    <a
      :href="link"
      class="gulu-magnifierImgLink"
      :target="blank ? '_blank' : ''"
    >
      <img class="gulu-magnifierStaticImg" :src="imgUrl" :alt="imgAlt" />
    </a>
  </div>
</template>

<script>
import magnifier from "../../directives/magnifier.ts";
export default {
  name: "Magnifier",
  props: {
    maWidth: {
      type: Number,
      default: 150,
    },
    maHeight: {
      type: Number,
      default: 150,
    },
    blank: {
      type: Boolean,
      default: true,
    },
    link: String,
    imgUrl: String,
    imgAlt: String,
  },
  directives: {
    magnifier,
  },
  setup() {
        // const { ctx } = getCurrentInstance();
        // // vue2.x this.$forceUpdate();
        // ctx.$forceUpdate();
    return {};
  },
};
</script>

<style lang="scss" scoped>
.gulu-imgWrapper {
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;
  width: 100%;
  height: 500px;
  .gulu-magnifierStaticImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > .gulu-magnifierWrapper {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
    border-radius: 50%;
    overflow: hidden;
    cursor: move;
    @media (max-width:500px){
        width:60px!important;
        height:60px!important;
    }
    &.show {
      display: block;
      transform: scale(1.5);
    }
    .gulu-magnifierImg {
      position: absolute;
      height: 500px;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
}
</style>