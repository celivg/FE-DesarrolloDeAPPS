import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ChildComponent from './ChildComponent.vue'

describe('ChildComponent', () => {
  it('Al hacer click en el botón se envía el texto', async () => {
    const wrapper = shallowMount(ChildComponent)

    const input = wrapper.find('input')
    await input.setValue('Texto de prueba')

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted('enviar-texto')).toBeTruthy()
    expect(wrapper.emitted('enviar-texto')[0]).toEqual(['Texto de prueba'])
  })
})
