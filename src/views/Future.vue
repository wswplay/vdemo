<template>
  <div class="Future centerFlex">
    <div class="content">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Future',
  data() {
    return {
      msg: '正在紧张施工 🚧🚧🚧 敬请期待！',
    }
  }
}
</script>

<style lang="less" scoped>
.Future {
  width: 100%;
  height: 100%;
  font-size: 32px;
}
</style>