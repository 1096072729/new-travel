<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe685;</span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe685;</span>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/varibles.scss';
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .header-abs-back {
    font-size: 0.4rem;
    color: #fff;
  }
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  font-size: 0.36rem;
  color: #fff;
  background-color: $bgColor;
  .header-fixed-back {
    position: absolute;
    widows: 0.64rem;
    text-align: center;
    font-size: 0.5rem;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>