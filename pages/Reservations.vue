<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import 'uno.css'
useHead({
  title: 'Reservations',
  meta: [
    {
      name: 'description',
      content: 'Reservations',
    },
  ],
  script: [
    {
      src: 'https://book.mylimobiz.com/v4/widgets/widget-loader.js',
      type: 'text/javascript',
    },
  ],
})
useScriptTag(
  'https://book.mylimobiz.com/v4/widgets/widget-loader.js',
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    console.log('script loaded')
  }
)
definePageMeta({
  alias: ['/'],
})
</script>

<template>
  <div class="h-full w-full bg-transparent fixed">
    <iframe
      src="https://book.mylimobiz.com/v4/luxridesvc"
      allow="fullscreen"
      width="100%"
      height="100%"
      class="h-screen fixed"
      id="online-reservations"
    >
    </iframe>
  </div>
</template>

<style scoped></style>
