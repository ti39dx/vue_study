var comp19 = Vue.component('blog-post',{
  template: '<p>POST</p>'
});

var comp19_2 = Vue.component('countupbutton',{
  template: '<button v-on:click="$emit(\'c-up\',0.1)">+</button>'
});

var comp19_3 = Vue.component('countdownbutton',{
  template: '<button v-on:click="$emit(\'c-down\',0.1)">-</button>'
});

var app19 = new Vue({
  el: '#app-19',
  data: {
    postFontSize: 1
  },
  methods: {
    up: function(ev){
      this.postFontSize+=ev;
    },
    down: function(ev){
      this.postFontSize-=ev;
      if(this.postFontSize <= 0.0){
        this.postFontSize = ev;
      }
    }
  }
});
