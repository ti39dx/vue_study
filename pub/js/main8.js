// 他にイベントハンドラを使うものがないけど、passiveも設定できるというもの
var app12 = new Vue({
  el: '#app-12',
  methods: {
    onScroll: function(event){
      console.log(event);
    }
  }
})
