<template>
    <div class="personalDetail content">
      <vtop :topName="topName"></vtop>
      <div class="per_cho per_detail">
        <router-link to="" class="photo">头像<i class="imgbox"><img :src="imgurl"/></i></router-link>
      </div>
      <div class="per_cho per_detail">
        <router-link to="">昵称<em>{{ name }}</em></router-link>
        <router-link to="">手机<em>{{ id }}</em></router-link>
        <router-link to="">钱包</router-link>
        <router-link to="">银行卡</router-link>
        <router-link to="/resetPassword">修改密码<em class="ion ion-ios-arrow-right"></em></router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import vtop from '../top/top.vue';
  import {getCookie} from 'static/js/myPlug'
  export default {
    components: {
      vtop
    },
    mounted () {
//      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if (getCookie('name') === '') {
        this.$router.push('/login')
      }
      this.name = getCookie('nc')
      this.imgurl = getCookie('imgurl')
      this.id = getCookie('name')
    },
    data () {
      return {
        topName: '个人中心',
        name: '',
        imgurl: '',
        id: ''
      }
    }
  };
</script>

<style type="text/css">
  .per_detail{ width: 100%; padding:0}
  .per_detail .photo{ vertical-align: middle; line-height: 40px;}
  .per_detail .photo .imgbox{ float: right; background: rgba(0,0,0,0.6); display: block; overflow: hidden; width: 40px; height: 40px; border-radius: 50%; position: relative}
  .per_detail .photo .imgbox:after{ content: '头像'; color: #fff; font-style: normal; text-align: center; display: block}
  .per_detail .photo img{ display: block; height: 100%;}
  .per_detail em{ float: right}
</style>
