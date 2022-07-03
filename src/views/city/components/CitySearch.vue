<template>
  <div>
    <div class="city-search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
        >{{item.name}}</li>
        <li
          class="search-item border-bottom"
          v-show="!list.length"
        >
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  conputed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {

      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = [];
        return
      }
      this.timer = setTimeout(() => {
        const result = [];

        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          });
        }
        this.list = result;
      }, 100)
    }
  },
  mounted () {

    this.BScroll = new BScroll(this.$refs.search)
  }
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
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>
