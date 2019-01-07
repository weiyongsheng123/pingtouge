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
         <input type="text" name="name" required/>
         <label for="name">姓名</label>
         <div class="bottom-line"></div>
       </div>
       <div class="input-select">
         <input type="radio" name="sex" value="男"/>男
         <input type="radio" name="sex"  value="女"/>女
         <label for="sex">性别</label>
         <div class="bottom-line"></div>
       </div>
       <div class="input-container">
         <input type="text" name="school" required/>
         <label for="school">就读学校</label>
         <div class="bottom-line"></div>
       </div>
       <div class="input-container">
         <input type="text" name="phone" required/>
         <label for="phone">联系方式</label>
         <div class="bottom-line"></div>
       </div>
        <div class="input-container">
         <input type="text" name="date" required/>
         <label for="date">时间</label>
         <div class="bottom-line"></div>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personData',
    data: () => ({
    })
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
    .data
      .input-container
        width: 20%
        height: 50px
        margin-top: 30px
        margin-bottom: 30px
        margin-left: 10%
        font-size: 23px
        line-height: 1.0
        display: inline-block
        position: relative
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
          font-size: 23px
          line-height: 1.0
          &:focus
            + label
              transition: all 0.75s
              transform: translate(-45px,-30px)
          &:valid
            + label
              transition: all 0.75s
              transform: translate(-45px,-30px)
      .input-select
        width: 20%
        height: 50px
        margin-top: 30px
        margin-bottom: 30px
        margin-left: 10%
        font-size: 20px
        line-height: 1.0
        display: inline-block
        position: relative
        padding: 10px 0 0 0
        input
          width: 20px
          height: 20px
          margin-left: 10px
          margin-right: 5px
          &:checked
            ~ label
              transition: all 0.75s
              transform: translateY(-30px)
        label
          font-size: 20px
          line-height: 1.0
          font-weight: 400
          position: absolute
          left: -45px
          top: 15px
        .bottom-line
          width: 100%
          height: 2px
          background: #000
          margin-top: 10px
</style>
