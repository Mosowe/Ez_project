<template>
  <div class="content">
    <vtop :topName="topName"></vtop>
    <div class="newproject">
      <router-link :to="{name: 'wordDetail', params: {id:item}}" class="list" v-for="item in legal">
        <img :src="item.imgUrl" v-if="item.imgUrl">
        <div class="listCont">
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
          <span>{{item.time}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import vlist from '../../components/list/list.vue';
  import vtop from '../../components/top/top.vue';
  const ERR_OK = 0;
  export default {
    components: {
      vlist,
      vtop
    },
    data () {
      return {
        topName: null,
        legal: {}
      };
    },
    created () {
      this.$http.get('/api/legal').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.legal = response.data.data;
          this.topName = response.data.name;
        }
      });
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
