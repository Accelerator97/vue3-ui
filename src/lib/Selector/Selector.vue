<template>
  <div class="gulu-selector" v-focus>
      <SelectorInput
        :placeholder="placeholder"
        :value="inputValue"
        @searchOptions="searchOptions"
      />
      <SelectorMenu
        :data="data"
        @setItemValue="setItemValue"
        :searchValue="searchValue"
      />
</div>
</template>

<script>
import SelectorInput from "./SelectorInput.vue";
import SelectorMenu from "./SelectorMenu.vue";
import focus from "../../directives/focus.ts";
import { reactive, toRefs } from "vue";

export default {
  name: "Selector",
  //自定义指令,获取焦点的时候改变图标和placeholder
  directives: {
    focus,
  },
  props: {
    data: Array,
    placeholder: String,
  },
  components: { SelectorInput, SelectorMenu },
  setup(props, ctx) {
    const state = reactive({
      inputValue: "",
      searchValue: "",
    });
    const setItemValue = (item) => {
      //Menu选中的值
      state.inputValue = item.text;
      ctx.emit("setItemValue", item.value); //向外传递item.value
    };

    const searchOptions = (value) => {
      //Input输入的值
      state.searchValue = value;
    };
    return { setItemValue, ...toRefs(state), searchOptions };
  },
};
</script>

<style lang="scss" scoped>
.gulu-selector {
  width: 100%;
  position: relative;
}
</style>