<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeSwiper from '@/components/home/HomeSwiper.vue'
import HomeIcons from '@/components/home/HomeIcons.vue'
export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  }
}
</script>
