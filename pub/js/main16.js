var app22 = new Vue({
  el: '#app-23',
  data: {
    number01: 0,
    number02: 0,
    isActive: false
  },
  computed: {
    sum() {
      return Number(this.number01) + Number(this.number02);
    }
  },
  watch: {
    number01(value){
      console.log("[N01]"+value);
    },
    number02(value){
      console.log("[N02]"+value);
    }
  }
});
