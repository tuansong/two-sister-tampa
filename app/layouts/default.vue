<script setup lang="ts">
  // ...
  import type { NuxtFacebookChatOptions } from 'nuxt-facebook-chat'
  const options: NuxtFacebookChatOptions = {
    pageId: '697459616773797', // Your Facebook Page ID
    locale: 'th_TH', // Set the locale for the chat
    themeColor: '#E04040', // Customize the chat theme color
    loggedInGreeting: 'Hi! How can we help you?',
    loggedOutGreeting: 'Hi! Please log in to chat with us.',
  }
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar class="fixed shadow z-20 bg-white dark:bg-neutral-950" />
      <div class="mt-24">
        <main class="shadow">
          <slot />
          <client-only>
            <nuxt-facebook-chat :options="options" />
          </client-only>
          <!-- <div id="fb-root" />
          <div
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="697459616773797"
            theme_color="#0084ff"
            logged_in_greeting="Hi! How can we help you?"
            logged_out_greeting="Hi! Please log in to chat with us."
          /> -->
        </main>
      </div>
      <TheFooter />
    </div>
    <!-- </div> -->
  </div>
</template>

<style></style>
