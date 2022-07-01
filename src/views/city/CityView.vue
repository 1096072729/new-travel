<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></CityList>
    <CityAlphabet
      :cities="cities"
      @change="handleLetterChange"
    ></CityAlphabet>
  </div>
</template>
   
<script>
import CityHeader from "@/views/city/components/CityHeader.vue"
import CitySearch from "@/views/city/components/CitySearch.vue"
import CityList from "@/views/city/components/CityList.vue"
import CityAlphabet from "@/views/city/components/CityAlphabet.vue"
import axios from 'axios'
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  }
  ,
  methods: {
    getCityInfo () {
      axios.get("http://localhost:8080/api/city")
        .then((res) => {

          this.getCityInfoSuc(res)
        })

    },
    getCityInfoSuc (res) {

      let data = res.data;
      if (data.length !== 0) {
        this.cities = data.cities;
        this.hotCities = data.hotCities;
        console.log(data)
      }
    },
    handleLetterChange (letter) {
      this.letter = letter;

    }
  }
  ,
  mounted () {
    this.getCityInfo()

  }
}
</script>

<style lang="scss" scoped>
</style>