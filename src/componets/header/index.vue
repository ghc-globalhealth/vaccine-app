<template>
  <view class="header-wrap">
    <view class="layout-lt">
      <image src="../../assets/delivery.png" mode="widthFix"></image>
      <view class="info">
        <view class="sub-title">
          <text>Now</text>
        </view>
        <view class="title">
          <text>London</text>
          <text class="iconfont icon-map"></text>
        </view>
      </view>
    </view>
    <view class="layout-rt">
      <view class="user">
        <text class="iconfont icon-user"></text>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style>
  @import url("//at.alicdn.com/t/font_2554073_x690pshcsuf.css");
  .header-wrap {
    background: #fff;
    position: sticky;
    top: calc(env(safe-area-inset-top) - 40px);
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx 32rpx;
  }
  .header-wrap .layout-lt {
    display: flex;
  }
  .header-wrap .layout-lt image {
    width: 72rpx;
  }
  .header-wrap .layout-lt .info {
    padding-left: 16rpx;
  }
  .header-wrap .layout-lt .info .sub-title {
    font-size: 26rpx;
    margin-bottom: 8rpx;
    color: var(--color-sub-title);;
  }
  .header-wrap .layout-lt .info .title {
    font-size: 32rpx;
    color: var(--color-title);
    font-weight: 500;
  }
  .header-wrap .layout-lt .info .iconfont {
    margin-left: 16rpx;
    font-size: 32rpx;
    vertical-align: baseline;
  }
  .layout-rt .user {
    background: var(--color-gray-light);
    width: 80rpx;
    height: 80rpx;
    line-height: 80rpx;
    border-radius: 50%;
    text-align: center;
    color: var(--color-theme);
  }
  //ADADAD
</style>
