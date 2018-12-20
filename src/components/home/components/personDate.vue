<template>
  <div class="personDate">
    <h3 class="section-title text-center">个人日历</h3>
    <div class="hr"></div>
    <v-layout row wrap>
      <v-flex>
        <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
      </v-flex>
    </v-layout>
    <div class="classes">
       <h5>近期课程
         <router-link to="/openclass">
           <span>查看全部课程</span>
         </router-link>
       </h5>
       <ul>
         <li v-for="(item,index) in lectures" :key="index">
           <img :src="item.imgSrc" :alt="item.name">
           <section>
             <a>{{item.name}}</a>
             <p>{{item.desc}}</p>
           </section>
           <span>{{item.time}}</span>
         </li>
       </ul>
       <div class="blurred"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personDate",
    data: () => ({
      picker: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10),
      lectures: [
        {
          imgSrc: 'https://media-cdn.jiuzhang.com/seminar/cover/112_u6tJG3R.jpg',
          name: '【公开讲座】算法面试官带你剖析45分钟面试流程',
          time: '2018/12/20 上午11:00:00',
          desc: ''
        },
        {
          imgSrc: 'https://media-cdn.jiuzhang.com/course/java5_ng303ce.png',
          name: '【免费试听】九章基础算法班（Java）',
          time: '2018/12/19 下午8:00:00',
          desc: '从零学习Java'
        },
        {
          imgSrc: 'https://media-cdn.jiuzhang.com/course/fullstack.png',
          name: '【免费试听】全栈开发项目实战',
          time: '2019/1/7 上午2:00:00',
          desc: '这门课程学完，可以搞定全栈开发 entry-level 的所有面试问题，转专业小白快速pick前后端知识'
        },
        {
          imgSrc: 'https://media-cdn.jiuzhang.com/seminar/cover/112_u6tJG3R.jpg',
          name: '【公开讲座】算法面试官带你剖析45分钟面试流程',
          time: '2018/12/20 上午11:00:00',
          desc: ''
        },
        {
          imgSrc: 'https://media-cdn.jiuzhang.com/course/java5_ng303ce.png',
          name: '【免费试听】九章基础算法班（Java）',
          time: '2018/12/19 下午8:00:00',
          desc: '从零学习Java'
        },
        {
          imgSrc: 'https://media-cdn.jiuzhang.com/course/fullstack.png',
          name: '【免费试听】全栈开发项目实战',
          time: '2019/1/7 上午2:00:00',
          desc: '这门课程学完，可以搞定全栈开发 entry-level 的所有面试问题，转专业小白快速pick前后端知识'
        }
      ]
    })
  }
</script>

<style lang="stylus" scoped>
  .v-picker >>> .v-picker__body
     width: 100% !important
     height: 100% 
  .personDate
    width: 100%
    min-height: 450px
    overflow: hidden
    box-sizing: border-box
    background: rgba(221, 221, 221, .1)
    clear: both
    .section-title
      color: #8b617b
      font-size: 18px
      letter-spacing: 0.14px
      font-weight: 600
      margin-top: 10px
    .hr
      background-color: #8b617b!important
      font-weight: 400
      height: 2px
      margin: auto
      width: 100px
      background-color: rgb(46, 46, 46)
    .layout.row.wrap
      float: left
      .flex
        .v-picker
          text-align: center
          box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2)
    .classes
      height: 375px
      float: left
      margin: 0
      margin-top: 35px
      padding: 10px
      border: 1px solid #eee
      box-sizing: border-box
      box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2)
      overflow: hidden
      position: relative
      .blurred
        width: 100%
        height: 25px
        z-index: 99
        position: absolute
        left: 0
        bottom: 0
        background: linear-gradient(-180deg,hsla(0,0%,100%,0),#f1f1f1)
      h5
        padding: 0 20px
        box-sizing: border-box
        border-bottom: 1px solid hsla(0,0%,59%,.2)
        font-weight: 700
        font-size: 16px
        line-height: 24px
        margin: 0
        padding-bottom: 10px
        span
          float: right
          font-weight: 700
          font-size: 14px
          line-height: 24px
          vertical-align: middle
      ul
        width: 100%
        height: 325px
        overflow: auto
        padding: 0
        li
          width: 98%
          height: 30%
          list-style: none
          border-bottom: 1px solid hsla(0,0%,59%,.2)
          padding: 10px
          img
            width: 17%
            height: 100%
            float: left
          section
            display: block
            width: 50%
            height: 100%
            float: left
            margin-left: 2%
            overflow: hidden
            a
              width: 100%
              display: block
              float: left
              overflow: hidden
              font-size: 16px
              font-weight: 700
              color: #333
              line-height: 1.5
              outline: 0 !important
            p
              width: 100%
              float: left
              font-weight: 400
              font-size: 12px
              line-height: 1.2
              color: rgba(0, 0, 0, 0.65)
              text-overflow: ellipsis
              overflow: hidden
              margin: 0
          span
            display: block
            float: right
            width: 28%
            height: 100%
            font-size: 12px
            color: #99a2aa
            text-align: right
  @media screen and (min-width: 500px)
    .personDate
      padding: 15px
      .layout.row.wrap
        width: 42%
        margin-top: 25px
        padding: 10px
        .flex
          .v-picker
            width: 80%
            margin-left: 15%
      .classes
        margin-left: 1%
        width: 57%
  @media screen and (min-width: 300px) and (max-width: 500px)
    .personDate
      padding: 0px
      .layout.row.wrap
        width: 100%
        margin-top: 15px
        padding: 0px
        .flex
          .v-picker
            width: 90%
            margin-left: 9%
      .classes
        margin-left: 0%
        width: 100%
</style>
