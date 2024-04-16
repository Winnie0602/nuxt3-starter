// https://nuxt.com/docs/guide/directory-structure/server
// example: /api/test/[id]

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, 'id') || '')

  // const id = parseInt(event.context.params.id) as number

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }

  const method = isMethod(event, 'POST') ? 'POST' : 'GET'

  const body = await readBody(event)

  const query = getQuery(event)

  // get parse cookies
  const cookies = parseCookies(event) // cookies.name

  // get cookie
  // const cookie = getCookie(event, 'name')

  setResponseStatus(event, 200)

  return { method, body, query, id, cookies }
})
