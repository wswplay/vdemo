<template>
  <div class="stack">
      stack的内容
      <Parent />
  </div>
</template>

<script>
import Parent from '@/xvui/parent'
import { CateList } from '@/mock/cates'
export default {
  name: 'Stack',
  components: { Parent },
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