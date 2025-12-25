export default defineEventHandler(async (event) => {
  const files = await blob.handleUpload(event, {
    formKey: "file",
    put: { addRandomSuffix: true },
  });

  const url = getRequestURL(event);

  return (
    files
      .map((file) => new URL(`/blob/${file.pathname}`, url).toString())
      .join("\n") + "\n"
  );
});
