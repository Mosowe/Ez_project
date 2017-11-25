<template>
    <div id="login" class="content">
      <vtop></vtop>
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
  import {dialog} from 'static/js/index';
  export default {
    components: {
      vtop
    },
    data () {
      return {
        username: '',
        userpsd: ''
      };
    },
    methods: {
      login () {
        this.$http.get('/api/user').then((response) => {
          response = response.body;
          if (this.username === response.data.userId && this.userpsd === response.data.userPassword) {
            this.$store.commit('setToken', 'true');
            const that = this;
            dialog('登陆成功', function () {
              that.$router.push({
                name: 'personal',
                params: {userId: that.username}
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
  #login .warning{  width: 80%; margin: 0 auto; height: 20px; line-height: 20px; color: red}
  #login .button{ text-align: center; display: block; width: 80%; margin: 20px auto; outline: none; background-color: #007aff; color: #fff; border: none; border-radius: 5px; padding: 7px 0;}

</style>
