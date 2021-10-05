<template>
  <div class="Hello">
    <el-carousel
      indicator-position="none"
      :autoplay="false"
      :interval="6000"
      type="card"
    >
      <el-carousel-item v-for="(item,index) in ceremonyList" :key="index">
        <div class="ceremony-list">
          <div class="ceremony-item" v-for="(citem,cid) in item" :key="cid">{{citem}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      ceremonyList: [
        [
          // '【沈从文】',
          '我行过许多地方的桥',
          '看过许多次数的云',
          '喝过许多种类的酒',
          '却只爱过一个正当最好年龄的人',
        ],
        [
          // '【北岛】',
          '那时我们有梦',
          '关于文学',
          '关于爱情',
          '关于穿越世界的旅行',
          '如今我们深夜饮酒',
          '杯子碰到一起',
          '都是梦破碎的声音',
        ],
        [
          // '【聂鲁达】',
          '我要光明',
          '要你可爱的手中的麦穗的清香',
          '再一次在我身上飘过',
          '让我感到改变了我命运的温柔',
          '...',
          '我要你的耳朵继续听着风声',
          '闻着我们一起爱过的海的芬芳',
          '继续踩着我们踩过的沙滩',
        ]
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.Hello {
  width: 100%;
  height: 100%;
  font-size: @fontSize18;
  .ceremony-item {
    padding: 20px 0;
  }
  .el-carousel,
  /deep/.el-carousel__container {
    height: 100%;
    width: 100%;
  }
  .el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
}
</style>