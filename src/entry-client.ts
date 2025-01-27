import { createApp } from './main'
import { createKUNGalgameRouter } from './router'
import { setupPinia } from './store'
import i18n from '@/language/i18n'
import '@/styles/index.scss'

const router = createKUNGalgameRouter()
const pinia = setupPinia()

const { app } = createApp()

app.use(router).use(pinia).use(i18n)

if (window.__pinia) {
  pinia.state.value = JSON.parse(JSON.stringify(window.__pinia))
}

router.isReady().then(() => {
  app.mount('#app', true)
})
