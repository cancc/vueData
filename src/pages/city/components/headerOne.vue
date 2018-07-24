<template>
    <div>
        <div class="headerOne">
            {{this.msg}}--<span @click="valueClick">{{this.val}}</span>
        </div>
        <CityHeaderTwo></CityHeaderTwo>
    </div>
    
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
import CityHeaderTwo from '@/pages/city/components/headerTwo'
export default {
  name: 'CityHeader',
  props: ['val'],
  data () {
    return {
      msg: 'City-Header-One1'
    }
  },
  methods: {
      valueClick() {
          this.$emit('getData', this.msg)
      }
  },
  components: {
      CityHeaderTwo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .headerOne
    font-size 0.2rem
</style>
