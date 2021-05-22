<template>
  <view class="content">
    <scroll-view scroll-y="true" @scrolltolower="lower()" :style="{ height: scrollH + ' rpx' }">
      <CardItem v-for="(item, index) in data.featured" :item="item" :key="index"></CardItem>
    </scroll-view>
  </view>
</template>

<script>
import store from "@/store/index"; //需要引入store
import CardItem from "@/componets/CardItem/index";
import { data } from "./mock";
export default {
  components: {
    CardItem,
  },
  data() {
    return {
      data,
    };
  },
  computed: {
    i18n() {
      return this.$t("route");
    },
  },
  mounted() { },
  onLoad() { },
  computed: {
    scrollH: function() {
      let sys = uni.getSystemInfoSync();
      let winWidth = sys.windowWidth;
      let winrate = 750 / winWidth;
      let winHeight = parseInt(sys.windowHeight * winrate);
      return winHeight;
    },
  },
  methods: {
    lower(e) {
      console.log("已经滚动到底部了");
    },
  },
};
</script>

<style scoped>
</style>
