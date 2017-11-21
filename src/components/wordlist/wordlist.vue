<template>
  <div class="content">
    <vlist :list="wordlist" :topName="topName" :topNav="topNav"></vlist>
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
        topNav: null,
        wordlist: {}
      };
    },
    created () {
      this.$http.get('/api/wordlist').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.wordlist = response.data.data;
          this.topName = response.data.name;
          this.topNav = response.data.nav;
        }
      });
    }
  };
</script>

<style>

</style>
