<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import { useHead } from '#imports'

useHead(() => ({
  title: 'LRS Login',
  meta: [{ name: 'description', content: 'My App' }],
}))
useScriptTag(
  'https://book.mylimobiz.com/v4/widgets/widget-loader.js',
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    console.log('script loaded')
  }
)
</script>

<template>
  <div class="h-full w-full fixed px-6">
    <div
      class="mx-auto max-w-5xl pt-4 bg-transparent flex flex-row justify-between"
    >
      <div class="w-[150px]">
        <img width="340" height="95" src="/luxury_ride_service_logo.jpg" alt="logo" />
      </div>
      <h1 class="text-black text-3xl text-center uppercase"></h1>
    </div>
    <NuxtPage />
  </div>
</template>
