import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cn from './modules/cn.js';
import en from './modules/en.js';
import langTypes from '@/lang/types.js';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import ElementLocale from 'element-ui/lib/locale';

Vue.use(VueI18n);

const messages = {
  // 中文
  [langTypes.cn]: {
    xlang: cn,
    ...zhLocale
  },
  // 英文
  [langTypes.en]: {
    xlang: en,
    ...enLocale
  }
}

const i18n = new VueI18n({
  locale: langTypes.en,
  messages,
})

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;