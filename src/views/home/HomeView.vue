<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
    <!-- <HomeSwiper :list="RotationList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :scenicSpotsList="scenicSpotsList"></HomeRecommend> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/views/home/components/HomeHeader.vue'
import HomeSwiper from '@/views/home/components/HomeSwiper.vue'
import HomeIcons from '@/views/home/components/HomeIcons.vue'
import HomeRecommend from '@/views/home/components/HomeRecommend.vue'
import HomeWeekend from '@/views/home/components/HomeWeekend.vue'

import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
  ,
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  }
  ,
  methods: {
    //获取home数据
    getHomeInfo () {
      axios.get("http://localhost:8080/api/home?city=" + this.city)
        .then((res) => {
          this.getHomeInfoSuc(res);
        })

      // axios.get('https://blog.csdn.net/xuezhangmen/article/details/121395036')
      //   .then(this.getHomeInfoSuc())
    }
    ,
    computed: {
      ...mapState(['city'])
    },
    //成功操作
    getHomeInfoSuc (res) {
      const data = res.data;
      if (data.length !== 0) {
        //获取各个数据home的组件数据
        this.weekendList = data.weekendList;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;

      }
    }
  }
  ,
  mounted () {
    this.lastCity = this.city;
    this.getHomeInfo();
  }
  ,
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();

    }

  }

}
</script>
