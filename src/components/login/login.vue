<template>
    <div id="login" class="content">
      <vtop></vtop>
      <label>
        <span class="ion ion-person ion-size14"></span>
        <input type="text" placeholder="用户名" id="username"/>
      </label>
      <label>
        <span class="ion ion-android-lock ion-size14"></span>
        <input type="text" placeholder="密码" id="userpsd"/>
      </label>
      <div class="warning">错误提示</div>
      <button type="submit" onclick="login">登陆</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import vtop from '../top/top.vue';

  export default {
    components: {
      vtop
    },
    data () {
      return {
        user: {}
      };
    },
    methods: {
      login () {
        this.$store.commit('setToken', 'true');     // 改变token状态
        let redirect = decodeURIComponent(this.$route.query.redirect || '/');  // 获取登录成功后要跳转的路由。
        this.$router.push({
          path: redirect
        });
      }
    }
  };
</script>

<style type="text/css">
  #login label{ display: block; margin: 10px auto; width: 80%; border: 1px solid #eee; border-radius: 5px;}
  #login label span{ width: 10%; float: left; text-align: center; height: 30px; line-height: 30px; color: #007aff}
  #login input{ width: 90%; border: none; line-height: 30px; outline: none}
  #login .warning{  width: 80%; margin: 0 auto; height: 20px; line-height: 20px; color: red}
  #login button{ display: block; width: 80%; margin: 20px auto; outline: none; background-color: #007aff; color: #fff; border: none; border-radius: 5px; padding: 7px 0;}

</style>
