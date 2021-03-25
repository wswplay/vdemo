<template>
  <div class="about">
    <h1>This is an about page</h1>
    这里有文字的啊，是不是
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('process.env', process.env.VUE_APP_SECRET)
    console.log('NODE_ENV', process.env.NODE_ENV)
    console.log('BASE_URL', process.env.BASE_URL)
  }
};
</script>
<style lang="less" scoped>

</style>
