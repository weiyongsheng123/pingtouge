<template>
  <div>
    <v-parallax
    dark
    src="http://www.uml.org.cn/itnews/images/201507210202.jpg"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">蚌埠平头哥学院</h1>
        <h4 class="subheading">HONEY BADGER COLLEGE</h4>
        <div class="commonBtn">
          <router-link to="/practise">
            <v-btn>训练课堂</v-btn>
          </router-link>
          <router-link to="/information">
            <v-btn>关于公司</v-btn>
          </router-link>
          <router-link to="/recruit">
            <v-btn>加入我们</v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'headShow',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="stylus" scoped>
  h1
    color: white
    font-size: 56px !important
    font-family:'cyjianxk166a595d701ed0d' !important
  h4
    font-size: 26px !important
  .commonBtn
    margin-top: 140px
    .v-btn
      background-color: transparent !important
      color: #ffffff
      border: 1px solid #ffffff
      margin: 0px 20px
      min-width: 120px
      height: 40px
      line-height: 21px
      font-size: 15px
      padding-left: 17px
      padding-right: 17px
  @media screen and (min-width: 300px) and (max-width: 600px)
    h1
      font-size: 36px !important
      font-family:'cyjianxk166a595d701ed0d' !important
    h4
      font-size: 16px !important
</style>
