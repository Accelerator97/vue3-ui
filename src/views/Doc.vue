<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/diaLog">Diaslog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
          <router-view></router-view>
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;

  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed; //PC端不用固定定位
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
