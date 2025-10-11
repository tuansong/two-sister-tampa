<script setup lang="ts">
  //...
</script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <NuxtLink class="-ml-6" to="/">
            <div to="/" class="font-serif inline-flex items-center text-3xl">
              <NuxtImg class="w-24" alt="logo" src="/2sistampa-logo.png" />
              <h6 class="font-serif inline-flex items-center text-3xl">
                Two Sisters Tampa
              </h6>
            </div>
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-left">
            Where Every Bite Tells A Story!
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink
                href="https://www.facebook.com/twosistersTampa"
                aria-label="facebook"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-facebook"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://twitter.com"
                aria-label="instagram"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-instagram-icon"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://www.youtube.com"
                aria-label="youtube"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-youtube-icon"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="my-6 text-center">
            <NuxtLink to="/">+1 8138676413</NuxtLink>
            <br />
            <NuxtLink to="/">twoSisTampa@gmail.com</NuxtLink>
          </div>
        </div>
        <!-- <div class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            General
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink to="/" class="hover:text-primary-600 dark:text-primary-200">News</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/" class="hover:text-primary-600 dark:text-primary-200">Careers</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/" class="hover:text-primary-600 dark:text-primary-200">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Links
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink to="/cakes" class="hover:text-primary-600 dark:text-primary-200">Order Now</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/quick-start" class="hover:text-primary-600 dark:text-primary-200">Tip Us</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/blog" class="hover:text-primary-600 dark:text-primary-200">Blog</NuxtLink>
            </li>
          </ul>
        </div> -->
        <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Gallery
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDF8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE1fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIzfHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1612809075925-230725151da2?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI3fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1621424093521-eec9a43df158?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI4fHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1629389861081-43cc4f172b0c?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxyYWJiaXR8ZW58MHx8fHwxNjMwNDY3NjUw&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2002 - 2021. All Rights Reserved - Two Sisters Tampa
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
