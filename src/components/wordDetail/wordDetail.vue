<template>
  <div>
    <vtop :topName="this.$route.params.id.name"></vtop>
    <div class="detail content">
      <h2>{{ this.$route.params.id.title }}</h2>
      <span>{{ this.$route.params.id.time }}</span>
      <img :src="this.$route.params.id.imgUrl">
      <p>{{ this.$route.params.id.content }}</p>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import vtop from '../../components/top/top.vue';
  export default {
    components: {
      vtop
    }
  };
</script>

<style type="text/css">
.detail h2{ text-align: center; font-size: 24px; margin-bottom: 15px;}
.detail span{ display: block; width: 100%; text-align: right; font-size: 12px; margin-bottom: 20px; color: #666666}
.detail p{ font-size: 12px; color: #000; line-height: 16px; text-align: justify;}
.detail img{ display: block; width: 100%; margin: 10px 0;}
</style>
