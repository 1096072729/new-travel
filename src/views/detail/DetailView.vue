<template>
  <div class="detail">

    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>

  </div>
</template>

<script>
// @ is an alias to /src

import DetailBanner from '@/views/detail/components/DetailBanner.vue'
import axios from 'axios'
// import { mapState } from 'vuex'

export default {
  name: 'DetailView',

  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('http://localhost:8080/api/detail').then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {

      if (res.data) {
        console.log(res)
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {

    this.getDetailInfo()
  },
  components: {
    DetailBanner
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>
