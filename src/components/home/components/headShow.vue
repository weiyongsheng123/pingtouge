<template>
  <div>
    <v-parallax dark src="http://www.uml.org.cn/itnews/images/201507210202.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">蚌埠平头哥学院</h1>
        <h4 class="subheading">HONEY BADGER COLLEGE</h4>
        <div class="commonBtn">
          <router-link to="/practise">
            <v-btn class="xunlian">训练课堂</v-btn>
          </router-link>
          <router-link to="/information">
            <v-btn class="guanyu">关于公司</v-btn>
          </router-link>
          <router-link to="/recruit">
            <v-btn class="jiaru">加入我们</v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
data: {
}

export default {
  name: "headShow",
  data() {
    return {
      //
      NavigationList: []
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
h1 {
  color: white;
  font-family: 'cyjianxk166a595d701ed0d' !important;
  user-select: none;
}

h4 {
  user-select: none;
}

.commonBtn {
  margin-top: 140px;

  a {
    &:hover {
      text-decoration: none;
    }

    .v-btn {
      background-color: transparent !important;
      color: #ffffff;
      border: 1px solid #ffffff;
      height: 40px;
      line-height: 21px;
      font-size: 15px;
      padding-left: 17px;
      padding-right: 17px;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

@media screen and (min-width: 500px) {
  h1 {
    font-size: 56px !important;
  }

  h4 {
    font-size: 26px !important;
  }

  .commonBtn {
    a {
      .v-btn {
        margin: 0px 20px;
        min-width: 120px;
      }
    }
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  h1 {
    font-size: 36px !important;
  }

  h4 {
    font-size: 16px;
  }

  .v-parallax__content {
    width: 100%;

    .layout.align-center.column {
      width: 100%;
    }
  }

  .commonBtn {
    width: 100%;

    .xunlian {
      min-width: 60px;
      width: 34%;
      margin: 20px 33%;
    }

    .guanyu {
      min-width: 60px;
      width: 34%;
      margin: 10px 5% 0px 10.5%;
    }

    .jiaru {
      min-width: 60px;
      width: 34%;
      margin: 10px 10% 0px 5%;
    }
  }
}
</style>
