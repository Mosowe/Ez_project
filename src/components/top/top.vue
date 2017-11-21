<template>
    <div id="top" v-if="topName">
      <span @click="routerBack" class="fl ion ion-ios-undo ion-size18"></span>
      {{ topName }}
      <span class="fr ion ion-navicon ion-size24" v-if="topNav"></span>
      <nav v-if="topNav">
        <div class="navbox">
          <span v-for="item in topNav">{{ item }}</span>
        </div>
      </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        topName: {
          type: String
        },
        topNav: {
          type: Array
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
  #top nav{ overflow: hidden; width: 100%; height: 500px; position: absolute; left: 0; top: 41px;}
  #top nav .navbox{ overflow: hidden; float: right; width: 50%; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px #ccc}
</style>
