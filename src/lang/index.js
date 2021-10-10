import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cn from './cn.js';
import en from './en.js';
import langTypes from '@/lang/types.js';

Vue.use(VueI18n);

const messages = {
  // 中文
  [langTypes.cn]: {
    xlang: {
      ...cn,
    }
  },
  // 英文
  [langTypes.en]: {
    xlang: {
      ...en,
    }
  }
}

const i18n = new VueI18n({
  locale: langTypes.en,
  messages,
})

export default i18n;