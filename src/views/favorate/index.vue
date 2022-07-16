<template>
  <div>
    <Header :title="title"></Header>
    <van-card
      v-for="item in favorateList"
      :key="item.houseCode"
      :price="`${item.price}元/月`"
      :desc="item.desc"
      :title="item.title"
      :thumb="`http://liufusong.top:8080${item.houseImg}`"
    >
      <template #tags>
        <van-tag color="#e1f5f8" text-color="#39becd" size="medium">{{
          item.tags[0]
        }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { getFavorateInfo } from '@/api/favorate'
export default {
  data() {
    return {
      title: '我的收藏',
      favorateList: []
    }
  },
  components: {
    Header
  },
  created() {
    this.getFavorateInfo()
  },
  methods: {
    async getFavorateInfo() {
      try {
        const res = await getFavorateInfo()
        this.favorateList = res.data.body
        console.log(this.favorateList)
      } catch (error) {
        this.$toast.fail('请重新获收藏列表')
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-card__title {
  font-size: 15px;
  color: #394043;
  font-weight: 800;
}
.van-card__desc {
  font-size: 12px;
  color: #afb2b3;
  margin-top: 8px;
}
.van-card__price-currency {
  display: none;
}
.van-card__price-integer {
  font-size: 16px;
  color: #fa5741;
  font-weight: bolder;
}
</style>
