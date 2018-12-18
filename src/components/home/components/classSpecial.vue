<template>
  <div class="special">
    <h3 class="section-title text-center">课程特色</h3>
    <div class="hr"></div>
    <div class="list">
      <section>
        <span class="iconfont">&#xe643;</span>
        <div class="desc">
          <h4>硅谷一线企业工程师授课</h4>
          <p>新鲜的求职经验，大公司的招聘标准，面试官的经验分享</p>
        </div>
      </section>
      <section>
        <span class="iconfont">&#xe8bb;</span>
      </section>
      <section>
        <span class="iconfont">&#xe617;</span>
      </section>
      <section>
        <span class="iconfont">&#xe66f;</span>
      </section>
      <section>
        <span class="iconfont">&#xe60a;</span>
      </section>
      <section>
        <span class="iconfont">&#xe6d6;</span>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classSpecial',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .special
    width: 100%
    min-height: 350px
    overflow: hidden
    .section-title
      color: #8b617b
      font-size: 18px
      letter-spacing: 0.14px
      font-weight: 600
    .hr
      background-color: #8b617b!important
      font-weight: 400
      height: 2px
      margin: auto
      width: 100px
      background-color: rgb(46, 46, 46)
    .list
      width: 100%
      box-sizing: border-box
      padding: 10px 0px 0% 12%
      min-height: 300px
      section
        width: 28%
        height: 140px
        float: left
        margin: 10px
        margin-top: 15px
        .iconfont
          font-size: 46px
          line-height: 1.1
          border: 1px solid #eee
          color: #8b617b
          box-shadow: 7px 7px 20px 0 rgba(0,0,0,.15)
          border-radius: 50%
          box-sizing: border-box
          padding: 12px
          float: left
        .desc
          width: 70%
          height: 100%
          float: left
          text-align: left
          margin-left: 5%
          vertical-align: middle
          h4
            font-size: 22px
            font-weight: 300
            line-height: 1.3
            color: #626262
            font-family: 'Open Sans',Arial,sans-serif
          p
            color: #626262
            font-family: 'Open Sans',Arial,sans-serif
            font-size: 14px
            font-weight: 700
</style>
