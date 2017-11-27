<template>
<div class="personal">
  <div class="per_show">
    <div class="per_bg"></div>
    <i class="imgbox"><img :src="imgurl"></i>
    <span v-if="name">{{ name }}</span>
    <router-link to="/login" v-else><span>请登陆</span></router-link>
  </div>
  <div class="per_cho">
    <router-link to="/personalDetail"><span class="ion ion-ios-person-outline"></span>个人信息</router-link>
  </div>
  <div class="per_cho">
    <router-link to=""><span class="ion ion-compose"></span>编辑</router-link>
  </div>
  <div class="per_cho">
    <router-link to=""><span class="ion ion-ios-help-outline"></span>使用帮助</router-link>
    <router-link to=""><span class="ion ion-happy-outline"></span>关于软件</router-link>
  </div>
  <div class="per_cho">
    <a @click="exit"><span class="ion ion-android-exit"></span>退出登陆</a>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import {getCookie, delCookie} from 'static/js/myPlug'
  export default {
    mounted () {
//      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if (getCookie('name') === '') {
        this.$router.push('/login')
      }
      this.name = getCookie('nc')
      this.imgurl = getCookie('imgurl')
    },
    data () {
      return {
        name: '',
        imgurl: ''
      }
    },
    methods: {
      exit: function () {
        delCookie('name');
        delCookie('imgurl');
        delCookie('password');
        delCookie('nc');
        this.$router.push('/login')
      }
    }
  };
</script>

<style type="text/css">
.personal{ overflow: hidden; width: 100%;}
.personal .per_show{ overflow: hidden; padding: 30px 0; position: relative}
.personal .per_bg {
  overflow: hidden;
  background: url("0.jpg") no-repeat center;
  background-size: cover;
  filter: blur(5px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.personal .imgbox{ margin: 5px auto; background: rgba(0,0,0,0.6); display: block; overflow: hidden; width: 50px; height: 50px; border-radius: 50%; position: relative}
.personal .imgbox:after{ content: '头像'; color: #fff; font-style: normal; text-align: center; display: block}
.personal .imgbox img{ display: block; height: 100%;}
.personal .per_show img{ filter: blur(0px); position: relative; display: block; margin: 0 auto; z-index: 2; margin-bottom: 10px;}
.personal .per_show span{ filter: blur(0px); position: relative; display: block; width: 100%; text-align: center; z-index: 2; font-size: 18px; color: #fff}
</style>
