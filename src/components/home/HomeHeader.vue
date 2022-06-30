<template>
  <div class="home-header">
    <div class="header-left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe651;</span>
      <input
        class="input-text"
        type="text"
        placeholder="输入热门旅游景点"
      >
    </div>
    <div class="header-right">
      三亚<span class="iconfont">&#xe665;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-header {
  display: flex;
  background-color: #00bcd4;
  line-height: 0.86rem;
  height: 0.86rem;
  color: #fff;
  .header-left {
    text-align: center;
    width: 0.64rem;
    float: left;
    font-size: 0.24rem;
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
    .input-text {
      padding-left: 0.2rem;
    }
  }
  .header-right {
    float: right;
    min-width: 1.04rem;
    padding: 0 0.1rem;
    text-align: center;
    color: #fff;
  }
}
</style>
