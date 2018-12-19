<template>
  <div class="special">
    <h3 class="section-title text-center">课程特色</h3>
    <div class="hr"></div>
    <div class="list">
      <section v-for="(item,index) in classSpecial" :key="index">
        <span class="iconfont" v-html="item.icon"></span>
        <div class="desc">
          <h4>{{item.title}}</h4>
          <p>{{item.desc}}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classSpecial',
  data () {
    return {
      classSpecial: [
        {
          icon: '&#xe643;',
          title: '硅谷一线企业工程师授课',
          desc: '新鲜的求职经验，大公司的招聘标准，面试官的经验分享'
        },
        {
          icon: '&#xe8bb;',
          title: '多课时精品直播课程',
          desc: '定时定量，让你没有无从偷懒。每节课学员上座率超过95%，保证学习效果。'
        },
        {
          icon: '&#xe617;',
          title: '课堂实时答疑解惑',
          desc: '课堂有问题？助教老师来帮你。搞定所有拦路虎，学到更多的知识。'
        },
        {
          icon: '&#xe66f;',
          title: '课后配套阶梯训练',
          desc: '动手才是硬道理，边学边练效果好。知识掌握得更加踏实！'
        },
        {
          icon: '&#xe60a;',
          title: 'QA板块问答',
          desc: '保证每个学员的问题，都得到专业解答。不会烦恼到底哪个才是正确答案。'
        },
        {
          icon: '&#xe6d6;',
          title: '找到一起找工作的朋友',
          desc: '学员专属的QQ群，互助答疑，找人内推，认识朋友，求打鸡血。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .special
    width: 100%
    min-height: 350px
    overflow: hidden
    padding-top: 5px
    clear: both
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
    .list
      width: 100%
      box-sizing: border-box
      padding: 14px 0px 0% 12%
      min-height: 300px
      section
        width: 28%
        height: 140px
        float: left
        margin: 10px
        margin-top: 15px
        .iconfont
          font-size: 46px
          line-height: 1.1
          border: 1px solid #eee
          color: #8b617b
          box-shadow: 7px 7px 20px 0 rgba(0,0,0,.15)
          border-radius: 50%
          box-sizing: border-box
          padding: 12px
          float: left
        .desc
          width: 70%
          height: 100%
          float: left
          text-align: left
          margin-left: 5%
          vertical-align: middle
          overflow: hidden
          h4
            font-size: 22px
            font-weight: 300
            line-height: 1.3
            color: #626262
            font-family: 'Open Sans',Arial,sans-serif
          p
            color: #626262
            font-family: 'Open Sans',Arial,sans-serif
            font-size: 14px
            font-weight: 700
</style>
