<template>
  <div class="cate-item">
    <template v-if="info.children">
      <span class="icon">></span>{{info.name}}
    </template>
    <router-link v-else :to="info.path">{{info.name}}</router-link>
    <template v-if="info.children">
      <CateItem
        v-for="item in info.children"
        :info="item"
        :key="item.path"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CateItem',
  props: ['info'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.cate-item {
  line-height: 30px;
  text-align: left;
  .cate-item {
    text-indent: 15px;
    .cate-item {
      text-indent: 30px;
    }
  }
}
</style>