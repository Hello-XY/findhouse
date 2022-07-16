<template>
  <div>
    <van-nav-bar class="nav" title="账号登录" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <van-form @submit="login" class="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="usernameRules"
      >
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="passwordRules"
      >
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
      <a href="#" class="zhuce">还没有账号，去注册</a>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/login'
import { usernameRules, passwordRules } from '@/views/login/rules'
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameRules,
      passwordRules
    }
  },
  methods: {
    onClickLeft() {
      this.$toast('返回')
      this.$router.push('/home/profile')
    },
    async login() {
      this.$toast.loading({
        message: '登录中',
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        console.log(res)
        if (res.data.status !== 200) {
          this.$toast.fail(res.data.description)
        } else {
          this.$store.commit('setUser', res.data.body)
          this.$router.push('/home/profile')
          this.$toast.success('登录成功')
        }
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nav {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
    font-size: 18px;
  }
  .van-icon {
    color: #fff;
    width: 22px;
    height: 22px;
  }
}
.form {
  text-align: center;
  .van-button--info {
    background-color: #21b97a;
    font-size: 18px;
  }
  .zhuce {
    color: #666;
    background: transparent;
    text-decoration: none;
    margin-top: 30px;
    font-size: 14px;
  }
}
</style>
