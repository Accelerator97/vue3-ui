<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside class="aside" :class="{ visible: asideVisible }">
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
import { inject, Ref, onMounted } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  // height: 100vh;
  > .nav {
    flex-shrink: 0; //Topnav不允许缩放
  }
  .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    display: flex;
    > aside {
      flex-shrink: 0;
      overflow-x: hidden;
      overflow-y: auto;
      z-index: 10;
      box-shadow: 5px 0 5px rgba(51 51 51/10%);
      padding-bottom: 32px;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }
  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
  main {
    overflow: auto; //内容过多时显示滚动条
  }
}

@media (max-width: 500px) {
  .layout {
    .content {
      padding-left: 0;
    }
    .aside {
      width: 180px;
      background-color: lightblue;
      transition: all 0.25s ease;
      transform: translateX(-200px);

      &.visible {
        transform: translateX(0px);
      }
    }
    main {
      overflow: auto;
      padding: 20px 8px;
      margin: 0 auto;
    }
  }
}
</style>
