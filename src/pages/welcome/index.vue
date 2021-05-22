<template>
  <div class="welcome-wrap">
    <div class="img-wrap">0</div>
    <div class="title">Welcome</div>
    <div class="desc">
      Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo.
      Nunc congue ac tellus quis porttitor.
    </div>
    <div class="long-btn">Get Started</div>
  </div>
</template>
<script>
export default {
  name: "WelcomePage",
};
</script>
<style scoped>
.welcome-wrap {
  padding: 32rpx;
}
.welcome-wrap .img-wrap {
  height: 46vh;
  border-radius: 4px;
  background: var(--color-gray-light);
}
.welcome-wrap .title {
  padding: 42rpx 32rpx 16rpx 32rpx;
  color: color(--color-title);
  font-size: 36rpx;
}
.welcome-wrap .desc {
  padding: 0 32rpx;
  color: var(--color-gray-main);
  font-size: 32rpx;
  line-height: 52rpx;
}
.welcome-wrap .long-btn {
  margin: 96rpx 32rpx 32rpx;
  margin-top: 120rpx;
  border-radius: 100rpx;
  background: var(--color-theme);
  color: white;
  text-align: center;
  font-size: 38rpx;
  line-height: 100rpx;
}
</style>
