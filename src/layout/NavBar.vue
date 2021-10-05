<template>
  <div class="nav-bar gBoxInsetShadow">
    <div class="title" @click="goHome">{{title}}</div>
  </div>
</template>

<script>
import { publicMixin } from '@/mixin/index.js';

export default {
  name: 'NavBar',
  mixins: [ publicMixin ],
  data() {
    return {
      title: 'JavaScript边城',
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/variable.less";
.nav-bar {
  // border: 1px dashed @borderColor;
  .title {
    line-height: 50px;
    color: green;
    // transition: all 0.6s;
    cursor: pointer;
    font-size: 18px;
    // &:hover {
    //   color: blue;
    //   font-size: 20px;
    // }
  }
}
</style>