export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const s = document.createElement('script');
    s.src = 'https://embed.tawk.to/685cbc24d19c79190b763a62/default';
    s.async = true;
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.body.appendChild(s);
  }
});