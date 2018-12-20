<template>
  <div class="allFoot">
    <footer class="foot">
      <img src="../assets/logo.png" alt="平头哥">
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
      <div>
        <i class="iconfont">&#xe73c;</i>
        <i class="iconfont">&#xe637;</i>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    data: () => ({
      
    })
  }
</script>

<style lang="stylus" scoped>
  .allFoot
    width: 100%
    height: 80px
    .foot
      width: 100%
      height: 80px
      background: #191a1c
      position: absolute
      bottom: 0
      div
        width: 100px
        height: 100%
        float: right
        text-align: center
        box-sizing: border-box
        padding-top: 20px
        margin-right: 5%
        i
          cursor: pointer
          font-size: 24px
          margin: 0 10px
          &:first-of-type
            color: red
          &:last-of-type
            color: green
      img
        width: 180px
        height: 80px
        float: left
      section
        width: 400px
        height: 80px
        float: left
        box-sizing: border-box
        padding-left: 20px
        p
          width: 100%
          height: 100%
          opacity: .7
          color: #fff
          text-align: left
          box-sizing: border-box
          padding-top: 20px
          cursor: pointer
          font-size: 12px
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
</style>
