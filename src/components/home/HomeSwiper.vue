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
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }

}
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
  