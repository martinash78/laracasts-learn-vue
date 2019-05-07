var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

new Vue({
  el: '#app-8',
  data: {
      names: [
          'Martin',
          'Steven',
          'Fred'
      ],
      newName: ''
  },
  methods: {
    addName: function() {
      this.names.push(this.newName);
      this.newName = '';
    }
  }
})

new Vue({
  el: '#app-9',
  data: {
     isLoading: false,
     disabled: false
  },
  methods: {
    toggleClass: function() {
        this.isLoading = true;
    },
    disableMe: function () {
        this.disabled = true;
    }
  }
})
