<script setup lang="ts">
  // ...
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
          <div id="fb-root" />
          <div
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="697459616773797"
            theme_color="#0084ff"
            logged_in_greeting="Hi! How can we help you?"
            logged_out_greeting="Hi! Please log in to chat with us."
          />
        </main>
      </div>
      <TheFooter />
    </div>
    <!-- </div> -->
  </div>
</template>

<style></style>
