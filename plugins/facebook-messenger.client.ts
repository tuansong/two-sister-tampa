export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0', // Use latest version
      });
    };

    (function (d, s, id) {
      let js: any,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }
});