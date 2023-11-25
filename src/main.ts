import './assets/main.styl'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ja from './locales/ja'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives
})

function getBrowserLocale() {
  const userLang = navigator.language
  return userLang.split('-')[0]
}

const i18n = createI18n({
  locale: getBrowserLocale(), // set current locale
  fallbackLocale: 'ja',
  messages: {
    en,
    ja
  }
})
app.use(vuetify)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
