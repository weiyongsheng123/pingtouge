<template>
  <div class="ourTeachers">
    <h3 class="section-title text-center">教师团队</h3>
    <div class="hr"></div>
    <div class="teachers">
      <ul>
        <li v-for="(item,index) in companyTeacher" :key="index">
          <img :src="item.imgSrc">
          <h3>{{item.name}}</h3>
          <h4>{{item.job}}</h4>
          <p>{{item.desc}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "companyTeacher",
    data: () => ({
      companyTeacher: [
        {
          name: '蔺老师',
          imgSrc: 'https://media-cdn.jiuzhang.com/avatars/guojing2.png',
          job: '大数据数据库开发工程师',
          desc: '曾就职于超过2家硅谷顶尖IT企业,  北美和国内顶尖IT企业offer数10+，面试人数超过200人。前算法竞赛国家集训队员，刷题数目超过 3000 道'
        },
        {
          name: '刘老师',
          imgSrc: 'https://media-cdn.jiuzhang.com/avatars/timgLZQTAQ7P.jpg',
          job: '人事',
          desc: '负责公司的招聘及运营'
        },
        {
          name: '贾老师',
          imgSrc: 'https://media-cdn.jiuzhang.com/avatars/zhoubotong.png',
          job: 'A公司全栈工程师',
          desc: 'AWS认证架构师，有多年云服务与容器集群的架构经验，曾参与设计多个初创公司的核心系统搭建。'
        }
      ]
    })
  }
</script>

<style lang="stylus">
  .ourTeachers
    padding: 5px 0
    clear: both
    background: rgba(221, 221, 221, .1)
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
    .teachers
      width: 100%
      min-height: 420px
      overflow: hidden
      ul
        width: 100%
        min-height: 400px
        padding: 30px 7%
        box-sizing: border-box
        li
          width: 20%
          min-height: 375px
          float: left
          list-style: none
          border: 1px solid #eee
          margin: 10px 2.5%
          margin-bottom: 30px
          text-align: center
          border-radius: .375rem
          box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2)
          boxing-sizing: border-box
          padding: 10px
          h3
            font-size: 18px
            font-weight: 700
          h4
            font-size: 14px
            font-weight: 700
            margin-bottom: 10px
            color: #8590a6
          p
            font-weight: 400
            font-size: 14px
            color: #333
          img
            width: 60%
            height: 100px
            margin-top: -30px
            border-radius: 50%
</style>
