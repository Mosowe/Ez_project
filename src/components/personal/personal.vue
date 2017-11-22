<template>
<div class="personal">
  <div class="per_show">
    <div class="per_bg"></div>
    <img :src="user.userPhoto" width="50">
    <span>{{ user.userName }}</span>
  </div>
  <div class="per_cho">
    <router-link to="/personalDetail"><span class="ion ion-ios-person-outline"></span>个人信息</router-link>
  </div>
  <div class="per_cho">
    <router-link to=""><span class="ion ion-ios-help-outline"></span>使用帮助</router-link>
    <router-link to=""><span class="ion ion-compose"></span>意见反馈</router-link>
    <router-link to=""><span class="ion ion-happy-outline"></span>关于软件</router-link>
  </div>
  <div class="per_cho">
    <router-link to=""><span class="ion ion-android-exit"></span>退出登陆</router-link>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    data () {
      return {
        user: {}
      };
    },
    created () {
      this.$http.get('/api/user').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.user = response.data;
        };
      });
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
.personal .per_show img{ filter: blur(0px); position: relative; display: block; margin: 0 auto; z-index: 2; margin-bottom: 10px;}
.personal .per_show span{ filter: blur(0px); position: relative; display: block; width: 100%; text-align: center; z-index: 2; font-size: 18px; color: #fff}
</style>
