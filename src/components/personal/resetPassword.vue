<template>
    <div id="resetPwd" class="content">
      <vtop :topName="topName"></vtop>
      <label>
        <span class="ion ion-android-lock ion-size14"></span>
        <input type="text" placeholder="原密码"/>
      </label>
      <label>
        <span class="ion ion-android-lock ion-size14"></span>
        <input type="text" placeholder="新密码"/>
      </label>
      <label>
        <span class="ion ion-android-lock ion-size14"></span>
        <input type="text" placeholder="确认新密码"/>
      </label>
      <div class="warning">错误提示</div>
      <button type="submit">提交</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import vtop from '../top/top.vue';
  export default {
    components: {
      vtop
    },
    data () {
      return {
        topName: '密码修改'
      };
    }
  };
</script>

<style type="text/css">
  #resetPwd label{ display: block; margin: 10px auto; width: 80%; border: 1px solid #eee; border-radius: 5px;}
  #resetPwd label span{ width: 10%; float: left; text-align: center; height: 30px; line-height: 30px; color: #007aff}
  #resetPwd input{ width: 90%; border: none; line-height: 30px; outline: none}
  #resetPwd .warning{  width: 80%; margin: 0 auto; height: 20px; line-height: 20px; color: red}
  #resetPwd button{ display: block; width: 80%; margin: 20px auto; outline: none; background-color: #007aff; color: #fff; border: none; border-radius: 5px; padding: 7px 0;}
</style>
