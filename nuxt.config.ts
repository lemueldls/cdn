// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ["@nuxthub/core", "@nuxt/eslint"],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {},
  },

  compatibilityDate: "2025-12-25",

  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: { name: "cdn" },
    },
  },

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    blob: {
      driver: "cloudflare-r2",
      binding: "BLOB",
      bucketName: "cdn",
    },
  },

  // Development config
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
      },
    },
  },
});
