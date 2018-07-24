<template>
  <div class="part">
    {{this.msg}}
  </div>
</template>

<script>
export default {
  name: 'Part',
  data() {
    return {
      msg: '这是第三部分'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 
</style>
