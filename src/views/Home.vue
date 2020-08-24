<template>
  <div class="home">
    <div class="header">
      <span>闻达</span>
    </div>
    <van-nav-bar title="retina&适配" left-text="返回" right-text="按钮" left-arrow />
    <h4 class="fs-16">1px问题</h4>
    <div class="box thinline-round"></div>
    <!-- <p class="word">scss也太繁杂了吧，啊啊啊啊啊啊...</p> -->
    <h4 class="fs-16">img图片适配</h4>
    <div class="img">
      <img
        src="~img/img/mm-width@2x.jpg"
        srcset="~img/img/mm-width.jpg, ~img/img/mm-width@2x.jpg 2x"
        alt="srcset img test--wechat"
      />
    </div>
    <h4 class="fs-16">icon背景图片适配</h4>
    <div>
      <span class="xicon-wechat"></span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)

export default {
  name: 'Home',
  data() {
    return {
      test: 'ss',
    }
  },
  methods: {},
}
</script>

<style lang="scss">
// @mixin fs($name, $value) {
//   [data-dpr='2'] {
//     #{$name}: $value;
//   }
//   [data-dpr='3'] {
//     #{$name}: $value/2 * 3;
//   }
// }
.fs-16 {
  font-size: 16px;
  margin: 0.1rem 0;
}
.home {
  padding-top: 0.88rem;
  .header {
    height: 0.88rem;
    line-height: 0.88rem;
    background-color: darkorange;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }
  .van-nav-bar {
    height: 0.88rem;
  }
  .box {
    width: 200px;
    height: 100px;
    margin: 10px;
  }
  .word {
    height: 200px;
    background-color: burlywood;
  }
  .img {
    width: 1.28 * 2rem;
    height: 0.96 * 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .x-imgset {
    width: 1.28 * 2rem;
    height: 0.96 * 2rem;
  }
}
// @include fs('font-size', 16px);
// [data-dpr='2'] .word {
//   font-size: 16px;
// }
// [data-dpr='3'] .word {
//   font-size: 16px/2 * 3;
// }
</style>
