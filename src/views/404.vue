<template>
  <div class="x404 centerFlex">
    <div class="content">{{msg}}</div>
    <el-button type="success" round @click="goHome">{{tips}}</el-button>
  </div>
</template>

<script>
import { publicMixin } from '@/mixin/index.js';

export default {
  name: 'x404', // 取名字还不能直接取404，你牛的狠啊
  mixins: [ publicMixin ],
  data() {
    return {
      msg: '呃豁，你需要的信息，被外星人借走了！',
      tips: '返回首页'
    }
  },
}
</script>

<style lang="less" scoped>
.x404 {
  width: 100%;
  height: 100vh;
  font-size: @fontSize18;
}
</style>