<template>
	<view class="login">
		<view class="login-wrapper">
      <view class="logo-wrapper">
          <image class="icon" src="../../static/logo.png" mode=""></image>
      </view>
      <view class="p1">好吃好喝</view>
      <view class="p2">一家只卖当日菜的社区电商</view>
      <view class="buttons">
        <button class="phone" @click="handleLoginByPhone" type="default">手机号登陆</button>
        <button class="wx" @click="handleLoginByWx" type="default">微信登陆</button>
      </view>
    </view>
	</view>
</template>

<script setup> 
const handleLoginByPhone = () => {
  console.log('handleLoginByPhone')
}
const handleLoginByWx = () => {
  console.log('handleLoginByWx')
}
</script>

<style lang="scss" scoped>
.login{
  height:100vh;
  overflow: hidden;
  .login-wrapper{
    margin-top:180rpx;
    .logo-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        width:290rpx;
        height:290rpx;
        border-radius:50%;
      }
    }
    .p1{
      text-align: center;
      font-size: 40rpx;
      font-weight: bold;
      color:#000;
      margin:22px auto 12px;
    }
    .p2{
      text-align: center;
      font-size: 28rpx;
      color:#aaa;
    }
    .buttons{
      padding:40rpx;;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 156px;
        height: 40px;
        line-height: 20px;
        border-radius: 100px;
        font-size: 14px;
        &.phone{
          background-color: rgba(250, 79, 81, 100);
          color: rgba(255, 255, 255, 100);
        }
        &.wx{
          background-color: rgba(108, 174, 12, 100);
          color: rgba(255, 255, 255, 100);
        }
      }
    }
  }
}
</style>
