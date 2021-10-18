<template>
  <div class="gulu-selector-menu">
    <template v-if="searchData.length >0">
        <div
          class="gulu-selector-menuItem"
          v-for="(item, index) of searchData"
          :key="index"
          @click="setItemValue(item)"
        >
          {{ item.text }}
        </div>
    </template>
    <Nodata v-else/>
  </div>
</template>

<script>
import Nodata from "./Nodata.vue";
import { ref, onMounted, watch } from "vue";
export default {
  name: "SelectorMenu",
  props: {
    searchValue: {
      type: String,
    },
    data: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            value: "1",
            text: "选项1",
          },
          {
            id: 2,
            value: "2",
            text: "选项2",
          },
          {
            id: 3,
            value: "3",
            text: "选项3",
          },
        ];
      },
    },
  },
  components:{Nodata},
  setup(props, ctx) {
    const searchData = ref([]); //用户传进来的数据

    const setItemValue = (item) => {
      //Vue2 的是采用this.$emit方法,向Selector组件传递点击选中的值，然后输入框的值显示为选中值
      // console.log(item);
      ctx.emit("setItemValue", item);
    };

    const filterData = (value) => {
      searchData.value = props.data.filter((item) => {
        return item.text
          .toLowerCase()
          .trim()
          .includes(props.searchValue.toLowerCase().trim());
        //如果包含了props.serachValue就会放到searchData里面，如果不包含就不放进去
      });
    };
    watch(
      () => {
        return props.searchValue;
      },
      (value) => {
        //这里的value就是改变后的searchValue
        filterData(value);
      }
    );
    onMounted(() => {
      searchData.value = props.data;
    });
    return { setItemValue, searchData };
  },
};
</script>

<style lang="scss" scoped>
.gulu-selector-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  .gulu-selector-menuItem {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    transition: background-color 0.2s linear;
    &:hover {
      background-color: #ededed;
    }
  }
}
</style>