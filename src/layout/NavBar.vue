<template>
  <div class="nav-bar gBoxInsetShadow">
    <div class="title"><span @click="goHome">{{title}}</span></div>
    <div class="log-out" >
      <span>Hello，{{useInfo.name||'请登录'}}</span>
      <el-button title="登出" type="danger" size="mini" circle icon="el-icon-switch-button"
        @click="exitOut"></el-button>
    </div>
  </div>
</template>

<script>
import { publicMixin } from '@/mixin/index.js';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'NavBar',
  mixins: [ publicMixin ],
  data() {
    return {
      title: 'JavaScript边城',
    }
  },
  computed: {
    ...mapState([
      'useInfo'
    ])
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
    right: 20px;
    span {
      font-size: 12px;
      padding-right: 5px;
      font-weight: bolder;
    }
  }
}
</style>