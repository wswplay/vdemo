<template>
  <div class="Future centerFlex">
    <div class="content">
      {{name}}，{{msg}}
      <div class="calendar-box">
        <el-calendar v-model="calendar"></el-calendar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Future',
  props: ['name'],
  data() {
    return {
      msg: '正在紧张施工  🚧🚧🚧  敬请期待！',
      calendar: new Date(),
    }
  }
}
</script>

<style lang="less" scoped>
.Future {
  width: 100%;
  height: 100%;
  font-size: @fontSize18;
  .calendar-box {
    width: 50%;
    margin: 30px auto 0;
    /deep/.el-calendar-table .el-calendar-day {
      height: auto;
    }
  }
}
</style>