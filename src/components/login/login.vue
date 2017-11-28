<template>
    <div id="login" class="content">
      <vtop :backPath="backPath"></vtop>
      <label>
        <span class="ion ion-person ion-size14"></span>
        <input type="text" placeholder="用户名" id="username" v-model="username"/>
      </label>
      <label>
        <span class="ion ion-android-lock ion-size14"></span>
        <input type="password" placeholder="密码" id="userpsd" v-model="userpsd"/>
      </label>
      <span @click="login" class="button">登陆</span>
    </div>
</template>

<script type="text/ecmascript-6">
  import vtop from '../top/top.vue';
  import {dialog, setCookie, getCookie} from 'static/js/myPlug';
  export default {
    mounted () {
//      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if (getCookie('name')) {
        this.$router.push('/personal')
      }
    },
    components: {
      vtop
    },
    data () {
      return {
        backPath: 'index',
        username: '',
        userpsd: ''
      };
    },
    methods: {
      login () {
        this.$http.get('/api/user').then((response) => {
          response = response.body;
          if (this.username === response.data.userId && this.userpsd === response.data.userPassword) {
//            this.$store.commit('setToken', 'true');
            const that = this;
            dialog('登陆成功', function () {
              setCookie('name', that.username, 7);
              setCookie('password', that.userpsd, 7)
              setCookie('imgurl', response.data.userPhoto, 7)
              setCookie('nc', response.data.userName, 7)
              that.$router.push({
                name: 'personal'
              })
            })
          } else {
            dialog('登陆失败')
          }
        })
      }
    }
  };
</script>

<style type="text/css">
  #login label{ display: block; margin: 10px auto; width: 80%; border: 1px solid #eee; border-radius: 5px;}
  #login label span{ width: 10%; float: left; text-align: center; height: 30px; line-height: 30px; color: #007aff}
  #login input{ width: 90%; border: none; line-height: 30px; outline: none}
  #login .button{ text-align: center; display: block; width: 80%; margin: 20px auto; outline: none; background-color: #007aff; color: #fff; border: none; border-radius: 5px; padding: 7px 0;}

</style>
