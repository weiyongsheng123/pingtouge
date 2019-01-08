<template>
  <div>
    <div class="head-nav">
      <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#example-navbar-collapse"
            >
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" ref="color" @click="changeColor" href="#">平头哥</a>
          </div>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li
                v-for="(item,key,index) in navData1"
                :key="index"
                :class="item.newClass && 'dropdown'"
                @mouseover="item.newClass && showList()"
                @mouseout="item.newClass && hideList()"
              >
                <router-link :to="item.route">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    {{item.name}}
                    <b v-if="item.newClass" @touchstart="alerta" class="caret"></b>
                  </a>
                </router-link>
                <ul class="dropdown-menu" v-if="item.newClass">
                  <li v-for="(items,key,indexx) in navData2" :key="indexx">
                    <a :href="items.route">{{items.name}}</a>
                    <hr>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="seat"></div>
    <v-card id="create">
      <v-container fluid grid-list-md></v-container>
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :transition="transition"
      >
        <v-btn slot="activator" v-model="fab" color="blue darken-2" dark fab>
          <v-icon class="moveTop">add</v-icon>
          <v-icon class="moveTop">close</v-icon>
        </v-btn>
        <v-btn fab dark small color="green">
          <v-icon title="给我们留言">edit</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon title="联系我们">comment</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "headNav",
  props: {
    select: String
  },
  data() {
    return {
      isShow: false,
      colors: [
        "red",
        "green",
        "yellow",
        "blue",
        "pink",
        "purple",
        "gray",
        "white"
      ],
      navData1: [],
      navData2: [],
      nowPage: 0,
      direction: "top",
      fab: true,
      fling: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "slide-y-reverse-transition"
    };
  },
  methods: {
    changeColor() {
      const index = Math.floor(Math.random() * 8);
      this.$refs.color.style.color = this.colors[index];
    },
    showList(el) {
      var el1 = el.currentTarget || el.srcElement;
      var el = el1.lastChild;
      el.style.display = "block";
    },
    hideList(el) {
      var el1 = el.currentTarget || el.srcElement;
      var el = el1.lastChild;
      el.style.display = "none";
    },
    alerta(el) {
      var el1 = el.currentTarget || el.srcElement;
      var el =
        el1.parentElement.parentElement.nextElementSibling;
      if (this.isShow) {
        el.style.display = "none";
        this.isShow = false;
      } else {
        el.style.display = "block";
        this.isShow = true;
      }
    },
    handleShow (res) {
      res = res.data
      for (let i=0;i<res.length;i++) {
        if (res[i].parentId == 0){
          this.navData1.push(res[i])
          this.navData1[i].newClass = ''
        }
        else if (res[i].parentId == 3){
          this.navData2.push(res[i])
          this.navData1[res[i].parentId].newClass = true
        }
        
        if (res[i].name == this.select){
          this.nowPage = i
        }
      }
    }
  },
  updated () {
    $(".navbar-nav>li").eq(this.nowPage).addClass("active")
  },
  mounted () {
    this.$axios
      .get("/api/portal/navigation/all")
      .then(this.handleShow)
  }
};
</script>

<style lang="stylus" scoped>
.head-nav {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  height: 50px;

  .navbar {
    margin-bottom: 0px;
    background: #191a1c;
    color: #fff;
    border-color: #191a1c;
  }
}

.dropdown-menu {
  background: #191a1c;
}

.navbar-nav>li a {
  color: #777;
  text-decoration: none;
}

hr {
  margin: 9px 0;
}

.seat {
  width: 100%;
  height: 50px;
}

#create {
  width: 0px;
  height: 0px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 999;

  .v-speed-dial {
    position: absolute;

    .v-btn {
      div {
        .moveTop {
          margin-top: -11px;
        }
      }
    }
  }

  .v-btn--floating {
    position: relative;
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .caret {
    border-width: 10px 10px 0 10px;
  }

  #create {
    bottom: 20px;
    right: 0px;
  }
}
</style>
