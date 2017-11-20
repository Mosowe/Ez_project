<template>
    <div class="newproject">
      <router-link :to="{name: 'wordDetail', params: {detailId:item}}" class="list" v-for="item in wordlist">
        <h3>{{item.title}}</h3>
        <p>{{item.link}}</p>
        <span>{{item.time}}</span>
      </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      wordlist: {
        type: Object
      }
    }
  };
</script>

<style>
  .newproject{ overflow: hidden; margin-bottom: 50px;}
  .newproject .list{ overflow: hidden; width: 100%; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid rgba(0,0,0,0.3); display: block}
  .newproject h3{ font-size: 14px; color: #000; margin-bottom: 5px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;}
  .newproject p{ font-size: 12px; color: #666666; overflow: hidden; width: 100%; line-height: 20px; max-height: 40px;}
  .newproject span{ display: block; text-align: right; font-size: 12px; color: #666666; margin-top: 5px;}
</style>
