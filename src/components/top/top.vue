<template>
    <div id="top">
      <span @click="routerBack" class="fl ion ion-ios-undo ion-size18"></span>
      {{ topName }}
      <span class="fr ion ion-navicon ion-size24"></span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        topName: {
          type: String,
          default: '列表1'
        }
      },
      methods: {
        routerBack () {
          this.$router.go(-1);
        }
      }
    };
</script>

<style type="text/css">
  #top {
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    width: 94%;
    padding: 10px 3%;
    line-height: 20px;
    height: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }

  #top span{ margin: 0}
</style>
