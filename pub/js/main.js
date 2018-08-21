new Vue({
  el: '#container',
  components: {
    'hoge001': {
      template: '<h1>テスト</h1>'
    }
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleDateString()
  }
})

var app3 = new Vue({
  el: '#app-3 #app-3-1',
  components: {
    'hoge002': {
      template: '<p id="cl1">テスト</p>'
    }
  }
})