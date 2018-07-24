<template>
    <div>
        <div class="header">
            {{this.msg}}--{{this.cityValue}}--{{this.name}}
            <span @click="back">返回</span>
        </div>
        <city-header-one @getData="getOneData" :val="name"></city-header-one>
    </div>
    
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
import CityHeaderOne from '@/pages/city/components/headerOne'
export default {
  name: 'CityHeader',
  props: ['cityValue'],
  data () {
    return {
      msg: 'City-Header',
      name: this.cityValue,
      value: '',
    }
  },
  methods: {
      back() {
        //   window.history.go(-1);
        this.$router.go(-1)
        //this.$router.push("home")
        // console.log(this.name)
        // this.name = '123'
        // console.log(this.name)
      },
      getOneData(msg) {
        
        console.log(msg)
      }
  },
  components: {
    CityHeaderOne
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    background red 
    font-size 0.2rem
</style>
