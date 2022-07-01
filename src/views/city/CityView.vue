<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityAlphabet></CityAlphabet>
  </div>
</template>
   
<script>
import CityHeader from "@/views/city/components/CityHeader.vue"
import CitySearch from "@/views/city/components/CitySearch.vue"
import CityList from "@/views/city/components/CityList.vue"
import CityAlphabet from "@/views/city/components/CityAlphabet.vue"
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="scss" scoped>
</style>