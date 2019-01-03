<template>
  <div class="ourTeachers">
    <h3 class="section-title text-center">教师团队</h3>
    <div class="hr"></div>
    <div class="teachers">
      <ul>
        <li v-for="(item,index) in companyTeacher1" :key="index">
          <img :src="item.teacherAvatar">
          <h3>{{item.teacherName}}</h3>
          <h4>{{item.teacherDuties}}</h4>
          <p>{{item.teacherDetails}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "companyTeacher",
    data: () => ({
      companyTeacher1: []
    }),
    methods: {
      handleShow (res) {
        this.companyTeacher1 = res.data
      }
    },
    mounted () {
      this.$axios
        .get("/api/portal/navigation/queryTeacher")
        .then(this.handleShow)
    }
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
          float: left
          list-style: none
          border: 1px solid #eee
          text-align: center
          border-radius: .375rem
          box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2)
          box-sizing: border-box
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
            height: 100px
            margin-top: -30px
            border-radius: 50%
  @media screen and (min-width: 500px)
    .teachers
      ul
        li
          width: 20%
          min-height: 375px
          margin: 10px 2.5%
          margin-bottom: 30px
          img
            width: 60%
  @media screen and (min-width: 300px) and (max-width: 500px)
    .teachers
      ul
        li
          width: 80%
          min-height: 250px
          margin: 20px 10%
          img
            width: 50%
</style>
