<template>
  <div class="home-recommend">
    <div class="recommend-title">
      热销推荐
    </div>
    <div>
      <ul>
        <li
          class="item"
          v-for="item in scenicSpotsList "
          :key="item.id"
        >
          <img
            class="scenic-spots-img"
            :src="item.imgUrl"
            alt=""
          >
          <div class="scenic-spots-info">
            <div class="scenic-spots-name">{{item.name}}</div>
            <div class="scenic-spots-desc">{{item.desc}}</div>
            <button class="scenic-spots-button">查看详情</button>
          </div>
        </li>
      </ul>

    </div>


  </div>
</template>

<script>

export default {

  name: "HomeRecommend",
  data () {
    return {
      scenicSpotsList: [
        { id: 1, name: '黄山', desc: '风景如画风景如画风景如画风景如画风景如画风景如画', imgUrl: 'https://img1.qunarzz.com/sight/p0/1911/46/469df4d45b3710b4a3.img.jpg_256x160_efae8956.jpg' },
        { id: 2, name: '黄山', desc: '风景如画', imgUrl: 'https://img1.qunarzz.com/sight/p0/1911/46/469df4d45b3710b4a3.img.jpg_256x160_efae8956.jpg' },
        { id: 3, name: '黄山', desc: '风景如画', imgUrl: 'https://img1.qunarzz.com/sight/p0/1911/46/469df4d45b3710b4a3.img.jpg_256x160_efae8956.jpg' },
        { id: 4, name: '黄山', desc: '风景如画', imgUrl: 'https://img1.qunarzz.com/sight/p0/1911/46/469df4d45b3710b4a3.img.jpg_256x160_efae8956.jpg' },
      ]
    }
  }

}
</script>

<style lang="scss">
.home-recommend {
  .recommend-title {
    margin-top: 0.2rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }
  .item {
    display: flex;
    width: 100%;
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    padding-bottom: 0.1rem;
    min-width: 0;
    .scenic-spots-img {
      padding: 0.2rem;
    }
    .scenic-spots-info {
      flex: 1;
      padding: 0.1rem;
      .scenic-spots-name {
        margin-top: 0.1rem;
        color: black;
        padding: 0.1rem 0;
        font-style: 0.54rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .scenic-spots-desc {
        padding: 0.1rem 0;
        color: rgb(90, 90, 90);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .scenic-spots-button {
        line-height: 0.44rem;
        margin-top: 0.16rem;
        background: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
      }
    }
  }
}
</style>