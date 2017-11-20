<template>
    <div id="top">
      <span @click="routerBack" class="fl ion ion-ios-undo ion-size18"></span>
      详情浏览
      <span class="fr ion ion-navicon ion-size24"></span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      methods: {
        routerBack () {
          this.$router.go(-1);
        }
      }
    };
</script>

<style type="text/css">
  #top{ overflow: hidden; text-align: center; width: 94%; padding: 5px 3%; line-height:20px; height: 20px;}
  #top span{ margin: 0}
</style>
