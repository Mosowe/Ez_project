// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueSwiper from 'vue-awesome-swiper';

import header from 'components/header/header.vue';
import footer from 'components/footer/footer.vue';
import top from 'components/top/top.vue';

import index from 'components/index/index.vue';
import evidence from 'components/evidence/evidence.vue';
import legal from 'components/legal/legal.vue';
import personal from 'components/personal/personal.vue';
import wordlist from 'components/wordlist/wordlist.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSwiper);
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/index',
      components: {
        top: header,
        content: index,
        footer: footer
      }
    },
    {
      path: '/wordlist',
      components: {
        top: top,
        content: wordlist,
        footer: footer
      }
    },
    {
      path: '/evidence',
      components: {
        top: top,
        content: evidence,
        footer: footer
      }
    },
    {
      path: '/legal',
      components: {
        top: top,
        content: legal,
        footer: footer
      }
    },
    {
      path: '/personal',
      components: {
        top: top,
        content: personal,
        footer: footer
      }
    }
  ]
});
router.push('/index');

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
