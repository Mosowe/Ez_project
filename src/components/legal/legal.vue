<template>
  <div class="content">
    <vlist :list="legal" :topName="topName"></vlist>
  </div>
</template>

<script type="text/ecmascript-6">
  import vlist from '../../components/list/list.vue';
  const ERR_OK = 0;
  export default {
    components: {
      vlist
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
</style>
