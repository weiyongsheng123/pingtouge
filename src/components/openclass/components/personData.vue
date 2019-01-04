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
         <label for="name">姓名</label>
         <input type="text" id="name"/>
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
</style>
