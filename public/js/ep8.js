Vue.component('task-list', {
    data: function () {
        return {
            tasks: [
                { description: 'Go to the work', complete: false },
                { description: 'Code some stuff', complete: false },
                { description: 'Go home', complete: false },
                { description: 'Go for a run', complete: false },
            ]
        }
    },
    template: `<div><task v-for="task in tasks" v-bind:key="task.description">{{ task.description }}</task></div>`
})

Vue.component('task', {
    template: `<li><slot></slot></li>`
})


new Vue({
    el: '#app-8'
})




