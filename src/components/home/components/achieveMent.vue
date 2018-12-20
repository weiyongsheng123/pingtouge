<template>
  <div class="achieve">
    <h3 class="section-title text-center">学员就业情况</h3>
    <div class="hr"></div>
    <article class="students">
      <h4><span class="iconfont">&#xe615;</span>平头哥成就</h4>
      <div class="tableData">
        <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-center">{{ props.item.sex }}</td>
            <td class="text-xs-center">{{ props.item.oldSalary }}</td>
            <td class="text-xs-center">{{ props.item.newSalary }}</td>
            <td class="text-xs-center">{{ props.item.age }}</td>
            <td class="text-xs-center">{{ props.item.educate }}</td>
            <td class="text-xs-center">{{ props.item.locale }}</td>
          </template>
        </v-data-table>
      </div>
    </article>
    <article class="famous">
      <h4><span class="iconfont">&#xe638;</span>就业知名企业</h4>
      <ul>
        <li v-for="(item,index) in famousCompany" :key="index"><img :src="item.iconSrc" :title="item.name" :alt="item.name"></li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'achieveMent',
  data () {
    return {
      headers: [
          {
            text: '学生姓名',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: '性别', value: 'sex' },
          { text: '培训前薪资', value: 'oldSalary' },
          { text: '培训后薪资', value: 'newSalary' },
          { text: '年龄', value: 'age' },
          { text: '学历', value: 'educate' },
          { text: '工作地点', value: 'locale' }
        ],
        desserts: [
          {
            name: '李**',
            sex: '男',
            age: 23,
            educate: '本科',
            locale: '北京',
            oldSalary: 4500,
            newSalary: 14000
          },
          {
            
            name: '刘**',
            sex: '女',
            age: 21,
            educate: '专科',
            locale: '北京',
            oldSalary: '应届生',
            newSalary: 9500
          },
          {
            
            name: '项*',
            sex: '男',
            age: 25,
            educate: '专科',
            locale: '北京',
            oldSalary: 3800,
            newSalary: 13000
          },
          {
            
            name: '肖**',
            sex: '男',
            age: 26,
            educate: '专科',
            locale: '广州',
            oldSalary: 3200,
            newSalary: 12000
          },
          {
            
            name: '李*',
            sex: '男',
            age: 22,
            educate: '专科',
            locale: '北京',
            oldSalary: 4000,
            newSalary: 14800
          },
          {
            
            name: '花*',
            sex: '女',
            age: 21,
            educate: '专科',
            locale: '上海',
            oldSalary: '应届',
            newSalary: 9500
          },
          {
            
            name: '孙*',
            sex: '男',
            age: 26,
            educate: '高中',
            locale: '北京',
            oldSalary: 3500,
            newSalary: 12000
          },
          {
            
            name: '王*',
            sex: '男',
            age: 22,
            educate: '学历不明',
            locale: '珠海',
            oldSalary: 3200,
            newSalary: 7500
          },
          {
            
            name: '吴*',
            sex: '男',
            age: 28,
            educate: '本科',
            locale: '上海',
            oldSalary: 3800,
            newSalary: 14500
          },
          {
            
            name: '曾**',
            sex: '男',
            age: 24,
            educate: '专科',
            locale: '深圳',
            oldSalary: 4800,
            newSalary: 11000
          },
          {
            name: '李**',
            sex: '男',
            age: 23,
            educate: '本科',
            locale: '北京',
            oldSalary: 4500,
            newSalary: 14000
          },
          {
            
            name: '刘**',
            sex: '女',
            age: 21,
            educate: '专科',
            locale: '北京',
            oldSalary: '应届生',
            newSalary: 9500
          },
          {
            
            name: '项*',
            sex: '男',
            age: 25,
            educate: '专科',
            locale: '北京',
            oldSalary: 3800,
            newSalary: 13000
          },
          {
            
            name: '肖**',
            sex: '男',
            age: 26,
            educate: '专科',
            locale: '广州',
            oldSalary: 3200,
            newSalary: 12000
          },
          {
            
            name: '李*',
            sex: '男',
            age: 22,
            educate: '专科',
            locale: '北京',
            oldSalary: 4000,
            newSalary: 14800
          },
          {
            
            name: '花*',
            sex: '女',
            age: 21,
            educate: '专科',
            locale: '上海',
            oldSalary: '应届',
            newSalary: 9500
          },
          {
            
            name: '孙*',
            sex: '男',
            age: 26,
            educate: '高中',
            locale: '北京',
            oldSalary: 3500,
            newSalary: 12000
          },
          {
            
            name: '王*',
            sex: '男',
            age: 22,
            educate: '学历不明',
            locale: '珠海',
            oldSalary: 3200,
            newSalary: 7500
          },
          {
            
            name: '吴*',
            sex: '男',
            age: 28,
            educate: '本科',
            locale: '上海',
            oldSalary: 3800,
            newSalary: 14500
          },
          {
            
            name: '曾**',
            sex: '男',
            age: 24,
            educate: '专科',
            locale: '深圳',
            oldSalary: 4800,
            newSalary: 11000
          }
        ],
        famousCompany: [
          {
            name: '华为',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t015bd85915c4d89207.jpg?size=400x400'
          },
          {
            name: '中国联通',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t01ceede01aa2055887.jpg?size=404x241'
          },
          {
            name: '中国移动',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t018a76296148820bf3.jpg?size=550x297'
          },
          {
            name: '德邦',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t0187bb1511aa3df4a5.jpg?size=800x800'
          },
          {
            name: 'HSBC',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t0118764db3ab88e169.jpg?size=800x418'
          },
          {
            name: '花旗银行',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t01bda47a528a53c8ee.jpg?size=268x157'
          },
          {
            name: '软通动力',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t011c2504a384a495ce.png?size=189x79'
          },
          {
            name: '文思海辉',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t019c60ac1a69a52632.jpg?size=268x141'
          },
          {
            name: '中国光大银行',
            iconSrc: 'https://p1.ssl.qhmsg.com/dr/270_500_/t01e747664fffdd36c0.jpg?size=268x204'
          }
        ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tableData >>> .column.text-xs-left
    text-align: center !important
  .tableData >>> .v-datatable__actions__select
    width: 110px
  .tableData >>> .v-input--hide-details.v-input--is-label-active.v-input--is-dirty
    pointer-events: none
    .v-input__append-inner
      display: none
  .achieve
    width: 100%
    height: auto
    clear: both
    padding-top: 20px
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
    .students
      float: left
      border: 1px solid #eee
      box-sizing: border-box
      box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2)
      h4
        padding: 0 20px
        box-sizing: border-box
        border-bottom: 1px solid hsla(0,0%,59%,.2)
        font-weight: 700
        font-size: 16px
        line-height: 24px
        margin: 0
        padding: 5px 10px
        span
          color: red
          margin: 0 5px
      .tableData
        width: 100%
        height: auto
    .famous
      float: left
      border: 1px solid #eee
      box-sizing: border-box
      box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, .2)
      h4
        padding: 0 20px
        box-sizing: border-box
        border-bottom: 1px solid hsla(0,0%,59%,.2)
        font-weight: 700
        font-size: 16px
        line-height: 24px
        margin: 0
        padding: 5px 10px
        span
          color: gray
          margin: 0 5px
      ul
        width: 100%
        margin: 0
        padding: 0
        overflow: auto
        background: #fff
        li
          list-style: none
          cursor: pointer
          width: 36%
          margin: 20px 7%
          height: 100px
          float: left
          img
            width: 100%
            height: 100%
  @media screen and (min-width: 500px)
    .students
      width: 60%
      margin: 30px 4%
    .famous
      width: 29%
      height: 390px
      margin: 30px 2% 20px 0
      ul
        height: 365px
  @media screen and (min-width: 300px) and (max-width: 500px)
    .students
      width: 100%
      margin: 30px 0
    .famous
      width: 100%
      height: auto
      margin: 10px 0 20px 0
      ul
        height: auto
</style>
