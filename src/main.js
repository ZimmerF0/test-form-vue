import { createApp } from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import UserForm from './UserForm.vue'
import Preview from './Preview.vue'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)
app.use(VueRouter)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: UserForm },
    { path: '/preview', component: Preview }
  ]
})

app.use(router)
app.mount('#app')