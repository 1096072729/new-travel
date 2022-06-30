<template>
  <div class="home-icons">
    <Swiper>
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
              :src="icon.iconImg"
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
  data () {
    return {
      iconlist: [{ id: 1, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 2, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' }
        ,
      { id: 3, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 4, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 5, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 6, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' }
        ,
      { id: 7, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 8, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 9, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 10, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' }
        ,
      { id: 11, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },
      { id: 12, iconImg: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png', desc: '热门景点' },

      ]
    }
  },
  computed: {
    pages () {
      const pages = [];
      for (let i = 0; i < this.iconlist.length; i++) {
        let item = this.iconlist[i];
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