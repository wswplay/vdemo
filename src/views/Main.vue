<template>
  <div class="main gBoxInsetShadow">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 50px;
  left: 200px;
  height: calc(100% - 50px);
  width: calc(100% - 200px);
}
</style>