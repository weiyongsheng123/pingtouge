<template>
  <div class="person">
    <div class="title">
      <span class="iconfont">&#xe630;</span>
      <div class="hr">
        <h3>报名信息</h3>
      </div>
    </div>
    <div class="data">
      <div class="input-container">
        <input type="text" name="name" @focus="choose" @blur="unchoose" required/>
        <label for="name">姓名</label>
        <div class="bottom-line"></div>
      </div>
      <div class="input-container">
        <input type="radio" name="sex" class="select" value="男" @focus="choose" @blur="unchoose"/>男
        <input type="radio" name="sex" class="select" value="女" @focus="choose" @blur="unchoose"/>女
        <label for="sex">性别</label>
        <div class="bottom-line"></div>
      </div>
      <div class="input-container">
        <input type="text" name="school" required @focus="choose" @blur="unchoose"/>
        <label for="school">就读学校</label>
        <div class="bottom-line"></div>
      </div>
      <div class="input-container">
        <input type="text" name="phone" required @focus="choose" @blur="unchoose"/>
        <label for="phone">联系方式</label>
        <div class="bottom-line"></div>
      </div>
      <div class="input-container">
        <input type="text" name="date" required @focus="choose" @blur="unchoose"/>
        <label for="date">前来时间</label>
        <div class="bottom-line"></div>
      </div>
      <div class="input-container">
        <input type="text" name="experience" list="experlist" required @focus="choose" @blur="unchoose"/>
        <label for="experience">工作经验</label>
        <div class="bottom-line"></div>
        <datalist id="experlist">
          <option value="暂无"></option>
          <option value="3-6个月"></option>
          <option value="6-12个月"></option>
          <option value="1-3年"></option>
          <option value="3年以上"></option>
        </datalist>
      </div>
      <div class="input-container">
        <input type="text" name="birthday" required @focus="choose" @blur="unchoose"/>
        <label for="birthday">出生年月</label>
        <div class="bottom-line"></div>
      </div>
      <div class="input-container">
        <input type="text" name="classchoose" list="classlist" required @focus="choose" @blur="unchoose"/>
        <label for="classchoose">兴趣课程</label>
        <datalist id="classlist">
          <option value="大数据"></option>
          <option value="mysql"></option>
          <option value="oracal"></option>
        </datalist>
        <div class="bottom-line"></div>
      </div>
      <div class="input-container">
        <input type="file" name="file" class="file" required @focus="choose" @blur="unchoose"/>
        <label for="file">附件</label>
        <div class="bottom-line"></div>
      </div>
      <div
        v-ripple
        class="text-xs-center elevation-2 pa-4"
      >
        提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personData',
    data: () => ({
    }),
    methods: {
      choose (el) {
        var el = el.currentTarget || el.srcElement
        el.parentElement.style['box-shadow']="-10px -10px 10px #707070"
      },
      unchoose (el) {
        var el = el.currentTarget || el.srcElement
        el.parentElement.style['box-shadow']="10px 10px 10px #707070"
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .person
    clear: both
    padding: 10px 0px
    width: 100%
    min-height: 400px
    .title
      width: 94%
      margin-left: 2%
      .iconfont
        color: #707070
      .hr
        display: inline-block
        height: 4px
        background-color: #707070
        position: relative
        h3
          position: absolute
          left: 20px
          top: -55px
    .data
      padding-top: 30px
      .input-container
        padding-left: 1px
        line-height: 1.0
        border-right: 3px solid #707070
        box-shadow: 10px 10px 10px #707070
        display: inline-block
        position: relative
        background-color: #fff
        .bottom-line
          width: 100%
          height: 2px
          background: #000
        label
          font-size: 20px
          line-height: 1.0
          font-weight: 400
          position: absolute
          left: 0px
          top: 15px
        input
          outline: none
          width: 100%
          height: 100%
          font-size: 21px
          line-height: 1.0
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          &:focus
            + label
              transition: all 0.75s
              transform: translate(-40px,-30px)
          &:valid
            + label
              transition: all 0.75s
              transform: translate(-40px,-30px)
        .select
          width: 20px
          height: 20px
          margin-right: 5px
          font-size: 20px
          margin: 15px 0 15px 0
          margin-left: 20%
          &:valid
            + label
              transition: all 0.75s
              transform: translate(0)
          &:last-of-type
            margin-left: 20%
            &:checked
              ~ input
                margin-left: 10px
          &:checked
            ~ label
              transition: all 0.75s
              transform: translate(-40px,-30px)
        .file
          outline: none
          width: 180px
          height: 28px
          margin-right: 5px
          font-size: 15px
          box-sizing: border-box
          padding-top: 5px
          margin: 15px 0 8px 0
          margin-left: 20%
          &:valid
            width: 100%
            margin-left: 0px
            + label
              transition: all 0.75s
              transform: translate(-40px,-30px)
      .text-xs-center
        width: 30%
        margin-left: 35%
        margin-top: 30px
        margin-bottom: 30px
        font-size: 20px
        line-height: 1.0
        border: 1px solid #000
        box-shadow: 10px 10px 10px #707070 !important
  @media screen and (min-width: 500px)
    .person
      padding-top: 20px
      .title
        .iconfont
          font-size: 65px
        .hr
          width: 92%
          h3
            font-size: 22px
            line-height: 1
            font-weight: 400
            top: -55px
      .data
        .input-container
          width: 20%
          height: 50px
          margin-top: 30px
          margin-bottom: 30px
          margin-left: 20%
          font-size: 23px
          &:nth-of-type(odd)
            margin-left: 25%
          &:nth-of-type(even)
            margin-left: 10%
  @media screen and (min-width: 300px) and (max-width: 500px)
    .person
      padding-top: 30px
      .title
        .iconfont
          font-size: 40px
        .hr
          width: 80%
          h3
            font-size: 22px
            line-height: 1
            font-weight: 400
            top: -50px
      .data
        .input-container
          width: 70%
          height: 50px
          margin-top: 30px
          margin-bottom: 30px
          margin-left: 10%
          font-size: 16px
          &:nth-of-type(odd)
            margin-left: 10%
          &:nth-of-type(even)
            margin-left: 25%
        .text-xs-center
          padding-left: 10px !important
</style>
