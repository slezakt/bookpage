import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: 'd35qgsr8',
    globalHelper: true,
  },
});
