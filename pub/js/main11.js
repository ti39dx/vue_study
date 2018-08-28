var comp18 = Vue.component('button-counter',{
  data: function(){
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

var app18 = new Vue({
  el: '#app-18'
});
