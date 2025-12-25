export default defineEventHandler(async (event) => {
  const { pathname } = getRouterParams(event);

  return blob.serve(event, pathname);
});
