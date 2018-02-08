<style>
  .layout {
    *border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }
</style>
<template>
  <div id="app">
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
      <Row type="flex">
        <i-col :span="spanLeft" class="layout-menu-left">
          <i-menu active-name="0-0" theme="dark" width="auto" :open-names="['1']">
            <div class="layout-logo-left"></div>
            <Submenu v-for="(item,index) in menu" name="index">
              <template slot="title">
                <Icon type="item.icon" :size="iconSize"></Icon>
                <span class="layout-text" v-text='item.name'>

                    </span>
              </template>
              <router-link v-for="(v,i) in item.children" :to="v.path">
                <Menu-item name="index-i" v-text='v.name'>

                </Menu-item>
              </router-link>

            </Submenu>

          </i-menu>

        </i-col>
        <i-col :span="spanRight">
          <div class="layout-header">
            <i-button type="text" @click="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </i-button>
            <Dropdown trigger="hover" class="dropdown">
              <a href="javascript:void(0)">
                用户名
                <Icon type="arrow-down-b"></Icon>
              </a>
              <Dropdown-menu slot="list">
                <Dropdown-item>个人信息</Dropdown-item>
                <Dropdown-item>退出登录</Dropdown-item>
              </Dropdown-menu>
            </Dropdown>
          </div>
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <router-link v-for="(item,index) in brumblist" :to="item.name">
              <Breadcrumb-item    >
                {{item.meta.name}}
              </Breadcrumb-item>
              </router-link>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <div class="layout-content-main" :style="contentStyle">
              <transition
                name="fade"
              >


                <router-view></router-view>
              </transition>
            </div>
          </div>
          <div class="layout-copy">
            2016-2017 &copy; 027wh
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
  import menu from '@/router/menu'

  export default {
    data() {
      return {
        menu: menu,
        spanLeft: 5,
        spanRight: 19,
        theme1: 'dark',
        brumblist:[],
        title:''
      }
    },
    watch:{
      $route(){
        this.getBreadcrumb()
      }
    },
    computed: {
      iconSize: function () {
        return this.spanLeft === 5 ? 14 : 24;
      },
      contentStyle: function () {
        var innerHeight = window.innerHeight;
        var contentHeight = innerHeight - 50 - 110;
        return "min-height: " + contentHeight + "px";
      }
    },
    methods: {
      toggleClick: function () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 5;
          this.spanRight = 19;
        }
      },
//    面包屑，路由路径
      getBreadcrumb() {
        this.brumblist = this.$route.matched;
      }
    },
    created(){
      this.getBreadcrumb();
    }

  }

</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .dropdown {
    float: right;
    line-height: 50px;
    margin-right: 15px;
  }
</style>
