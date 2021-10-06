<template>
  <div class="nav-bar gBoxInsetShadow">
    <div class="title" @click="goHome">{{title}}</div>
    <div class="log-out">
      <el-button type="danger" size="mini" circle icon="el-icon-switch-button"
        @click="logOut"></el-button>
    </div>
  </div>
</template>

<script>
import { publicMixin } from '@/mixin/index.js';
import { removeToken } from '@/utils/auth.js';

export default {
  name: 'NavBar',
  mixins: [ publicMixin ],
  data() {
    return {
      title: 'JavaScript边城',
    }
  },
  methods: {
    logOut() {
      removeToken();
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
    cursor: pointer;
    font-size: 18px;
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