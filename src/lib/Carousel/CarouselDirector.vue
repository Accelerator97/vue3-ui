<template>
    <div class="gulu-carousel-director gulu-carousel-dir-next" v-if="dir === 'next' && hasDirector">
      <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
    </div>
    <div class="gulu-carousel-director dir-prev" v-else-if="dir === 'prev' && hasDirector">
      <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
    </div>
</template>

<script lang="ts">
export default {
  name: "Director",
  props: {
    dir: String,
    hasDirector:Boolean
  },
  setup(props, ctx) {
    const dirClick = (dir: any) => {
      ctx.emit("dirClick", dir);
    };

    return { dirClick };
  },
};
</script>

<style lang="scss" scoped>
.gulu-carousel-director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background-color:rgba($color: #000000, $alpha: 0.5);
  a {
    color: #fff;
    text-decoration: none;
  }
  &.gulu-carousel-dir-next {
    right: 0;
  }
  &.gulu-carousel-dir-prev {
    left: 0;
  }
}
</style>