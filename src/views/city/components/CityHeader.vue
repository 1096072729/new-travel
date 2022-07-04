<template>
  <div class="city-header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe685;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>

export default {
  name: 'CityHeader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/varibles.scss';
.city-header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  font-size: 0.36rem;
  color: #fff;
  background-color: $bgColor;
  .header-back {
    position: absolute;
    widows: 0.64rem;
    text-align: center;
    font-size: 0.5rem;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>
