<template>
  <div class="content">
    <vtop :topName="topName"></vtop>
    <vlist :list="wordlist"></vlist>
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
        wordlist: {}
      };
    },
    created () {
      this.$http.get('/api/wordlist').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.wordlist = response.data.data;
          this.topName = response.data.name;
        }
      });
    }
  };
</script>

<style>

</style>
