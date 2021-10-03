<template>
  <div class="nav-bar gBoxInsetShadow">
    <div>{{tips}}{{sloga}}</div>
    <!-- <router-link to="/">首页</router-link>  ||   -->
    <!-- <router-link to="/about">关于</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      tips: '从今往后，你就是后台。',
      sloga: '一路向前，你就是我们！'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/variable.less";
.nav-bar {
  line-height: 50px;
  // border: 1px dashed @borderColor;
}
</style>