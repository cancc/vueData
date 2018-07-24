<template>
  <div class="part">
    {{this.msg}}
    <span @click="getItem">getItem</span>
  </div>
</template>

<script>
export default {
  name: 'Part',
  data() {
    return {
      msg: '这是第二部分',
      valueTwo: ''
    }
  },
  mounted() {
    // let that = this;
    // this.bus.$on('change', function(val) {
    //   that.valueTwo = val;
    //   console.log(that.valueTwo)
    // })

  },
  methods: {
    getItem() {
      const V = sessionStorage.getItem('msgValue');
      this.valueTwo = V;
      console.log(this.valueTwo)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 
</style>
