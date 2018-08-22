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

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: "a" },
      { text: "b" },
      { text: "c" }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello, vue.js!'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello, Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7=new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id: 0, text: 'V'},
      {id: 1, text: 'C'},
      {id: 2, text: 'W'}
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    isButtonDisabled: true,
    ok: true
  },
  methods: {
    toggleButtonDisabled: function(event){
      this.isButtonDisabled = !this.isButtonDisabled;
      this.ok = !this.ok;
    }
  }
})