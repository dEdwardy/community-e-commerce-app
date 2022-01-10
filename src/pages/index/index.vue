<template>
  <div class="index">
    <div class="statusbar" :style="{ height: statusBarHeight + 'px' }" />
    <div :style="{ height: `calc(100vh - ${statusBarHeight}px)`, overflow: 'scroll' }">
      <div class="top-wrapper">
        <div class="top">
          <div class="logo1-wrapper">
            <img class="logo1" :src="logo1" />
          </div>
          <div class="logo2-wrapper">
            <img class="logo2" :src="logo2" />
          </div>
          <div class="search-panel">
            <input class="search-input" type="text" placeholder="搜索商品 - 好货等你" v-model="searchValue" />
          </div>
        </div>
        <div class="banner" />
      </div>
      <div class="category">
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/2.svg" />
          <div class="txt">今日新品</div>
        </div>

        <div class="item">
          <img class="icon" src="@/assets/icons/svg/2.svg" />
          <div class="txt">水果区</div>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/3.svg" />
          <div class="txt">蔬菜区</div>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/4.svg" />
          <div class="txt">水产区</div>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/5.svg" />
          <div class="txt">肉类区</div>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/6.svg" />
          <div class="txt">蛋类区</div>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/7.svg" />
          <div class="txt">豆制品</div>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/8.svg" />
          <div class="txt">水果区</div>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icons/svg/9.svg" />
          <div class="txt">蔬菜区</div>
        </div>

        <div class="item">
          <img class="icon" src="@/assets/icons/svg/10.svg" />
          <div class="txt">水产区</div>
        </div>
      </div>
      <div class="mrjx">
        <div class="mrjx-title">
          <div class="i1" />
          <div class="i2" />
          <div class="i3" />
          <img style="width: 142px;height:30px;line-height:30px" src="./mrjx.png" alt />
          <div class="i3" />
          <div class="i2" />
          <div class="i1" />
        </div>
        <div class="content">
          <div class="item" v-for="item of 9" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import c1 from './category.png'
import useSystemInfo from '@/hooks/useSystemInfo'
import { ref } from 'vue'
export default {
  name: 'IndexPage',
  setup () {
    const { statusBarHeight } = useSystemInfo()
    const searchValue = ref('')
    return {
      logo1,
      logo2,
      c1,
      statusBarHeight,
      searchValue
    }
  }
}
</script>
<style lang="scss" scoped>
.index {
  .top-wrapper {
    position: relative;
    height: 600rpx;
    .top {
      padding: 42px 20px 0;
      height: 480rpx;
      border-radius: 0 0 40rpx 40rpx;
      background-color: rgba(250, 79, 81, 100);
      .logo1-wrapper {
        padding-top: 12rpx;
        height: 88rpx;
        overflow: hidden;
        .logo1 {
          width: 121px;
          height: 76px;
        }
      }
      .logo2-wrapper {
        .logo2 {
          width: 188px;
          height: 32px;
        }
      }
      .search-panel {
        margin-top: 20rpx;
        .search-input {
          width: 640rpx;
          padding: 0 20rpx;
          height: 34px;
          line-height: 20px;
          border-radius: 9px;
          background-color: rgba(255, 255, 255, 100);
        }
      }
    }
    .banner {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      margin: 0 auto;
      background-image: url(./banner.png);
      background-size: 100% 100%;
      width: 700rpx;
      height: 260rpx;
      border-radius: 16px 16px 0 0;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.22);
    }
  }
  .category {
    padding: 10px 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20%;
      margin: 6px 0;
      .icon {
        width: 140rpx;
        height: 140rpx;
      }
      .txt {
        height: 18px;
        line-height: 18px;
        color: rgba(16, 16, 16, 85);
        font-size: 13px;
        text-align: left;
      }
    }
  }
  .mrjx {
    .mrjx-title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20rpx 0;
      .i1 {
        width: 4px;
        height: 8px;
        line-height: 20px;
        border-radius: 3px;
        background-color: rgba(250, 79, 81, 0.43);
      }
      .i2 {
        margin: 0 7px;
        width: 4px;
        height: 12px;
        line-height: 20px;
        border-radius: 3px;
        background-color: rgba(250, 79, 81, 0.72);
      }
      .i3 {
        width: 4px;
        height: 16px;
        line-height: 20px;
        border-radius: 3px;
        background-color: rgba(250, 79, 81, 0.91);
      }
    }
    .content {
      padding: 0 40rpx;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .item {
        width: 320rpx;
        height: 200rpx;
        margin: 6px 0;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
