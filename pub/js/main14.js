var comp21_1 = Vue.component('alert-box',{
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

var app21 = new Vue({
  el: '#app-21'
});
