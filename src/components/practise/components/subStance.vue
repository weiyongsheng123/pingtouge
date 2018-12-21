<template>
  <div>
    <v-parallax height="400" dark src="http://www.jmgtc.com/UploadFiles/8621.JPG">
      <v-layout align-center column justify-center>
        <h1 class="display-1 font-weight-thin mb-3">破茧从此开始</h1>
        <h4 class="subheading">通过一个月的集训，系统全面的学习，融会贯通一门技术知识。通过一对一，督学，考试等级制提高你的学习效果。</h4>
        <v-flex xs12 sm4 text-xs-center>
          <div class="distance">
            <v-btn flat large color="white">立即加入</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>

    <div class="icon">
      <div class="subStanceFeatures">
        <div class="subStanceFeaturesFont">
          <span class="glyphicon glyphicon-th-large btn-lg"></span>
          <p>一个月集训</p>
        </div>
      </div>
      <div class="subStanceFeatures">
        <div class="subStanceFeaturesFont">
          <span class="glyphicon glyphicon-user btn-lg"></span>
          <p>班主任监督练习</p>
        </div>
      </div>
      <div class="subStanceFeatures">
        <div class="subStanceFeaturesFont">
          <span class="glyphicon glyphicon-refresh btn-lg"></span>
          <p>毕业之后三个月可享受免费解疑</p>
        </div>
      </div>
      <div class="subStanceFeatures">
        <div class="subStanceFeaturesFont">
          <span class="glyphicon glyphicon-ok btn-lg"></span>
          <p>第一周免费试听</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "subStance",
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
.head-nav {
  font-size: 4rem;
}

.distance {
  margin: 50px 0px 0px 0px;
  font-size: 4rem;
}

.glyphicon {
  color:#8b617b;
  font-size: 50px;
}

.icon {
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 150px
}

.subStanceFeatures {
  width: 15%;
  margin-left: 4%;
  margin-right: 4%;
  float: left;
}

.subStanceFeatures:first-of-type{
  margin-left: 8%;
}

.subStanceFeaturesFont {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.subStanceFeaturesFont p {
  font-size: 16px;
  color: #8b617b;
}

.mainContent {
  margin-top: 18%;
}

.jumbotronFont{
  margin-top: 20px;
  color: #8b617b;
}

@media screen and (min-width: 300px) and (max-width: 500px){
  .glyphicon.btn-lg {
     font-size: 30px
  }
}
</style>