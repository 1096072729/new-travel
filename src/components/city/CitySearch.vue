<template>
  <div class="city-search">
    <input
      class="search-input"
      type="text"
      placeholder="输入城市名或拼音"
    >
  </div>
</template>

<script>
export default {
  name: 'CitySearch',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/varibles.scss';
.city-search {
  padding: 0 0.1rem;
  height: 0.72rem;
  background-color: $bgColor;
  .search-input {
    box-sizing: border-box;
    line-height: 0.62rem;
    height: 0.62rem;
    width: 100%;
    height: 0.62rem;
    text-align: center;
    color: #666;
    padding: 0 0.1rem;
  }
}
</style>
