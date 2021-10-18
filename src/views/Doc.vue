<template>
  <div class="layout">
    <Topnav toggleAisdeButtonVisible class="nav" />
    <div class="content">
      <aside class="aside" :class="{ visible: asideVisible }">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/Carousel">Carousel组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view class="demo"></router-view>
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
  // height: 100%;
  // height: 100vh;
  > .nav {
    flex-shrink: 0; //Topnav不允许缩放
  }
  .content {
    // background: blue;
    height: 100%;
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    > aside {
      background: white;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      margin-top: 60px;
      flex-shrink: 0;
      width: 200px;
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
          width: 100%;
          font-size: 14px;
          position: relative;
          > a {
            // border: 1px solid red;
            display: block;
            padding: 12px 20px;
            cursor: pointer;
            color: #333;
            &:hover {
              background: #e5f2fa;
              border-bottom: none;
            }
          }
          > .router-link-active {
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
    }
    > main {
      flex-grow: 1;
      overflow: auto;
      padding: 60px 180px;
    }
  }
}

@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;
      aside {
        z-index: 10;
        transition: all 0.25s ease;
        transform: translateX(-197px);
        &.visible {
          transform: translateX(0px);
        }
      }
      main {
        overflow: auto;
        padding: 20px 8px;
      }
    }
  }
}
</style>
