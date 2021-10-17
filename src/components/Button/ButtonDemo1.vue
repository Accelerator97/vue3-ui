<demo>
示例一：设置theme
</demo>

<template>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
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