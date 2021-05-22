<template>
  <view class="search-wrap px-4">
    <view class="search">
      <input type="text" v-model="keyword" placeholder="请输入文本" />
    </view>
    <view class="menu">
      <text class="iconfont icon-menu"></text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "SearchWithAction",
    data() {
      return {
        keyword: ''
      }
    }
  }
</script>

<style scoped>
  .search-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search-wrap .search {
    line-height: 80rpx;
    height: 80rpx;
    background: var(--color-gray-light);
    width: calc(100% - 80rpx);
  }
  .search-wrap .search uni-input {
    line-height: 80rpx;
    height: 80rpx;
    padding: 0 32rpx;
  }
  .search-wrap .menu {
    color: var(--color-theme);
  }
  .search-wrap .menu .iconfont {
    font-size: 56rpx;
  }
</style>
