var comp20_1 = Vue.component('custom-input',{
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

var app20 = new Vue({
  el: '#app-20',
  data: {
    value: ""
  }
});
