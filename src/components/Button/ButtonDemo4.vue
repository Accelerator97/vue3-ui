<demo>
示例四：设置disabled
</demo>

<template>
    <Button disabled>禁用按钮</Button>
    <Button theme="danger" disabled>禁用按钮</Button>
    <Button theme="main" disabled>禁用按钮</Button>
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