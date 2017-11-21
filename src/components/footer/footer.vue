<template>
  <footer>
    <router-link to="/index"><div class="icon ion-home ion-size20"></div>首页</router-link>
    <router-link to="/wordlist"><div class="icon ion-document-text ion-size20"></div>作品列表</router-link>
    <router-link to="/evidence"><div class="icon ion-ios-compose ion-size20"></div>学习笔记</router-link>
    <router-link to="/legal"><div class="icon ion-chatbox ion-size20"></div>杂谈</router-link>
    <router-link to="/personal"><div class="icon ion-person ion-size20"></div>个人中心</router-link>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style type="text/css">
  @import "../../common/css/icon.css";
  footer {
    overflow: hidden;
    width: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    bottom: 0;
    background-color: #f9f9f9;
    border: 1px solid #E1E0E0;
    box-sizing: border-box;
    display: flex;
  }

  footer a {
    flex: 1;
    padding: 0 0 .2rem 0;
    font-size: .8rem;
    color: #6e6e6e;
    text-align: center
  }

  footer a.active{ color: #3399FF;}
</style>
