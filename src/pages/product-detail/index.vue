<template>
  <view class="page-wrap">
    <view class="banner"></view>
    <view class="main-info">
      <view class="title">YUNZN Street food</view>
      <view class="rate">
        <text class="color-theme">4.5 Excellent</text>
        <text class="tip">.7 miles away</text>
      </view>
      <view class="map">
        <view class="address line-camp">
          ASK ビル 1F, 2 Chome-19-13 Kabukicho, Shinjuku City, Tokyo
          160-0021</view
        >
        <view class="color-theme view">查看地图</view>
      </view>
      <view class="fee">免运费</view>
      <view class="desc">
        The various forms of vitamin A are solubilized into micelles in the
        intestinal lumen and absorbed by duodenal mucosal cells [5]. Both
        retinyl esters and provitamin A carotenoids are converted to retinol,
        which is oxidized to retinal and then to retinoic acid [2]. Most of the
        body’s vitamin A is stored in the liver in the form of retinyl esters.
      </view>
    </view>
  </view>
</template>
<style scoped>
.page-wrap .banner {
  width: 100%;
  height: 484rpx;
  background: url(../../assets/product-img-001.jpeg);
  background-attachment: fixed;
  background-size: cover;
}
.main-info {
  padding: 32rpx;
}
.main-info .title {
  margin-bottom: 16rpx;
  color: var(--color-title);
  font-weight: 500;
  font-size: 36rpx;
}
.main-info .rate {
  color: var(--color-gray-main);
  font-size: 28rpx;
}
.main-info .map,
.main-info .fee {
  display: flex;
  justify-content: space-between;
  color: var(--color-gray-main);
  font-size: 28rpx;
  line-height: 36rpx;
}
.main-info .map .view {
  width: 120rpx;
}
.main-info .map .address {
  max-width: calc(100% - 136rpx);
  height: 36rpx;
}
.main-info .desc {
  margin-top: 32rpx;
  color: var(--color-gray-main);
  font-size: 28rpx;
  line-height: 44rpx;
}
</style>