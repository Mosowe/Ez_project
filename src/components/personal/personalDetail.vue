<template>
    <div class="personalDetail content">
      <vtop :topName="user.name"></vtop>
      <div class="per_cho per_detail">
        <router-link to="" class="photo">头像<img :src="user.userPhoto" height="40"/></router-link>
      </div>
      <div class="per_cho per_detail">
        <router-link to="">昵称<em>{{ user.userName }}</em></router-link>
        <router-link to="">手机<em>{{ user.userId }}</em></router-link>
        <router-link to="">钱包</router-link>
        <router-link to="">银行卡</router-link>
        <router-link to="/resetPassword">修改密码<em class="ion ion-ios-arrow-right"></em></router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import vtop from '../top/top.vue';
  const ERR_OK = 0;
  export default {
    components: {
      vtop
    },
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
  .per_detail .photo{ vertical-align: middle; padding: 0; line-height: 40px;}
  .per_detail .photo img{ float: right}
  .per_detail em{ float: right}
</style>
