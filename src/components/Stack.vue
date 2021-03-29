<template>
  <div class="stack">
      stack的内容
  </div>
</template>

<script>
import { CateList } from '@/mock/cates'
export default {
  name: 'Stack',
  components: { },
  data() {
    return {
      cateArr: []
    }
  },
  created() {
    this.cateArr = CateList
  },
}
</script>

<style lang="less" scoped>
.stack {
  text-align: left;
  // color: #fff;
  // font-size: 50px;
  // line-height: 300px;
  // background-color: rgb(224, 204, 178);
  // .cate-list {
  //   width: 200px;
  // }
}
</style>