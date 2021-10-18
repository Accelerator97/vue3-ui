<template>
  <div class="gulu-selector-input">
    <label class="placeholder" >{{ placeholder }}</label>
    <input type="text" class="input" :value="value" @input="searchOptions($event)"/>
    <svg class="icon">
      <use xlink:href="#icon-xiajiantou"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SelectorInput",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    value:String
  },
  setup(props,ctx) {
    const searchOptions = (e) =>{
      //向父组件传递value
      ctx.emit('searchOptions',e.target.value)
    }

    return {searchOptions}
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