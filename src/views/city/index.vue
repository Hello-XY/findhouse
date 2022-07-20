<template>
  <div>
    <Header :title="title"></Header>
    <van-index-bar
      class="indexBar"
      :sticky="false"
      highlight-color="#fb6463"
      :index-list="indexList"
    >
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell title="深圳" />
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        v-for="(item, index) in hotCity"
        :key="index"
        :title="item.label"
      />
      <van-index-anchor
        v-for="(item, index) in cityList"
        :key="index"
        :index="index"
      >
        <span class="indexWord">{{ index }}</span>
        <van-cell
          @click="chooseCity(citem)"
          v-for="(citem, cindex) in item"
          :key="cindex"
          :title="citem"
        />
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { AreaCityList, hotCityList } from '@/api/city'
// import pinyin from 'js-pinyin'
export default {
  components: {
    Header
  },
  data() {
    return {
      title: '城市列表',
      indexList: [],
      hotCity: [],
      // cityNameList: [],
      /* 城市与字母映射关系 */
      cityList: []
    }
  },
  created() {
    this.getLetterList()
    this.AreaCityList()
    this.hotCityList()
  },
  methods: {
    //* 获取字母 */
    getLetterList() {
      this.indexList.push(
        ...['#', '热'],
        ...[...Array(26)].map((_, i) => String.fromCharCode(i + 65))
      )
      console.log(this.indexList)
    },
    /* 获取城市列表 */
    async AreaCityList() {
      try {
        const { data } = await AreaCityList('1')
        const areaCity = data.body
        let letter = []
        areaCity.forEach((el) => {
          letter.push(el.pinyin.toUpperCase().substring(0, 1))
        })
        letter.sort()
        try {
          // const cityNameList = this.areaCity.map((obj) => obj.label)
          // console.log(cityNameList)
          let obj = {}
          letter.forEach((item) => {
            obj[item] = []
            // console.log('22222', areaCity)
            areaCity.forEach((el) => {
              if (el.pinyin.toUpperCase().substring(0, 1) === item) {
                // console.log(11)
                // cityList[item].push(el)
                obj[item].push(el.label)
              }
            })
          })
          this.cityList = obj
        } catch (error) {}
      } catch (error) {
        this.$toast.fail('获取数据失败请重新刷新')
      }
    },
    /* 获取热门城市列表 */
    async hotCityList() {
      try {
        const { data } = await hotCityList()
        this.hotCity = data.body
        console.log(this.hotCity)
        // this.areaCity = data.
      } catch (error) {
        this.$toast.fail('获取数据失败请重新刷新')
      }
    }
    /* 给home传地址参数 */
  }
}
</script>

<style></style>
