<template>
  <div class="head-nav">
    <div class="title">
      <span class="iconfont">&#xe686;</span>
      <div class="hr">
        <h3>公开课信息</h3>
      </div>
    </div>
    <section class="classes">
      <ul>
        <li>
          <div class="imgDesc">
            <img src="http://attach.bbs.miui.com/forum/201504/08/151136um68ytp68yv2ev2v.png">
          </div>
          <div class="desc">
            <h5>数据库从精通到放弃</h5>
            <p>本节课主要讲解***内容</p>
            <button>查看详细</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'subStance',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="stylus" scoped>
  .head-nav
    padding: 10px
    padding-left: 40px
    width: 100%
    min-height: 450px
    .title
      width: 92%
      .iconfont
        font-size: 65px
        color: #707070
      .hr
        display: inline-block
        width: 92%
        height: 4px
        background-color: #707070
        position: relative
        h3
          position: absolute
          left: 20px
          top: -55px
    .classes
      display: block
      width: 100%
      ul
        width: 100%
        li
          list-style: none
          float: left
          width: 25%
          height: 450px
          margin-left: 8%
          border: 1px solid #000
          .imgDesc
            width: 100%
            img
              width: 80%
              height: 250px
              margin: 10px 10% 5px 10%
          .desc
            h5
              font-size: 30px
              line-height: 30px
              height: 30px
              font-weight: 700
              color: #8590a6
              margin-left: 5px
</style>
