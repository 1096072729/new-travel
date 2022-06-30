<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommend></HomeRecommend>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeSwiper from '@/components/home/HomeSwiper.vue'
import HomeIcons from '@/components/home/HomeIcons.vue'
import HomeRecommend from '@/components/home/HomeRecommend.vue'
import HomeWeekend from '@/components/home/HomeWeekend.vue'
export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
