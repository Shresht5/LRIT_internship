class Todo {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    addTodo(text) {
        this.list.push({ done: false, text: text });
    }
    todoDone(text) {
        let position;
        for (let i = 0; i < this.list.length; i++) {
            if (text == this.list[i].text) {
                position = i
            };
        }
        this.list.splice(position, 1);
    }
    prints() {
        for (let i = 0; i < this.list.length; i++) {
            console.log(`${i + 1}. ${this.list[i].text} `);
        }
    }
};
let todoList = new Todo();
todoList.addTodo("new job");
todoList.todoDone("new job");
todoList.prints();
// console.log(todoList);
