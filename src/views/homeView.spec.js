import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect } from 'vitest'

import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'

describe('Renderiza HomeView cuando navego a la ruta', async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      }
    ]
  })

  it('Navega por la vista HomeView', async () => {
    routerPrueba.push({ name: 'home' })

    await routerPrueba.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})
