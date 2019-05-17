

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





