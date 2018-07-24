<template>
    <div>
        <div class="headerOne">
            {{this.msg}}
        </div>
    </div>
    
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
export default {
  name: 'CityHeader',
  data () {
    return {
      msg: 'This is City-Header-One-1'
    }
  },
  methods: {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .headerOne
    font-size 0.2rem
</style>
