<template>
  <div class="home-weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class="item-img"
            :src="item.imgUrl"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>

export default {

  name: "HomeWeekend",
  data () {
    return {
      weekendList: [
        { id: 1, imgUrl: 'https://img1.qunarzz.com/sight/p0/1508/97/ea51af995c4d4de85c53855302b2f5af.water.jpg_256x160_aed534fc.jpg', title: '旅游度假庄园', desc: '外地游客上岛有两个码头：东渡邮轮码头和海沧嵩屿码头东渡邮轮码头至鼓浪屿三丘田码头，在航班时刻方面，东渡邮轮码头首班船7时10分，夏季末班船18时30分，冬季17时30分；从鼓浪屿三丘田、内厝澳返回东渡邮轮码头的船班时刻首班船7时20分，夏季末班船18时40分，冬季17时40游客运航线同时开通，每小时两班。另外，面向居了回东' },
        { id: 2, imgUrl: 'https://img1.qunarzz.com/sight/p0/1508/97/ea51af995c4d4de85c53855302b2f5af.water.jpg_256x160_aed534fc.jpg', title: '旅游度假庄园', desc: '外地游客上岛有两个码头：东渡邮轮码头和海沧嵩屿码头东渡邮轮码头至鼓浪屿三丘田码头，在航班时刻方面，东渡邮轮码头首班船7时10分，夏季末班船18时30分，冬季17时30分；从鼓浪屿三丘田、内厝澳返回东渡邮轮码头的船班时刻首班船7时20分，夏季末班船18时40分，冬季码头至鼓浪屿内厝澳码头旅游客运航线同时开通，每小时两班，暂不夜航。游客在鼓浪屿游览，如果错过了回东' },
        { id: 3, imgUrl: 'https://img1.qunarzz.com/sight/p0/2003/98/985f7f9721ace766a3.img.jpg_256x160_202e27f7.jpg', title: '旅游度假庄园', desc: '外地游客上岛有两个码头：东渡邮轮码头和海沧嵩屿码头东渡邮轮码头至鼓浪屿三丘田码头，在航班时刻方面，东渡邮轮码头首班船7时10分，夏季末班船18时30分，冬季17时30分；从鼓浪屿三丘田、内厝澳返回东渡邮轮码头的船班时刻首班船7时20分，夏季末班船18时40分，冬季17时40分。海沧嵩屿码，暂不夜航。游客在鼓浪屿游览，如果错过了回东' },
        { id: 4, imgUrl: 'https://img1.qunarzz.com/sight/p0/2003/98/985f7f9721ace766a3.img.jpg_256x160_202e27f7.jpg', title: '旅游度假庄园', desc: '外地游客上岛有两个码头：东渡邮轮码头和海沧嵩屿码头东渡邮轮码头至鼓浪屿三丘田码头，在航班时刻方面，东渡邮轮码头首班船7时10分，夏季末班船18时30分，冬季17时30分；从鼓浪屿三丘田、内厝澳返回东渡邮轮码头的船班时刻首班船7时20分，夏季末班船18时40分，冬向居民和游客服务，每小时1班，暂不夜航。游客在鼓浪屿游览，如果错过了回东' },
        { id: 5, imgUrl: 'https://img1.qunarzz.com/sight/p0/1508/97/ea51af995c4d4de85c53855302b2f5af.water.jpg_256x160_aed534fc.jpg', title: '旅游度假庄园', desc: '外地游客上岛有两个码头：东渡邮轮码头和海沧嵩屿码头东渡邮轮码头至鼓浪屿三丘田码头，在航班时刻方面，东渡邮轮码头首班船7时10分，夏季末班船18时30分，冬季17时30分；从鼓浪屿三丘田、内厝澳返回东渡邮轮码头的船班时刻首班船7时20分，夏季末班船18时40分，冬季17时40分。海沧嵩屿码头至鼓浪屿内厝澳码头旅游客运航线同时开时1班，暂不夜航。游客在鼓浪屿游览，如果错过了回东' }
      ]
    }
  }

}
</script>

<style lang="scss">
// .home-weekend {
//   .title {
//     margin-top: 0.2rem;
//     line-height: 0.8rem;
//     background: #eee;
//     text-indent: 0.2rem;
//   }
//   .item {
//     .item-img {
//       width: 100%;
//     }

//     .item-title {
//       line-height: 0.54rem;
//       overflow: hidden;
//       white-space: nowrap;
//       text-overflow: ellipsis;
//       width: 100%;
//     }
//     .item-tesc {
//       line-height: 0.4rem;
//       color: #ccc;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//       width: 100%;
//     }
//   }
// }
.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>