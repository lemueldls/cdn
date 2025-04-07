export default defineEventHandler(async (event) => {
  const { pathname } = getRouterParams(event)

  console.log({ pathname })

  return hubBlob().serve(event, pathname)
})
