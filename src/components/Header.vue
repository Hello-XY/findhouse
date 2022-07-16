<template>
  <div>
    <van-nav-bar
      class="nav"
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/home/profile')
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  background-color: #21b97a;
  :deep(.van-icon-arrow-left) {
    color: #fff;
    width: 22px;
    height: 22px;
    line-height: 22px;
  }
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 18px;
  }
}
</style>
