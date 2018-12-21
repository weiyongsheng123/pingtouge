<template>
  <div class="courseSize">
    <div class="trainingCourseTop">
      <div class="jumbotron">
        <div class="jumbotronInner">
          <h3 class="jumbotronFont">训练营课程</h3>
          <div class="shortHr"></div>
        </div>

        <div class="panelOne">
          <div class="panelImage">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="imageCourseOne">
                  <img src="../../../assets/images/practise/cource1.png" width="100%" height="100%">
                </div>
              </div>
            </div>

            <div class="panelOneFont">
              <div class="camp-card-info">
                <div class="camp-card-title">平头哥求职私教服务</div>
                <div
                  class="camp-card-highlight"
                >多名FLAG资深面试官一对一求职指导。从简历的修改和投递，到面试的模拟和反馈，全程陪同一条龙服务。暂时只面向北美公司的全职岗位。</div>
                <div class="camp-card-preview">随时报名，随时可以开始私教服务。</div>
                <div class="camp-card-teacher">
                  <img v-for="(item,index) in src" :key="index"
                    class="camp-card-teacher-avatar"
                    :src="item"
                  >
                </div>
                <div class="camp-card-schedule">随时报名，随时开始</div>
                <div class="camp-card-button"><a class="btn btn-complete" href="/course/8/">查看详细</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trainingCourse",
  data() {
    return {
      src: [
        "https://media-cdn.jiuzhang.com/avatars/%E9%A3%8E%E6%B8%85%E6%89%AC.png",
        "https://media-cdn.jiuzhang.com/avatars/15036309586265.jpg",
        "https://media-cdn.jiuzhang.com/avatars/%E9%A3%8E%E8%A1%8C%E8%80%85.jpg",
        "https://media-cdn.jiuzhang.com/avatars/%E6%AE%B5%E8%AA%89.png",
        "https://media-cdn.jiuzhang.com/avatars/%E8%8A%B1%E6%97%A0%E7%BC%BA.jpeg",
        "https://media-cdn.jiuzhang.com/avatars/%E9%A5%BA%E5%AD%90.png",
        "https://media-cdn.jiuzhang.com/avatars/%E5%8A%A0%E8%8F%B2%E5%96%B5.jpeg",
        "https://media-cdn.jiuzhang.com/avatars/%E6%97%A0%E5%B4%96%E5%AD%90.jpeg",
        "https://media-cdn.jiuzhang.com/avatars/%E5%B0%8F%E7%8E%8B%E5%AD%90.jpeg"
      ]
    };
  }
};
</script>

<style scoped>
.trainingCourseTop {
  width: 100%;
  min-height: 500px;
}

.courseSize {
  min-height: 500px;
  clear: both;
}

.jumbotron {
  width: 100%;
  min-height: 500px;
  padding-top: 30px;
  padding-bottom: 0px;
  margin-bottom: 10px;
}

.jumbotronInner {
  margin-top: 0px;
  text-align: center;
}

.jumbotronFont {
  margin-top: 0px;
  margin-bottom: 20px;
  color: #8b617b;
}

.shortHr {
  background-color: #8b617b !important;
  font-weight: 400;
  height: 2px;
  margin: auto;
  width: 150px;
}

.panelOne {
  width: 66%;
  height: 300px;
  margin: auto;
  margin-top: 40px;
  position: relative;
}

.panelImage {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.panel-body {
  height: 320px;
}

.imageCourseOne {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 40%;
  height: 320px;
}

.panelOneFont {
  position: absolute;
  top: 15px;
  left: 38%;
  text-align: center;
  height: 320px;
  width:60%;
  margin-left: 2%;
}
.camp-card-info .camp-card-title {
  font-size: 24px;
  font-weight: 700;
}

.camp-card-info {
  margin: auto;
  width: 90%;
  text-align: center;
}

.camp-card-info div{
  width: 100%
}

.camp-card-info .camp-card-highlight {
  margin-top: 10px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.camp-card-info .camp-card-preview {
  font-size: 12px;
  color: #8590a6;
  font-weight: 700;
  margin-top: 10px;
}

.camp-card-info .camp-card-teacher {
    margin: 5px 0;
}

.camp-card-info .camp-card-teacher .camp-card-teacher-avatar {
    margin: 5px 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 5px 5px 15px 0 rgba(0,0,0,.1);
}

.camp-card-info .camp-card-button {
    text-align: center;
    margin-top: 15px;
}

.btn-complete, .btn-complete:focus {
    color: #fff;
    background-color: #48b0f7;
    border-color: #48b0f7;
}

.panel.panel-default {
  margin-bottom: 20px;
  width: 100%
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .imageCourseOne {
    width: 100%;
  }

  .panelOneFont {
    width: 100%;
    left: 0px;
    top: 330px
  }

  .panel-body {
    height: 200px
  }

  .imageCourseOne {
   height: 200px
  }

  .panelOne {
    width: 100%;
    min-height: 590px
  }

  .panelOneFont .camp-card-info {
    width: 100%;
  }

  .panelImage {
    position: static;
    float: left
  }

  .panelOneFont {
   position: static;
   float: left;
  }
}
</style>