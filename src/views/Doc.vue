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
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    display: flex;
    > aside {
      position: fixed;
      top: 0;
      left: 0;
      margin-top: 70px;
      flex-shrink: 0;
      width: 260px;
      overflow-x: hidden;
      overflow-y: auto;
      z-index: 10;
      box-shadow: 5px 0 5px rgba(51 51 51/10%);
      padding-bottom: 32px;
      border-right: 1px solid #e8e8e8;
      > h2 {
        margin-bottom: 4px;
        line-height: 22px;
        padding: 10px;
        font-size: 16px;
        font-weight: 700;
      }
      > ol {
        > li {
          position: relative;
          width: 100%;
          font-size: 14px;
          > a {
            display: block;
            padding: 12px 20px;
            cursor: pointer;
            color: #333;
            &:hover {
              background: #e5f2fa;
              border-bottom: none;
            }
          }
        }
        .router-link-active {
          background: #e5f2fa;
          border-bottom: none;
          &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            border-right: 3px solid #6b9ab8;
          }
        }
      }
    }
    > main {
      flex-grow: 1;
      overflow: auto;
      padding: 60px 180px;
      background: white;
    }
  }
}

@media (max-width: 500px) {
  .layout {
    .content {
      padding-left: 0;
    }
    .aside {
      width: 180px;
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
