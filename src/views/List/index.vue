<template>
  <div>
    <div class="list">
      <van-icon name="arrow-left" />
      <van-search
        v-model="value"
        show-action
        placeholder="请输入小区或地址"
        class="my-search"
        background="#21b97a"
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
    </div>
    <van-dropdown-menu>
      <van-area title="标题" :area-list="areaList" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {
    onCityList() {
      this.$router.push('/city')
    },
    toMap() {
      this.$router.push('/map')
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  padding: 0 0 0 10px;
  height: 50px;
  background: #21b97a;
  display: flex;
  > van-icon {
    width: 10%;
  }
  > van-search {
    width: 90%;
  }
  .my-search {
    width: 85%;
  }
  .van-search__label {
    .region {
      display: flex;
    }
  }
  .van-icon {
    line-height: 50px;
    color: #fff;
  }
  .icon-ditu1 {
    font-size: 25px;
    color: #fff;
    margin-right: -20px;
  }
  .icon-xiajiantou {
    margin-left: 2px;
    font-size: 12px;
    color: #7f7f80;
  }
}
</style>
