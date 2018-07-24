<template>
  <div class="city">
    <city-header :cityValue="city"></city-header>  
    
  </div>
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
export default {
  name: 'City',
  data() {
    return {
      city: 'City1',

    }
  },
  components: {
    CityHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 
</style>
