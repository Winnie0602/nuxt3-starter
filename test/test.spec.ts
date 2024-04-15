import { describe, expect, it } from 'vitest'
import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e'

describe('test page', async () => {
  await setup()

  it('open page', async () => {
    const html = await $fetch('/test')

    expect(html).toContain('Test')
  })

  it('playwright', async () => {
    const page = await createPage()

    await page.goto(url('/test'), { waitUntil: 'hydration' })

    const button = page.getByTestId('increase-button')

    expect(await button.innerText()).toBe(`Count is: 0`)

    await button.click()

    expect(await button.innerText()).toBe(`Count is: 1`)
  })
})
