<template>
  <div class="nav-bar gBoxInsetShadow">
    <div class="lang-switch" @click="switchLang">{{langText}}</div>
    <div class="app-title"><span @click="goHome">{{$t('xlang.appTitle')}}</span></div>
    <div class="log-out centerFlex">
      <div class="user-info">Hello，{{useInfo.name||$t('xlang.pleaseLogin')}}</div>
      <el-button title="登出" type="danger" size="mini" circle icon="el-icon-switch-button"
        @click="exitOut"></el-button>
    </div>
  </div>
</template>

<script>
import { publicMixin } from '@/mixin/index.js';
import { mapActions, mapState } from 'vuex';
import langTypes from '@/lang/types.js';

export default {
  name: 'NavBar',
  mixins: [ publicMixin ],
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'useInfo'
    ]),
    langText() {
      const langObj = { [langTypes.cn]: 'en', [langTypes.en]: '中' };
      return langObj[this.$i18n.locale];
    }
  },
  methods: {
    ...mapActions([
      'logOut'
    ]),
    async exitOut() {
      await this.logOut();
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    // 语言切换
    switchLang() {
      if(this.$i18n.locale !== langTypes.cn) {
        this.$i18n.locale = langTypes.cn;
      } else {
        this.$i18n.locale = langTypes.en;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px 0 10px;
  .lang-switch {
    cursor: pointer;
    padding: 0 5px;
    line-height: 50px;
  }
  .app-title {
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
    .user-info {
      font-size: 12px;
      padding-right: 5px;
      font-weight: bolder;
    }
  }
}
</style>