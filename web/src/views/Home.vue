<template>
  <div class="home">
    <swiper :options="swiperOption" loop="true">
      <swiper-slide>
        <img class="w-100" src="../assets/images/41eeba8d8279d79241a7c9e7b5d57b0b.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/92b37fe4ca9c32bfc961b1f0daa780a6.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/f33c0fc57920840fb7be498bd7fbc484.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>

    <!-- 图标导航 -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 pt-2" v-for="item in menu" :key="item.title">
          <i class="sprite" :class="item.className"></i>
          <div class="py-2">{{item.title}}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news, i) in category.newList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>
    
    <m-card icon="card-hero" title="英雄列表">

    </m-card>

    <m-card icon="video" title="精彩视频">

    </m-card>

    <m-card icon="read" title="图文攻略">

    </m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        autoplay: {
          delay: 3000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        loop: true
      },
      newsCats:[
        {
          name: '热门',
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '公告',
            title: '赛季奖励领取调整说明及未领取奖励补发公告',
            date: '01/09'
          }))
        },
        {
          name: '新闻',
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '新闻',
            title: '虎牙《偶像陪练团》俏皮风来袭，谭松韵与孤影上演鲁班大战',
            date: '01/09'
          }))
        },
        {
          name: '公告',
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '公告',
            title: '【已修复】游戏内加载界面卡住无法进入对局异常说明',
            date: '01/09'
          }))
        },
        {
          name: '活动',
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '活动',
            title: '王者新春年货节，组队消费活动赢好礼！',
            date: '01/09'
          }))
        },
        {
          name: '赛事',
          newList: new Array(5).fill({}).map(() => ({
            categoryName: '赛事',
            title: '2020年KPL春季转会期俱乐部挂牌名单公布',
            date: '01/09'
          }))
        },
      ],
      menu: [
        { title: "爆料站", className: "news" },
        { title: "故事站", className: "history" },
        { title: "周边商城", className: "market" },
        { title: "体验服", className: "experience" },
        { title: "新人专区", className: "newborn" },
        { title: "荣耀·传承", className: "glory" },
        { title: "模拟战资料库", className: "database" },
        { title: "王者营地", className: "camp" },
        { title: "公众号", className: "official" },
        { title: "版本介绍", className: "introduce" },
        { title: "对局环境", className: "environmental" },
        { title: "无限王者团", className: "warfare" },
        { title: "创意互动营", className: "originality" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}

</style>
