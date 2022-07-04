<template>
  <div
    class="city-list wrapper"
    ref="wrapper"
  >
    <div>
      <div class="area">
        <div class="title border-top-bottom">
          当前城市
        </div>
      </div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.city}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-top-bottom">
          热门城市
        </div>
      </div>
      <div class="button-list">
        <div
          class="button-wrapper"
          v-for="item of hotCities"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          <div class="button">{{item.name}}</div>
        </div>

      </div>
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-top-bottom">
          {{key}}
        </div>
        <div
          class="item-list"
          v-for="(city) of item"
          :key="city.id"
          @click="handleCityClick(city.name)"
        >
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>




    </div>
  </div>

</template>

<script>

import BScroll from '@better-scroll/core'
import { mapState, mapMutations } from 'vuex'
// import PullUp from '@better-scroll/pull-up'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {

    handleCityClick (cityName) {
      // this.$store.dispatch('changeCity', cityName)
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  }
  ,
  mounted () {
    console.log(this.hotCities)
    this.bs = new BScroll('.wrapper', {
      pullUpLoad: true, click: true
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.bs.scrollToElement(element)
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/varibles.scss';
.city-list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0rem;
  bottom: 0;

  overflow: hidden;
  .title {
    line-height: 0.44rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .border-top-bottom {
    border-bottom: 2px solid #ccc;
  }
  .button-list {
    padding: 0.1rem 0.5rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-wrapper {
      width: 33.33%;
      float: left;
      .button {
        margin: 0.1rem;
        text-align: center;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;

      padding-left: 0.2rem;
    }
    .border-bottom {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
