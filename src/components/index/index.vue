<template>
  <v-list></v-list>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    component: {
//      v_list
    },
    data () {
      return {
        wordlist: {}
      };
    },
    created () {
      this.$http.get('/api/wordlist').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.wordlist = response.data;
        }
      });
    }
  };
</script>

<style>
.new{ overflow: hidden; width: 94%; padding: 10px 3%;}
  .title{ width: 100%; margin-bottom: 15px; overflow: hidden}
  h2{ font-weight: normal; font-size: 16px; float: left;}
  .more{ display: block; float: right; font-size: 12px; color: #007aff; padding: 3px 5px; border: 1px solid #007aff; border-radius: 3px;}
  .newproject{ overflow: hidden; margin-bottom: 50px;}
  .list{ overflow: hidden; width: 100%; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid rgba(0,0,0,0.3); display: block}
  h3{ font-size: 14px; color: #000; margin-bottom: 5px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;}
  p{ font-size: 12px; color: #666666; width: 100%; line-height: 20px; max-height: 40px;}
  span{ display: block; text-align: right; font-size: 12px; color: #666666; margin-top: 5px;}
</style>
