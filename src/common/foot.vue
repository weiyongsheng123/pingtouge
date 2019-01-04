<template>
  <div @click="closeWechat" class="allFoot">
    <footer class="foot">
      <img src="../assets/pingtouge.png" alt="平头哥">
      <section>
        <p>
          <router-link to="/">
            <span>首页</span>
          </router-link>
          <span class="hr"></span>
          <router-link to="/information">
            <span>了解我们</span>
          </router-link>
          <span class="hr"></span>
          <router-link  to="/recruit">
            <span>加入我们</span>
          </router-link>
          <br>
          Copyright © 2013-京ICP备16004690号-1
        </p>
      </section>
      <div class="link">
        <a href="https://weibo.com/u/6891368842?topnav=1&wvr=6&topsug=1&is_all=1"><i class="iconfont weibo">&#xe73c;</i></a>
        <i class="iconfont weixin" @click.stop="showWechat">&#xe637;</i>
        <div class="weixintu"></div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    data: () => ({
    }),
    methods: {
      showWechat () {
        $(".weixintu").toggle(function() {
        })
      },
      closeWechat () {
        $(".weixintu").hide("slow")
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .allFoot
    width: 100%
    height: 80px
    clear: both
    .foot
      width: 100%
      height: 80px
      background: #191a1c
      position: absolute
      bottom: 0
      .link
        height: 100%
        float: right
        text-align: center
        box-sizing: border-box
        margin-right: 5%
        position: relative
        a
          text-decoration: none
        .weibo
          color: red
          user-select: none
        .weixin
          color: green
          user-select: none
        .weixintu
          width: 100px
          height: 100px
          position: absolute
          left: -100px
          top: -50px
          z-index: 999
          display: none
          background-image: url(../assets/wechat.jpg)
          background-size: 100%
          user-select: none
      img
        float: left
      section
        float: left
        box-sizing: border-box
        p
          width: 100%
          height: 100%
          opacity: .7
          color: #fff
          text-align: left
          box-sizing: border-box
          cursor: pointer
          font-weight: 400
          margin: 0
          span
            color: #fff
            outline: 0 !important
            font-size: 12px
            font-weight: 400
            line-height: 24px
          .hr
            opacity: .5
            font-size-adjust: 100%
            font-size: 10px
            height: 10px
            line-height: 10px
            border-right: 1px solid #fff
            margin:0 6px 0 2px
  @media screen and (min-width: 500px)
    .allFoot
      .foot
        img
          width: 180px
          height: 80px
        section
          width: 400px
          height: 80px
          padding-left: 20px
          p
            font-size: 12px
            padding-top: 20px
        .link
          width: 100px
          padding-top: 20px
          i
            cursor: pointer
            font-size: 24px
            margin: 0 10px
  @media screen and (min-width: 300px) and (max-width: 500px)
    .allFoot
      .foot
        img
          width: 90px
          height: 80px
        section
          width: 200px
          height: 80px
          padding-left: 0px
          p
            font-size: 12px
            transform: scale(0.9)
            padding-top: 10px
        .link
          width: 60px
          padding-top: 40px
          i
            cursor: pointer
            font-size: 16px
            margin: 0 5px
</style>
