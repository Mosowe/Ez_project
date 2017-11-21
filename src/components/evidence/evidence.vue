<template>
  <div class="content">
    <vlist :list="evidence" :topName="topName"></vlist>
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
        evidence: {}
      };
    },
    created () {
      this.$http.get('/api/evidence').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.evidence = response.data.data;
          this.topName = response.data.name;
        }
      });
    }
  };
</script>

<style type="text/css">
</style>
