<template>
  <div>
    <vtop :topName="topName"></vtop>
    <div class="newproject">
      <router-link :to="{name: 'wordDetail', params: {id:item}}" class="list" v-for="item in list">
        <img :src="item.imgUrl" v-if="item.imgUrl">
        <div class="listCont">
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
          <span>{{item.time}}</span>
        </div>
      </router-link>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import vtop from '../../components/top/top.vue';
  import vfooter from '../../components/footer/footer.vue';
  export default {
    components: {
      vtop,
      vfooter
    },
    props: {
      list: {
        type: Object
      },
      topName: {
        type: String
      }
    }
  };
</script>

<style type="text/css">
  .newproject{ overflow: hidden; margin-bottom: 50px;}
  .newproject .list{ overflow: hidden; width: 100%; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid rgba(0,0,0,0.3); display: block}
  .newproject img{ display: block; float: left; width: 25%; margin-right: 3%;}
  .newproject .listCont{ overflow: hidden;}
  .newproject h3{ font-size: 14px; color: #000; margin-bottom: 5px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;}
  .newproject p{ font-size: 12px; color: #666666; overflow: hidden; width: 100%; line-height: 20px; max-height: 40px;}
  .newproject span{ display: block; text-align: right; font-size: 12px; color: #666666; margin-top: 5px;}
</style>
