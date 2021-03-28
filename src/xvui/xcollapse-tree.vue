<template>
  <div class='xcollapseTree'>
    <Xcollapse v-for="item in list" :key="item.path" :info="item" />
  </div>
</template>

<script>
import Xcollapse from './xcollapse'
export default {
  name: 'XcollapseTree',
  props: ['list'],
  components: { Xcollapse },
  data() {
    return {}
  },
}
</script>

<style lang='less' scoped>

</style>