<template>
  <div class="home">
    <span @click="headerClick">点击</span>
    
    <home-header ref="homeheader" :mes="msg" :arrA="arr" :post='post' :tit="this.post.title"></home-header>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
export default {
  name: 'Home',
  data() {
    return {
      msg: '父组件的数据',
      arr: ['A','B','C'],
      post: {
        id: 1,
        title: 'hello'
      }
    }
  },
  methods: {
    headerClick() {
      console.log(this.$refs.homeheader.msg)
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 .home
   font-size 0.2rem
</style>
