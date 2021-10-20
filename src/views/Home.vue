<template>
  <div class="topnavandBanner">
    <Topnav />
    <div class="banner">
      <h1>咕噜UI</h1>
      <h2>一个简易的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/Accelerator97/vue3-ui">Github</a>
        <router-link to="/doc/intro">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于Vue3</h3>
        <p>使用Vue3 Composition API</p>
      </li>

      <li>
        <svg class="icon">
          <use xlink:href="#icon-typescript-def"></use>
          <h3>基于TypeScript</h3>
          <p>源代码采用TypeScript书写</p>
        </svg>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-dengpao"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$border-radius: 8px;
$color: #2c3e50;
$green: #4abf8a;
.topnavandBanner {
  .banner {
    clip-path: ellipse(80% 60% at 50% 40%);
    background: rgb(83, 133, 156);
    background: -moz-linear-gradient(
      60deg,
      rgb(83, 133, 156) 62%,
      rgb(195, 214, 225) 98%
    );
    background: -webkit-linear-gradient(
      60deg,
      rgb(83, 133, 156) 62%,
      rgb(195, 214, 225) 98%
    );
    background: -o-linear-gradient(
      60deg,
      rgb(83, 133, 156) 62%,
      rgb(195, 214, 225) 98%
    );
    background: -ms-linear-gradient(
      60deg,
      rgb(83, 133, 156) 62%,
      rgb(195, 214, 225) 98%
    );
    background: linear-gradient(
      150deg,
      rgb(83, 133, 156) 62%,
      rgb(195, 214, 225) 98%
    );
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions {
      padding: 60px 0;
      a {
        color: white;
        margin: 0 8px;
        height: 42px;
        line-height: 42px;
        background: $green;
        display: inline-block;
        border-radius: $border-radius;
        padding: 0 8px;
      }
    }
  }
}

.features {
  margin: 0 auto;
  width: 400px;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
    > ul{
      > li{
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    > ul{
      > li{
        width: 33.33333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>