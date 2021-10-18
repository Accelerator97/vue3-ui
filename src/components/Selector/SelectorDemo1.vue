<demo>
带搜索功能的下拉菜单
</demo>

<template>
    <div class="container">
       <Selector :data="selectorData" placeholder="请选择框架" @setItemValue="getValue" />
    </div>
</template>

<script>
import Selector from '../../lib/Selector/Selector.vue'
import selectorData from "../../data/selector.js";
export default {
    components:{Selector},
    setup () {
        const getValue = (value) =>{
            console.log(value)
        }
        return {selectorData,getValue}
    }
}
</script>

<style lang="scss" scoped>
.container{
    width: 450px;
}
</style>
