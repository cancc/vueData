<template>
  <div class="hello">
 
      <!-- {{ msg }}--{{mes}} -->
      <router-link to="/partOne"><span @click="PClick" >partOne{{this.arrA}}</span></router-link>
      <p>点击测试</p>
      <router-link to="/partTwo"><span @click="postClick" ref="t">partTwo{{this.post.title}}{{this.tit}}</span></router-link>
      <router-link to="/city">
        <span @click="cityClick">跳转</span>
      </router-link>
      
      <router-view></router-view>

    
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    arrA: Array,
    post: Object,
    tit: String,
  },
  data () {
    return {
      msg: '子组件的数据',
      arrAA: this.arrA
    }
  },
  methods: {
    cityClick() {
      //this.$router.push("city")
    },
    PClick() {
      console.log(this.arrA)
    },
    postClick() {
      console.log(this.post)
      console.log(this.$refs.t.innerHTML)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .hello
    background pink
    font-size 0.2rem
</style>
