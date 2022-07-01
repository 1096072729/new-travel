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
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeSwiper from '@/components/home/HomeSwiper.vue'
import HomeIcons from '@/components/home/HomeIcons.vue'
import HomeRecommend from '@/components/home/HomeRecommend.vue'
import HomeWeekend from '@/components/home/HomeWeekend.vue'

import axios from 'axios'


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
    }
  }
  ,
  methods: {
    //获取home数据
    getHomeInfo () {

      axios.post("http://localhost:8080/api/home").then((res) => {
        this.getHomeInfoSuc(res)
      })

      // axios.get('https://blog.csdn.net/xuezhangmen/article/details/121395036')
      //   .then(this.getHomeInfoSuc())
    }
    ,
    //成功操作
    getHomeInfoSuc (res) {
      const data = res.data;
      if (data.length !== 0) {
        //获取各个数据home的组件数据
        this.weekendList = data.weekendList
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList

      }
    }
  }
  ,
  mounted () {
    this.getHomeInfo()
  }

}
</script>
