Vue.component('vmenu', {
    template: 
    '<ul><li v-on:click="toggleActive(item)" v-bind:class="{ active: isActive(item) }"  v-for="item in menu" :key="item.menuPos"> {{ item.text }} </li></ul>',
    data: function () {
        return {
            menu: [
                { menuPos: 1, text: "First item", isActive: false},
                { menuPos: 2, text: "Second item", isActive: false}
            ],
            activeMenuItem: 'none'
        }
    },
    methods: {
        isActive: function (activeItem) {
            // checks if menuPos is equal to menuPos of the clicked Item and then returns true or false
            // this toggles the active class
            return this.activeMenuItem === activeItem.menuPos; 
        },
        toggleActive: function (activeValue) {
            this.activeMenuItem = activeValue.menuPos; //toggles which Item is currently active
            parentMenuItem = activeValue.text; //parentMenuItem is the value that is uesed in the parent obect
            this.$emit('colorchange');

        }
    }
})


//not working. for some reason when parentMenuItem is updated in the parent, it does not get updated to this child. sucks
Vue.component('vcontent', {
    props: ['menutochild'],
    template: '<div><p> Parentitem: {{ menutochild }} </p></div>',
    data: function () {
        return {
            parentMenuItem: 'test'
        }
    }
})


new Vue ({
    el: '#stats',
    data: {
        activeMenu: "Currently none selected",
        parentMenuItem: 'default'
    },
    methods: {
        printMenu: function () {
            // console.log(activeMenuItem);
            this.activeMenu = parentMenuItem;
        }
    }
})