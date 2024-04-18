import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import Increase from './Increase.vue'

describe('Increase Component', async () => {
  beforeAll(async () => {
    // one
  })

  beforeEach(() => {
    // every
  })

  it('mount', async () => {
    const component = await mountSuspended(Increase)

    const button = component.find('[data-testid="increase-button"]')

    expect(button.text()).toContain(`Count is: 0`)
  })

  it('increase', async () => {
    const component = await mountSuspended(Increase)

    const button = component.find('[data-testid="increase-button"]')

    await button.trigger('click')

    expect(button.text()).toContain(`Count is: 1`)
  })
})
