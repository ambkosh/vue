Vue.component('vmenu', {
    template: 
    '<ul><li v-on:click="activeColor(item)" v-bind:class="{ active: item.isActive }" v-for="item in menu" :key="item.menuPos"> {{ item.text }} </li></ul>',
    data: function () {
        return {
            menu: [
                { menuPos: 1, text: "First item", isActive: false},
                { menuPos: 2, text: "Second item", isActive: false}
            ],
            isActive: false,
            activeMenuItem: "" 
        }
    },
    methods: {
        activeColor: function (activeValue) {
            activeValue.isActive = !activeValue.isActive;
            activeMenuItem = activeValue.text;
            this.$emit('colorChange');
            console.log(activeMenuItem);
        }
    }
})


new Vue ({
    el: '#stats',
    data: {
        activeMenuItem: ''
    },
    methods: {
        activeColor: function () {
            console.log(this)
        }
    }
})