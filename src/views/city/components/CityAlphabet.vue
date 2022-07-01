<template>
  <ul class="list">
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/varibles.scss';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
