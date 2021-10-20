<demo>
放大镜
</demo>


<template>
  <div class="wrapper">
    <Magnifier
      :link=link
      :blank="true"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :maWidth="maWidth"
      :maHeight="maHeight"
    />
  </div>
</template>

<script>
import Magnifier from "../../lib/Magnifier/Magnifier.vue";
import { reactive, toRefs } from "vue";
import imgUrl from '../../assets/images/demo.jpg'

export default {
  components: { Magnifier },
  setup() {
    const state = reactive({
      imgUrl:imgUrl,
      blank: true,
      // link: "https://www.4kbizhi.com/d/file/2021/09/13/small11391878rIj1631504358.jpg",
      imgAlt: "赫敏克菲尔德",
      maWidth: 150,
      maHeight: 150,
    });
    return { ...toRefs(state) };
  },
};
</script>

<style lang="scss" scoped>

</style>