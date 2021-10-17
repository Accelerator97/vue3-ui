<demo>
示例一：设置theme
</demo>

<template>
  <div>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
    <br>
    <Button theme="warning">警告按钮</Button>
    <Button theme="main">主要按钮</Button>
    <Button theme="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>