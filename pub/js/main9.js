// 他にイベントハンドラを使うものがないけど、passiveも設定できるというもの
var app14_1 = new Vue({
  el: '#app-14',
  data: {
    cnt: 0,
    text: ""
  },
  methods: {
    onScroll: function(event){
      console.log(event);
    },
    enterSpace: function(event){
      this.text = "[["+this.cnt+"]]<br>"+this.text;
      this.cnt++;
    }
  }
})
