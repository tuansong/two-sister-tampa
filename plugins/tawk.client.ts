import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.vueApp.use(TawkMessengerVue, {
      propertyId: '685cbc24d19c79190b763a62',
      widgetId: '1iul3tsdj'
    })
  }
})