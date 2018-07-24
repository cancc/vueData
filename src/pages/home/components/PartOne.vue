<template>
  <div>
    <transition name="slide-fade">
      <div class="part" v-if="show" @click="show = !show">
        {{this.msg}}--
      </div>
    </transition>
      <!-- <span @click="busValue">bus传值</span> -->
  </div>

</template>

<script>
export default {
  name: 'Part',
  data() {
    return {
      msg: '这是第一部分123456123',
      show: true,
      valueOne: '这是partOne'
    }
  },
  mounted() {
    this.getItem();
  },
  methods: {
    // busValue() {
    //   this.bus.$emit('change', this.valueOne)
    // },
     getItem() {
      sessionStorage.setItem("msgValue", this.msg);
      // console.log(this.msg)
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
