<template>
  <div class="nav-bar">导航条</div>
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
  border: 1px dashed @borderColor;
}
</style>