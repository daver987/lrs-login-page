import { defineNuxtConfig } from 'nuxt/config'
import { transformerDirectives } from 'unocss'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],

  unocss: {
    icons: true,
    transformers: [transformerDirectives()],
    attributify: true,
    theme: {
      fontFamily: {
        sans: ['caviar-dreams'],
        subheading: ['caviar-dreams-bold'],
        heading: ['campton-thin'],
        body: ['campton-light'],
      },
      colors: {
        primary: {
          DEFAULT: '#BB880F',
        },
        background: {
          light: '#fff',
          DEFAULT: '#EBEBEB',
          dark: '#262626',
        },
        body: {
          light: '#fff',
          DEFAULT: '#AAAAAA',
        },
        heading: {
          light: '#fff',
          DEFAULT: '#2B2B2B',
        },
        icon: {
          DEFAULT: '#C0C0C0',
        },
      },
      container: {
        center: true,
      },
    },
    shortcuts: {
      subheading:
        'font-subheading text-primary text-xs leading-relaxed tracking-[0.5em] uppercase md:text-sm',
      heading: 'font-heading text-4xl text-heading uppercase lg:text-5xl',
    },
  },

  css: ['assets/css/styles.css', '@unocss/reset/tailwind.css'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  nitro: {
    preset: 'cloudflare',
  },
})
