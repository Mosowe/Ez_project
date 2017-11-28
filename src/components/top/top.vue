<template>
    <div id="top">
      <span @click="routerBack" class="fl ion ion-ios-undo ion-size18" v-if="backIcon"></span>
      <em v-if="topName">{{ topName }}</em>
      <span @click="menushow" class="fr ion ion-navicon ion-size26" v-if="topNav"></span>
      <nav v-if="topNav" @click="menuhide">
        <div class="navbox">
          <span v-for="(item,index) in topNav" data-item="mmde" id="item" @click="menuchoose(index)">{{ item }}</span>
        </div>
      </nav>
    </div>
</template>

<script type="text/ecmascript-6">
  import jq from 'jquery';
  export default {
    props: {
      backPath: '',
      topName: {},
      topNav: {},
      backIcon: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      routerBack () {
        if (this.backPath !== 'index') {
          this.$router.go(-1);
        } else {
          this.$router.push('/index')
        }
      },
      menushow (e) {
        e.stopPropagation();
        jq('nav').slideToggle();
      },
      menuhide () {
        jq('nav').slideUp();
      },
      menuchoose (e) {
        event.stopPropagation();
        jq('nav span').eq(e).addClass('active');
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
  #top nav {
    display: none;
    overflow: hidden;
    width: 100%;
    height: 500px;
    position: absolute;
    left: 0;
    top: 41px;
  }

  #top nav .navbox {
    overflow: hidden;
    float: right;
    width: 50%;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 10px #ccc; padding: 5px 0;
  }
 #top nav span {
   display: block;
   width: 85%;
   margin: 0 auto;
   text-align: left;
   font-size: 12px;
   padding: 10px 5%;
   border-bottom: 1px solid #eee;
 }
  #top nav span.active{ color: #007aff}
  #top em{ font-size: 16px}
</style>
