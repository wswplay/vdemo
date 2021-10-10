import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cn from './cn.js';
import en from './en.js';

Vue.use(VueI18n);

const messages = {
  cn: {
    xlang: {
      ...cn,
    }
  },
  en: {
    xlang: {
      ...en,
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages,
})

export default i18n;