<template>
  <div class="nav-bar gBoxInsetShadow">
    <div class="title"><span @click="goHome">{{title}}</span></div>
    <div class="log-out">
      <el-button type="danger" size="mini" circle icon="el-icon-switch-button"
        @click="exitOut"></el-button>
    </div>
  </div>
</template>

<script>
import { publicMixin } from '@/mixin/index.js';
import { mapActions } from 'vuex';

export default {
  name: 'NavBar',
  mixins: [ publicMixin ],
  data() {
    return {
      title: 'JavaScript边城',
    }
  },
  methods: {
    ...mapActions([
      'logOut'
    ]),
    async exitOut() {
      await this.logOut();
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  position: relative;
  .title {
    line-height: 50px;
    color: green;
    // transition: all 0.6s;
    font-size: 18px;
    span {
      cursor: pointer;
    }
    // &:hover {
    //   color: blue;
    //   font-size: 20px;
    // }
  }
  .log-out {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>