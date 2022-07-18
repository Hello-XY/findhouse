<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入小区或地址"
      background="rgba(255,255,255,0)"
      class="my-search"
    >
      <template #label>
        <div class="region" @click="onCityList">
          <span class="regionname">上海</span>
          <div class="iconfont icon-xiajiantou"></div>
        </div>
      </template>
      <template #action>
        <div @click="toMap" class="iconfont icon-ditu1"></div>
      </template>
    </van-search>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.id">
        <img v-lazy="`http://liufusong.top:8080${item.imgSrc}`" />
      </van-swipe-item>
    </van-swipe>
    <!--  -->
    <van-grid class="nav-center">
      <van-grid-item text="整租" to="/home/list">
        <template #icon>
          <span class="iconfont icon-ziyuan"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="合租" to="/home/list">
        <template #icon>
          <span class="iconfont icon-haoyou"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="地图找房" to="/map">
        <template #icon>
          <span class="iconfont icon-ditu"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="去出租" @click="toRent">
        <template #icon>
          <span class="iconfont icon-shouye"></span>
        </template>
      </van-grid-item>
    </van-grid>
    <div class="rent">
      <div class="navigation">
        <b>租房小组</b>
        <span>更多</span>
      </div>
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item v-for="item in groupsList" :key="item.id" class="item">
          <!-- <van-image :src="`http://liufusong.top:8080${item.imgSrc}`" /> -->
          <div class="left">
            <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
          </div>
          <div class="right">
            {{ item.title }}
            <br />
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getSwiperInfo, getGroupsInfo } from '@/api/home'
export default {
  data() {
    return {
      value: '',
      swiperList: [],
      groupsList: []
    }
  },
  created() {
    this.getSwiperInfo()
    this.getGroupsInfo()
  },
  methods: {
    onCityList() {
      this.$router.push('/city')
    },
    toMap() {
      this.$router.push('/map')
    },
    async getSwiperInfo() {
      try {
        const res = await getSwiperInfo()
        this.swiperList = res.data.body
        console.log(this.swiperList)
      } catch (error) {
        console.log(error)
      }
    },
    async getGroupsInfo() {
      try {
        const res = await getGroupsInfo()
        this.groupsList = res.data.body
        console.log(this.groupsList)
      } catch (error) {
        console.log(error)
      }
    },
    toRent() {
      if (this.isLogin) {
        this.$router.push('/rent/add')
      } else {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    }
  }
}
</script>

<style lang="less" scoped>
html {
  height: 100%;
}
body {
  min-height: 100%;
}
.my-search {
  position: absolute;
  top: 25px;
  left: 20px;
  z-index: 999;
  width: 95%;
  padding: 0;
  margin-right: 10px;
  .van-search__label {
    padding: 0;
  }
  :deep(.van-field__left-icon) {
    border-left: 1px solid #e5e5e5;
  }
  :deep(.van-cell) {
    margin-left: 10px;
  }
  :deep(.van-icon-search) {
    margin-left: 10px;
  }
  .region {
    display: flex;
    justify-content: space-between;
  }
  .icon-ditu1 {
    font-size: 25px;
    color: #fff;
  }
  .icon-xiajiantou {
    margin-left: 2px;
    font-size: 12px;
    color: #7f7f80;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 212px;
}
.van-swipe {
  position: absolute;
  top: 0;
  width: 100%;
  img {
    width: 100%;
  }
}
.nav-center {
  top: 212px;
  height: 122px;
  align-items: center;
  justify-content: center;
  .iconfont {
    color: #00ae66;
    font-size: 40px;
    padding: 10px 0;
    margin-top: 10px;
  }
  .van-grid-item__text {
    color: #646566;
    font-size: 0.32rem;
    line-height: 1.5;
    word-break: break-all;
  }
  .van-grid-item__icon-wrapper {
    margin-top: -20px;
  }
  :deep(.van-grid-item__text) {
    font-size: 14px;
    font-weight: 400;
    margin-top: 15px;
  }
}
.rent {
  position: absolute;
  top: 309px;
  width: 100%;
  background-color: #f6f5f6;
  padding-bottom: 15px;
  .navigation {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    padding-left: 10px;
    span {
      padding-right: 10px;
      color: #787d82;
    }
  }
}
.item {
  font-size: 14px;
  text-align: center;
  position: relative;
  height: 80px;
  .left {
    width: 50px;
    position: absolute;
    top: 10px;
    left: 10px;
    img {
      width: 100%;
    }
  }
  .right {
    position: absolute;
    top: 20px;
    right: 10px;
    flex: 1;
  }
}
</style>
