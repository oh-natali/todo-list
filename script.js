const TodoItemNew = {
    props: ['todo'],
    template: `<li>{{ todo }}</li>`

}

const watchExample = Vue.createApp({
    data() {
        return {
            watchInput: '',
            groceryList: [
                'Сдать хвосты',
                'Новый год на носу',
                'Мозг кипит'
            ]
        }
    },
    watch: {
        watchInput(inputValue) {
            this.watchInput = inputValue;
        }
    },
    methods: {
        getAnswer() {
            axios
                .get('https://jsonplaceholder.typicode.com/todos/4')
                .then(response => cocnsole.log(response.data))
                .catch(error => error)
        },
        addTodo() {
            this.groceryList.push(this.watchInput)
        },
        deleteItem() {
            this.groceryList.splice(this.groceryList.length - 1, 1);
        },
        sortList() {
            this.groceryList.sort();
        }

    },
    components: {
        TodoItemNew
    },

}).mount('#list')