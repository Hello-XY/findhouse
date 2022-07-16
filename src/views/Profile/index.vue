<template>
  <div>
    <div id="root">
      <div class="App" style="">
        <div class="layout">
          <div>
            <div class="My_title__39w3V" v-if="!isLogin">
              <img
                class="My_bg__2j-VX"
                src="http://liufusong.top:8080/img/profile/bg.png"
                alt="背景图"
              />
              <div class="My_info__eOYeg">
                <div class="My_myIcon__3cKIV">
                  <img
                    class="My_avatar__2Fbh7"
                    src="http://liufusong.top:8080/img/profile/avatar.png"
                    alt="icon"
                  />
                </div>
                <!-- 登陆 -->
                <div class="My_user__B6O1D">
                  <div class="My_name__3U2NB">游客</div>
                  <div class="My_edit__3wqlv">
                    <van-button
                      class="am-button-small"
                      type="primary"
                      to="/login"
                      color="#21b97a"
                      >去登录</van-button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="My_title__39w3V" v-if="isLogin">
              <img class="My_bg__2j-VX" :src="imgUrl" alt="背景图" />
              <div class="My_info__eOYeg">
                <div class="My_myIcon__3cKIV">
                  <img
                    class="My_avatar__2Fbh7"
                    src="http://liufusong.top:8080/img/profile/avatar.png"
                    alt="icon"
                  />
                </div>
                <!-- 登陆 -->
                <div class="My_user__B6O1D">
                  <div class="My_name__3U2NB">{{ username }}</div>
                  <div class="My_edit__3wqlv">
                    <van-button
                      class="sign__out"
                      type="primary"
                      color="#21b97a"
                      @click="logout"
                      >退出</van-button
                    >
                  </div>
                  <div>编辑个人资料</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <van-grid :column-num="3" :border="false">
        <van-grid-item icon="star-o" text="我的收藏" to="/favorate" />
        <van-grid-item icon="wap-home-o" text="我的出租" to="/rent" />
        <van-grid-item icon="clock-o" text="看房记录" />
      </van-grid>
      <van-grid :column-num="3" :border="false">
        <van-grid-item icon="coupon-o" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="My_ad__1wZZj">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
    <!-- 底部导航 -->
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'

export default {
  data() {
    return {
      username: '',
      imgUrl: 'http://liufusong.top:8080/img/profile/bg.png'
    }
  },
  created() {
    this.getUserInfo()
  },
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    }
  },
  methods: {
    async getUserInfo() {
      if (this.isLogin) {
        try {
          const res = await getUserInfo()
          console.log(res)
          if (res.data.status === 200) {
            this.username = res.data.body.nickname || this.username
            this.imgUrl = `http://liufusong.top:8080${res.data.body.avatar}`
          }
        } catch (error) {
          this.$toast.fail('请重新登录')
        }
      }
    },
    logout() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出？'
        })
        .then(() => {
          // on confirm
          this.$store.commit('setUser', {})
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
#root {
  height: 100%;
  font-family: 'Microsoft YaHei';
  color: #333;
  background-color: #fff;
  font-size: 14px;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  div {
    display: block;
  }
  .layout {
    height: 100%;
    .My_title__39w3V {
      min-height: 300px;
      position: relative;
      .My_bg__2j-VX {
        width: 100%;
      }
      img {
        border-style: none;
      }
      .My_info__eOYeg {
        position: absolute;
        background: #fff;
        width: 85%;
        height: 55%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 10px 3px #ddd;
        margin: 50px auto 0;
        padding: 0 20px;
        text-align: center;
        font-size: 13px;
        .My_myIcon__3cKIV {
          position: relative;
          transform: translateY(-50%);
          border-radius: 50%;
          width: 70px;
          height: 70px;
          border: 5px solid #f5f5f5;
          display: inline-block;
          box-shadow: 0 2px 2px #bdbdbd;
          .My_avatar__2Fbh7 {
            width: 100%;
            border-radius: 50%;
          }
          img {
            border-style: none;
          }
        }
        .My_user__B6O1D {
          padding-top: 15px;
          .My_name__3U2NB {
            margin-top: -30px;
            margin-bottom: 10px;
          }
          .My_edit__3wqlv {
            color: #999;
            font-size: 12px;
            margin-top: 20px;
            .am-button-small {
              font-size: 13px;
              height: 30px;
              line-height: 30px;
              padding: 0 15px;
              border-radius: 5px;
            }
            .sign__out {
              border-radius: 30px;
              color: #fff;
              padding: 2px 5px;
              background: #21b97a;
              font-size: 12px;
              width: 54px;
              height: 20px;
              line-height: 20px;
              margin-top: -20px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}
.center {
  margin-top: 20px;
}
.My_ad__1wZZj {
  text-align: center;
  margin-top: 10px;
  img {
    width: 90%;
    text-align: center;
  }
}
</style>
