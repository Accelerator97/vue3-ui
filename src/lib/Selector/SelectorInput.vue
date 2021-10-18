<template>
  <div class="gulu-selector-input">
    <label class="placeholder">{{ placeholder }}</label>
    <input
      type="text"
      class="input"
      :value="value"
      ref="inputValue"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
      @blur="setValue(value)"
    />
    <svg class="icon">
      <use xlink:href="#icon-xiajiantou"></use>
    </svg>
  </div>
</template>

<script>
import {getCurrentInstance} from 'vue'
export default {
  name: "SelectorInput",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    value: String,
  },
  setup(props, ctx) {
    const instance = getCurrentInstance()//拿到当前实例

    const searchOptions = (e) => {
      //向父组件传递value
      ctx.emit("searchOptions", e.target.value);
    };

    const setValue = (value) => { //记忆功能
      const _input = instance.refs.inputValue //把输入的value赋值给当前实例上的inputValue
      if(_input.value.length >0 ){
        _input.value = value  //这样一来当失去焦点的时候，_input自动填充上次的内容

      }
    }

    return { searchOptions,setValue };
  },
};
</script>

<style lang="scss" scoped>
.gulu-selector-input {
  position: relative;
  width: 100%;
  height: 45px;

  .input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s linear;
    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 3px #1890ff;
    }
  }

  .placeholder,
  .icon {
    position: absolute;
  }

  .placeholder {
    left: 15px;
    top: 12px;
    color: #999;
  }
  .icon {
    right: 15px;
    top: 14px;
    color: black;
  }
}
</style>