new Vue({
  el: '#episode-6',
  delimiters: ["<%","%>"],

  data: {
    tasks: [{
      description: 'Go to the store',
      isComplete: true
    }, {
      description: 'Finish tutorial',
      isComplete: true
    }, {
      description: 'Go to airport',
      isComplete: false
    }, {
      description: 'Clear Inbox',
      isComplete: false
    }, {
      description: 'Make dinner',
      isComplete: false
    }, {
      description: 'Clean room',
      isComplete: false
    }]
  },

  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => !task.isComplete)
    },
    completeTasks() {
      return this.tasks.filter(task => task.isComplete)
    }
  }
})