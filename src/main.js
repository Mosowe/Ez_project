// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueSwiper from 'vue-awesome-swiper';

import header from 'components/header/header.vue';
import footer from 'components/footer/footer.vue';

import index from 'components/index/index.vue';
import evidence from 'components/evidence/evidence.vue';
import legal from 'components/legal/legal.vue';
import personal from 'components/personal/personal.vue';
import wordlist from 'components/wordlist/wordlist.vue';
import wordDetail from 'components/wordDetail/wordDetail.vue';
import personalDetail from 'components/personal/personalDetail.vue';
import resetPassword from 'components/personal/resetPassword.vue';
import login from 'components/login/login.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSwiper);
Vue.use(Vuex);
const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',      // history模式
  scrollBehavior (to, from, savedPosition) {  // 路由切换的时候页面回到顶部,第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/index',
      name: 'index',
      components: {
        top: header,
        content: index,
        footer: footer
      }
    },
    {
      path: '/wordlist',
      name: 'wordlist',
      components: {
        content: wordlist
      }
    },
    {
      path: '/evidence',
      name: 'evidence',
      components: {
        content: evidence
      }
    },
    {
      path: '/legal',
      name: 'legal',
      components: {
        content: legal
      }
    },
    {
      path: '/personal',
      name: 'personal',
      // meta: {
      //   requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      // },
      components: {
        content: personal,
        footer: footer
      }
    },
    {
      path: '/wordDetail/:id',
      name: 'wordDetail',
      components: {
        content: wordDetail
      }
    },
    {
      path: '/personalDetail',
      name: 'personalDetail',
      components: {
        content: personalDetail
      }
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      components: {
        content: resetPassword
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        requireAuth: false
      },
      components: {
        content: login
      }
    }
  ]
});

// const store = new Vuex.Store({
//   state: {
//     token: false
//   },
//   mutations: {
//     setToken (state, bool) {
//       state.token = bool
//     }
//   }
// })
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//       next();
//     } else {
//       next({
//         path: '/login'
//         // query: {redirect: to.personal}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       });
//     };
//   } else {
//     next();
//   };
// });
router.push('/index');

new Vue({
  router,
  // store,
  render: (h) => h(App)
}).$mount('#app');
