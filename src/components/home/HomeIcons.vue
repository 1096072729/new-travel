<template>
  <div class="home-icons">
    <Swiper v-if="this.iconList">
      <SwiperSlide
        v-for="(item,index) in pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="icon in item"
          :key="icon.id"
        >
          <div class="icon-img">
            <img
              class='icon-img-content'
              :src="icon.imgUrl"
              alt=""
            >
          </div>
          <div class="icon-desc">
            {{icon.desc}}
          </div>
        </div>


      </SwiperSlide>

    </Swiper>
  </div>
</template>

<script>
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data () {
    return {

    }
  },
  computed: {
    //计算iconList的页数
    pages () {
      console.log(this.iconList)
      const pages = [];
      if (this.iconList.length == 0) {
        return pages
      }
      for (let i = 0; i < this.iconList.length; i++) {
        let item = this.iconList[i];
        const page = Math.floor(i / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      }
      console.log(pages)

      return pages
    }
  },
  setup () {
    return {
      modules: [Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },

}
</script>

<style lang="scss">
.home-icons {
  overflow: hidden;
  margin-top: 0.1rem;
  .icon {
    float: left;
    margin-top: 0.1rem;
    box-sizing: border-box;
    width: 25%;
    .icon-img {
      .icon-img-content {
        width: 0.8rem;
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      text-align: center;
    }
  }
}
</style>