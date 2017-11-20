<template>
  <div class="detail">
    <h2>{{ this.$route.params.detailId.title }}</h2>
    <span>{{ this.$route.params.detailId.time }}</span>
    <p>{{ this.$route.params.detailId.link }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style type="text/css">
.detail{ overflow: hidden; width: 94%; margin: 10px 3%;}
.detail h2{ text-align: center; font-size: 24px; margin-bottom: 15px;}
.detail span{ display: block; width: 100%; text-align: right; font-size: 12px; margin-bottom: 20px; color: #666666}
.detail p{ font-size: 12px; color: #000; line-height: 16px; text-align: justify;}
</style>
