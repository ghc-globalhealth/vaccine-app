<template>
  <view class="car-item px-4">
    <view class="img-wrap">
      <image :lazy-load="true" :src="item.img || item.image" mode="widthFix"></image >
      <view class="info">{{ item.distance }}</view>
    </view>
    <view class="name color-title">{{ item.name }}</view>
    <view class="rate-wrap color-sub-title">
      <text class="color-theme rate">{{ item.ratings }}</text>
      <text>{{ item.distance }}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
<style scoped>

.car-item .img-wrap {
  position: relative;
}
.car-item .img-wrap .info {
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
.car-item .img-wrap image {
  width: 100%;
}
.car-item .name {
  margin-bottom: 16rpx;

  font-weight: 500;

  font-size: 36rpx;
}
.car-item .rate-wrap {
  font-size: 24rpx;

  line-height: 36rpx;
}

.car-item .rate-wrap .rate {
  margin-right: 8rpx;
}
.car-item .car-item {
  margin-bottom: 40rpx;
}
.car-item .list-title {
  margin-bottom: 32rpx;

  font-size: 40rpx;
}
</style>