import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { keys } from 'lodash-es'

import enLocale from './en.json'
import zhLocale from './zh.json'

Vue.use(VueI18n)

const messages = {
  zh: zhLocale,
  en: enLocale
}

export function getLanguage() {

  // const chooseLanguage = Cookies.get('language')
  // if (chooseLanguage) return chooseLanguage
  // // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  return 'zh-CN'
}
// console.log(getLanguage(), 67)
const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage() || 'en-US',
  // set locale messages
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  preserveDirectiveContent: true
})


export default i18n
