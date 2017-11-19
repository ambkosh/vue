Vue.component('menu-item', {
    props: ['menu'],
    template: '<li>{{ menu.text}}</li>'
})


var app = new Vue({
    el: '#app',
    data: {
        message: "Hello World",
        seen: true,
        menu: [
            { id: 0, text: 'Item1' },
            { text: 'Item2' },
            { text: 'Item3' }
        ],
        rawHTML: "<p>test und jetzt in <b>fett</b></p>",
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        } 
    }

})