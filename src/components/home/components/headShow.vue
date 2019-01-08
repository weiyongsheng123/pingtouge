<template>
  <div class="headshow">
    <div id="background">
      <canvas id="myc"></canvas>
    </div>
    <v-parallax dark src="">
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
    }
  },
  methods: {
  },
  mounted () {
    var c = document.getElementById("myc");
        var ctx = c.getContext("2d");
        var wid = document.getElementById("background").offsetWidth;
        var hei = document.getElementById("background").offsetHeight;
        c.width = wid;
        c.height = hei;
        function getrad(deg) {
            return deg / 180 * Math.PI;
        }
        var rect = [],//放置矩形的数组
            circle = [],//放置圆形数组
            dx = 20,//两个矩形距离
            dy = 5,//矩形向下运行速度
            n = c.width / dx;//每行绘制矩形个数，随窗口变化而变
        //为数组末尾rect追加值
        for (var i = 0; i < n; i++) {
            rect.push(
                {
                    x: dx * i,
                    y: Math.random() * c.height,//不超过画布高度
                    w: Math.random() * c.height / 4 + 30,
                    h: 10,//不超过画布高度，增加条长度30
                    dx: Math.random() * dy + 1,//速度高于一
                    opc:Math.random()
                })
        }
        //为circl数组末尾追加值
        for (var i = 0; i < 50; i++) {
            circle.push({
                x: Math.random() * c.width,
                y: Math.random() * c.height,
                r: Math.random() * 120 + 30,
                s: Math.random() * 5,
                opc: Math.random()
            })
        }

        ctx.fillStyle = "#001132";

        function draw() {
            ctx.clearRect(0, 0, c.width, c.height);
            for (i = 0; i < n; i++) {
                ctx.globalAlpha = rect[i].opc;//透明度 (globalAlpha) 
                ctx.fillRect(rect[i].x, rect[i].y, rect[i].w, rect[i].h);//使用 fillStyle 属性所指定的颜色、渐变和模式来填充指定的矩形。
                rect[i].x = rect[i].x + rect[i].dx;
                if (rect[i].x >= c.width) {//超出画布范围
                    rect[i].x = -rect[i].w;//将其重新移至画布另一端出现
                }
            }
            for (i = 0; i < 10; i++) {  
                ctx.fillStyle = "#056";
                ctx.globalAlpha = circle[i].opc;
                ctx.beginPath();
                ctx.globalCompositeOperation = "lighter";//源图像与目标图像重复部分为亮色
                ctx.arc(circle[i].x, circle[i].y, circle[i].r, getrad(0), getrad(360));
                ctx.fill();
                circle[i].x = circle[i].x - circle[i].s;
                if (circle[i].x <= -circle[i].r) {//超出画布范围
                    circle[i].x = c.width + 100;//将其重新移至画布另一端出现
                }
            }
            requestAnimationFrame(draw);
        }
        draw();
  }
}
</script>

<style lang="stylus" scoped>
  .headshow
    width: 100%
    position: relative
    #background
      position: absolute
      width: 100%
      height: 100%
      left: 0px
      top: 0px
      z-index: 0
      background-color: #121a2a
  h1
    color: white
    font-family: 'cyjianxk166a595d701ed0d' !important
    user-select: none
  h4
    user-select: none
  .commonBtn
    margin-top: 140px
    a
      &:hover
        text-decoration: none
      .v-btn
        background-color: transparent !important
        color: #ffffff
        border: 1px solid #ffffff
        height: 40px
        line-height: 21px
        font-size: 15px
        padding-left: 17px
        padding-right: 17px
        text-decoration: none
        &:hover
          text-decoration: none
  @media screen and (min-width: 500px)
    h1
      font-size: 56px !important
    h4
      font-size: 26px !important 
    .commonBtn
      a
        .v-btn
          margin: 0px 20px
          min-width: 120px
  @media screen and (min-width: 300px) and (max-width: 500px)
    h1
      font-size: 36px !important
    h4
      font-size: 16px 
    .v-parallax__content
      width: 100%
      .layout.align-center.column
        width: 100% 
    .commonBtn
      width: 100%
      .xunlian
        min-width: 60px
        width: 34%
        margin: 20px 33%
      .guanyu
        min-width: 60px
        width: 34%
        margin: 10px 5% 0px 10.5%
      .jiaru
        min-width: 60px
        width: 34%
        margin: 10px 10% 0px 5%
</style>
