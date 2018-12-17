<template>
  <div>
    <h3 class="section-title text-center">教师团队</h3>
    <div class="hr"></div>
    <div class="teachers">
      <ul>
        <li>
          <img src="https://media-cdn.jiuzhang.com/avatars/cjn.png">
          <h3>蔺老师</h3>
          <h4>大数据数据库开发工程师</h4>
          <p>什么都会，什么都教</p>
        </li>
        <li>
          <img src="https://media-cdn.jiuzhang.com/avatars/timgLZQTAQ7P.jpg">
          <h3>刘老师</h3>
          <h4>人事</h4>
          <p>人事招聘</p>
        </li>
        <li>
          <img src="https://media-cdn.jiuzhang.com/avatars/timgLZQTAQ7P.jpg">
          <h3>刘老师</h3>
          <h4>人事</h4>
          <p>人事招聘</p>
        </li>
        <li>
          <img src="https://media-cdn.jiuzhang.com/avatars/timgLZQTAQ7P.jpg">
          <h3>刘老师</h3>
          <h4>人事</h4>
          <p>人事招聘</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "companyTeacher",
    data: () => ({
      
    })
  }
</script>

<style lang="stylus">
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
    ul
      width: 100%
      min-height: 400px
      padding: 10px 7%
      box-sizing: border-box
      li
        width: 20%
        min-height: 375px
        float: left
        list-style: none
        border: 1px solid #eee
        margin: 10px 2.5%
        img
          width: 60%
          height: 100px
          margin: auto
</style>
