export default defineEventHandler(async (event) => {
  const blobs = await hubBlob().handleUpload(event, {
    formKey: "file",
    put: { addRandomSuffix: true },
  })

  const url = getRequestURL(event).toString()

  return blobs.map(blob => new URL(`/blob/${blob.pathname}`, url).toString()).join("\n")
})
