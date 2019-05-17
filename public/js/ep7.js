Vue.component('episode7-component', {
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
    template: '<div class="col-12">\n' +
        '    <select id="sign_off" @change="showOrHide(this.value)" v-model="selectedValue">\n' +
        '        <option\n' +
        '            v-for="option in sign_off_options"\n' +
        '            :selected="option.id == 1"\n' +
        '            :value="option.id" >{{ option.description }}</option>\n' +
        '    </select>\n' +
        '    <p v-if="seen">Message Can Be Seen!</p>\n' +
        '</div>'
})


new Vue({
    el: '#app-7'
})




