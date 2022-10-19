<script setup lang="ts">
useHead(() => ({
  title: 'Luxury Ride Service Login',
  meta: [
    {
      name: 'description',
      content: 'Login to your online account with Luxury Ride Service',
    },
  ],
}))
definePageMeta({
  alias: ['/login'],
})
</script>

<template>
  <div class="h-screen p-6">
    <div
      class="w-full max-w-xl h-full flex flex-row flex-wrap mx-auto justify-center content-center"
    >
      <h1 class="text-3xl font-subheading uppercase text-center mb-4">Login</h1>
      <a
        href="https://book.mylimobiz.com/v4/luxridesvc/widget/login"
        data-ores-widget="login"
        data-ores-alias="luxridesvc"
        data-redirect-url="https://reservations.luxuryrideservice.com/"
        class="uppercase block"
        >Login</a
      >
    </div>
  </div>
</template>
