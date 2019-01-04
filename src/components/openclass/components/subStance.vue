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
            <img src="https://open-image.nosdn.127.net/4df121443d0f421482f7fac8457d8a23.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85">
          </div>
          <div class="desc">
            <h5>数据库从精通到放弃,放弃是不可能放弃的</h5>
            <p>本节课主要讲解***内容,dhahdjhsjhdjhajhdshd</p>
            <button type="button" class="button green rarrow">了解更多</button>
          </div>
        </li>
        <li>
          <div class="imgDesc">
            <img src="https://open-image.nosdn.127.net/70296bf3722d41c0bb65889d10193a2b.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85">
          </div>
          <div class="desc">
            <h5>数据库从精通到放弃</h5>
            <p>本节课主要讲解***内容</p>
            <button type="button" class="button green rarrow">了解更多</button>
          </div>
        </li>
        <li>
          <div class="imgDesc">
            <img src="https://open-image.nosdn.127.net/67b91094f12446979232837b47f705f4.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85">
          </div>
          <div class="desc">
            <h5>数据库从精通到放弃,放弃是不可能放弃的</h5>
            <p>本节课主要讲解***内容,dhahdjhsjhdjhajhdshd</p>
            <button type="button" class="button green rarrow">了解更多</button>
          </div>
        </li>
        <li>
          <div class="imgDesc">
            <img src="https://oimagec2.ydstatic.com/image?url=http://cms-bucket.nosdn.127.net/2018/12/24/e6c2eca125c44bc3b16732159b3f416b.jpeg&w=380&h=268&cw=380&ch=268&fill=0&sbc=0&quality=95&cgra=TOP_CENTER&product=open">
          </div>
          <div class="desc">
            <h5>数据库从精通到放弃</h5>
            <p>本节课主要讲解***内容</p>
            <button type="button" class="button green rarrow">了解更多</button>
          </div>
        </li>
        <li>
          <div class="imgDesc">
            <img src="https://open-image.nosdn.127.net/67b91094f12446979232837b47f705f4.jpg?imageView&thumbnail=540y300&enlarge=1&quality=85">
          </div>
          <div class="desc">
            <h5>数据库从精通到放弃,放弃是不可能放弃的</h5>
            <p>本节课主要讲解***内容,dhahdjhsjhdjhajhdshd</p>
            <button type="button" class="button green rarrow">了解更多</button>
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
    padding: 10px 0px
    width: 100%
    min-height: 400px
    .title
      width: 94%
      margin-left: 2%
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
      background-color: #fafafa
      min-height: 290px
      ul
        width: 100%
        padding-left: 0px
        padding-top: 20px
        box-sizing: border-box
        li
          list-style: none
          display: block
          float: left
          width: 20%
          height: 290px
          margin-left: 4%
          margin-top: 20px
          margin-bottom: 20px
          box-sizing: border-box
          cursor: pointer
          background-color: #fff
          box-shadow: 0 2px 5px rgba(0, 0, 0, .1)
          &:hover
            box-shadow: 0 0 15px 5px rgba(0, 0, 0, .3)
            .imgDesc
              img
                transition: all 0.75s
                transform: scale(1.3)
          .imgDesc
            width: 100%
            height: 150px
            overflow: hidden
            img
              width: 100%
              height: 150px
          .desc
            width: 96%
            height: 125px
            margin: 10px 2% 5px 2%
            text-align: left
            position: relative
            h5
              font-size: 20px
              line-height: 1.2
              font-weight: 500
              font-family: 'microsoft yahei',sans-serif
              color: #8590a6
              line-height: 1.2
              overflow: hidden
              text-overflow: ellipsis
              max-height: 50px
            p
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
              font-family: "microsoft yahei", sans-serif
              font-size: 14px
              font-stretch: 100%
              color: #999
</style>

<style scoped>
    .button {
      width: 90px;
      line-height: 28px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      text-shadow: 1px 1px 1px #333;
      border-radius: 5px;
      position: absolute;
      right: 10px;
      bottom: 0px;
      overflow: hidden;
      outline: none;
      float: right;
    }
     
    .button.green {
      border: 1px solid #64c878;
      box-shadow: 0 1px 2px #b9ecc4 inset, 0 -1px 0 #6c9f76 inset, 0 -2px 3px #b9ecc4 inset;
      background: -webkit-linear-gradient(top, #90dfa2, #84d494);
      background: -moz-linear-gradient(top, #90dfa2, #84d494);
      background: linear-gradient(top, #90dfa2, #84d494);
    }
     
    .button.rarrow {
      overflow: visible;
    }
     
    .rarrow:after,
    .rarrow:before {
      position: absolute;
      content: "";
      display: block;
      width: 22px;
      height: 22px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      transform: rotate(45deg);
    }
     
    .rarrow:before {
      width: 22px;
      height: 22px;
      top: 2px;
      right: -9px;
      clip: rect(auto auto 26px 2px);
    }
     
    .rarrow:after {
      top: 2px;
      right: -9px;
      clip: rect(auto auto 26px 2px);
    }
     
    .green.rarrow:before {
      background: #64C878;
    }
     
    .green.rarrow:after {
      box-shadow: 0 1px 0 #B9ECC4 inset, -1px 0 0 #6C9F76 inset, -2px 0 0 #B9ECC4 inset;
      background: -webkit-linear-gradient(top left, #90DFA2, #84D494);
      background: -moz-linear-gradient(top left, #90DFA2, #84D494);
      background: linear-gradient(top left, #90DFA2, #84D494);
    }
     
    .green:hover {
      background: -webkit-linear-gradient(top, #aaebb9, #82d392);
      background: -moz-linear-gradient(top, #aaebb9, #82d392);
      background: linear-gradient(top, #aaebb9, #82d392);
    }
     
    .green:active {
      box-shadow: 0 1px 3px #4d7254 inset, 0 3px 0 #fff;
      background: -webkit-linear-gradient(top, #5eac6e, #72b37e);
      background: -moz-linear-gradient(top, #5eac6e, #72b37e);
      background: linear-gradient(top, #5eac6e, #72b37e);
    }
     
    .green.rarrow:hover:after,
    .green.larrow:hover:after {
      background: -webkit-linear-gradient(top left, #aaebb9, #82d392);
      background: -moz-linear-gradient(top left, #aaebb9, #82d392);
      background: linear-gradient(top left, #aaebb9, #82d392);
    }
     
    .green.rarrow:active:after,
    .green.larrow:active:after {
      background: -webkit-linear-gradient(top left, #63a870, #72b37e);
      background: -moz-linear-gradient(top left, #63a870, #72b37e);
      background: linear-gradient(top left, #63a870, #72b37e);
    }
     
    .green.rarrow:active:after {
      box-shadow: 0 1px 0 #4d7254 inset, -1px 0 0 #4d7254 inset;
    }
</style>

