Vue.component('test', {
    props: ['selected'],
    data: function () {
        return {
            selectedValue: this.selected,
                sign_off_options: [
            {
                description: 'No',
                id: 0
            },
            {
                description: 'Yes',
                id: 1
            }
        ],
            seen: false
        }
    },
    methods: {
        showOrHide: function() {
            if (this.selectedValue == 1) {
                this.seen = true;
            } else {
                this.seen = false;
            }
        }
    },
    mounted: function () {
        this.showOrHide();
    },
    template: require('vue/templates/template.html')
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


new Vue({
    el: '#app-10'
})



