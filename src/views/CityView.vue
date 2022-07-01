<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import CityHeader from "@/components/city/CityHeader"
import CitySearch from "@/components/city/CitySearch"
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="scss" scoped>
</style>