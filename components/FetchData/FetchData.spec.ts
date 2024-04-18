import { describe, it, expect, vi } from 'vitest'
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime'
import FetchData from './FetchData.vue'

describe('FetchData', () => {
  it('data', async () => {
    const id = 123

    // registerEndpoint(`/api/test/${id}`, {
    //   method: 'POST',
    //   handler: () => ({
    //     id,
    //   }),
    // })

    vi.stubGlobal('$fetch', () => ({ id }))

    const component = await mountSuspended(FetchData, {
      props: {
        id,
      },
    })

    const button = component.find('[data-testid="api-button"]')

    await button.trigger('click')

    await component.vm.$nextTick()

    const text = component.find('[data-testid="data-id"]').text()

    expect(text).toBe(id.toString())
  })
})
