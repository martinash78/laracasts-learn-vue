new Vue({
  el: '#episode-6',
  data: {
    tasks: [
      { description: 'Make breakfast', completed: true},
      { description: 'Make lunch', completed: false},
      { description: 'Make dinner', completed: false},
      { description: 'Make supper', completed: false},
      { description: 'Go to bed', completed: false},
    ]
  },
  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => ! task.completed);
    },
    completeTasks() {
      return this.tasks.filter(task => task.completed);
    }
  }
})
