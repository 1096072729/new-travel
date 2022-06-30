<template>
  <div class="home-swiper">
    <swiper
      v-if="showSwiper"
      :modules="modules"
      :pagination="{ clickable: true }"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="item in list"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt=""
        >
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default ({
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // pagination: '.swiper-pagination',
        loop: true
      },
      list: [{
        id: 1, imgUrl: 'https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/7603042338b1215e3e8c5a32fce67933.jpg'
      }, {
        id: 2, imgUrl: '	https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg'
      }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }

})
</script>

<style lang="scss" scoped>
.home-swiper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
}
.swiper-img {
  width: 100%;
}
</style>
  