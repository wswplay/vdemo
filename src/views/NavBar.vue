<template>
  <div class="nav-bar gBoxInsetShadow">
    Demo页面欢迎您！
    <router-link to="/">首页</router-link>  ||  
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="less" scoped>
@import "~@/style/variable.less";
.nav-bar {
  line-height: 50px;
  // border: 1px dashed @borderColor;
}
</style>