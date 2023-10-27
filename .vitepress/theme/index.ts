// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme-without-fonts'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
import './style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-before': () => h(Documate, {
        endpoint: 'https://mtutzrcite.us.aircode.run/ask',
      }),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
