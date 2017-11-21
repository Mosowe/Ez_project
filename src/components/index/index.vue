<template>
  <div class="new">
    <div class="title">
      <h2>最新作品</h2>
      <router-link to="" class="more">查看更多</router-link>
    </div>
    <vlist :list="wordlist"></vlist>
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
        wordlist: []
      };
    },
    created () {
      this.$http.get('/api/wordlist').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          for (var n = 0; n < 3; n++) {
            this.wordlist.push(response.data.data[n]);
          }
//          this.wordlist = response.data.data;
        }
      });
    }
  };
</script>

<style>
.new{ overflow: hidden; width: 94%; padding: 10px 3%;}
.title{ width: 100%; margin-bottom: 15px; overflow: hidden}
.title h2{ font-weight: normal; font-size: 16px; float: left;}
.title .more{ display: block; float: right; font-size: 12px; color: #007aff; padding: 3px 5px; border: 1px solid #007aff; border-radius: 3px;}
</style>
