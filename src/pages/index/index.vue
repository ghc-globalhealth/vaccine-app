<template>
  <view class="content">
    <Vheader></Vheader>
    <view class="btn-groups mb-4">
      <text class="active">送达</text>
      <text>自取</text>
      <text>预约</text>
    </view>
    <SearchWithAction></SearchWithAction>
    <view class="category-wrap">
      <swiper
        :style="{ height: scrollHeight + 'px' }"
        class="swiper-category-wrap"
        v-bind="catSlideOpts"
      >
        <swiper-item
          class="swiper-item"
          v-for="cat in data.categories"
          :key="cat.title"
          @click="handleCategory(cat.title)"
        >
          <image
            :lazy-load="true"
            class="swiper-item-img"
            :src="cat.img"
            mode="widthFix"
          ></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="adv-wrap">
      <SlideSwiper
        :autoplay="false"
        mode="none"
        :effect3d="true"
        :list="data.highlights"
      ></SlideSwiper>
    </view>
    <view class="list-wrap">
      <view class="list-title px-4">精选</view>
      <view class="list-swiper-wrap mb-6">
        <swiper
          :style="{ height: listSwiperHeight + 'px' }"
          class="swiper-list-wrap pl-4"
          v-bind="listSlideOpts"
        >
          <swiper-item
            class="swiper-item"
            v-for="cat in data.highlights"
            :key="cat.title"
          >
            <image
              class="swiper-item-img"
              :src="cat.image"
              :lazy-load="true"
              mode="widthFix"
            ></image>
          </swiper-item>
        </swiper>
      </view>
      <view
        class="list-item px-4"
        v-for="item in data.featured"
        :key="item.name"
      >
        <view class="img-wrap">
          <image :lazy-load="true" :src="item.img" mode="widthFix"></image>
          <view class="info">{{ item.distance }}</view>
        </view>
        <view class="name color-title">{{ item.name }}</view>
        <view class="rate-wrap color-sub-title">
          <text class="color-theme rate">{{ item.ratings }}</text>
          <text>{{ item.distance }}</text>
        </view>
      </view>
    </view>
    <!--    <view>{{username}}</view>
    <view @click="goLogin">{{i18n.login}}</view> -->
  </view>
</template>

<script>
import store from "@/store/index"; //需要引入store
import Vheader from "@/componets/header/index.vue";
import SearchWithAction from "@/componets/SearchWithAction/index.vue";
import SlideSwiper from "@/componets/SlideSwiper/index.vue";
import { data } from "./mock";
export default {
  components: {
    Vheader,
    SearchWithAction,
    SlideSwiper,
  },
  data() {
    return {
      title: "Hello",
      data,
      scrollHeight: 0,
      catSlideOpts: { "display-multiple-items": 4.5, autoplay: false },
      listSwiperHeight: 0,
      listSlideOpts: {
        "display-multiple-items": 1,
        autoplay: false,
        "next-margin": "156px",
      },
      currentIndex: 0,
    };
  },
  computed: {
    username() {
      return store.state.username;
    },
    i18n() {
      return this.$t("route");
    },
  },
  mounted() {
    let catinfo = uni
      .createSelectorQuery()
      .in(this)
      .select(".swiper-category-wrap .swiper-item-img")
      .boundingClientRect();
    catinfo.exec((res) => {
      this.scrollHeight = res[0].width;
    });

    let listinfo = uni
      .createSelectorQuery()
      .in(this)
      .select(".swiper-list-wrap .swiper-item-img")
      .boundingClientRect();
    listinfo.exec((res) => {
      console.log(res[0]);
      this.listSwiperHeight = parseInt(res[0].height / 2);
    });
  },
  onLoad() {},
  methods: {
    swierChange(e) {
      this.currentIndex = e.detail.current;
    },
    handleCategory(title) {
      uni.navigateTo({
        url: `/pages/category-list/index?type=${title}`,
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.log(err);
        },
      });
    },
    goLogin() {
      console.log(999);
      uni.navigateTo({
        url: "/pages/accout/login",
        success(res) {
          console.log(res);
        },
        fail(err) {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style scoped>
.btn-groups {
  display: flex;

padding: 0 32rpx;

color: var(--color-theme);

font-size: 28rpx;

  }

.btn-groups text {
  margin-right: 32rpx;

padding: 0 24rpx;

border-radius: 24rpx;

line-height: 48rpx;

  }

.btn-groups text.active {
  background: var(--color-theme);

color: white;

  }

.category-wrap {
  padding: 32rpx 0 32rpx 32rpx;
}

.swiper-category-wrap {
  /* height: auto; */
}
.swiper-category-wrap .swiper-item {
  padding-right: 16rpx;
}
.swiper-category-wrap .swiper-item image {
  width: 100%;
}

.list-wrap {
  padding: 32rpx 0;
}
.list-wrap .img-wrap {
  position: relative;
}
.list-wrap .img-wrap .info {
  position: absolute;

position: absolute;

right: 32rpx;

bottom: -20rpx;

padding: 0 32rpx;

height: 56rpx;

border: 1px solid var(--color-theme);

border-radius: 28rpx;

background: var(--color-theme);

color: white;

font-weight: 500;

font-size: 24rpx;

line-height: 54rpx;

  }
.list-wrap .img-wrap image {
  width: 100%;
}
.list-wrap .name {
  margin-bottom: 16rpx;

font-weight: 500;

font-size: 36rpx;

  }
.list-wrap .rate-wrap {
  font-size: 24rpx;

line-height: 36rpx;

  }

.list-wrap .rate-wrap .rate {
  margin-right: 8rpx;
}
.list-wrap .list-item {
  margin-bottom: 40rpx;
}
.list-wrap .list-title {
  margin-bottom: 32rpx;

font-size: 40rpx;

  }

.swiper-list-wrap .swiper-item-img {
  width: calc(100% - 16rpx);
}

</style>
