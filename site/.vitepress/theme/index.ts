import DefaultTheme from 'vitepress/theme'
import WidgetbookEmbed from './WidgetbookEmbed.vue'
import ComponentTabs from './ComponentTabs.vue'
import ComponentFeedback from './ComponentFeedback.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WidgetbookEmbed', WidgetbookEmbed)
    app.component('ComponentTabs', ComponentTabs)
    app.component('ComponentFeedback', ComponentFeedback)
  },
}
