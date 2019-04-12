class Task {
    constructor() {
       this.toDoList = [];
    }
    getInputValue() {
        this.inputValue = document.querySelector('.add').value;
            console.log(this.inputValue)
    }
}
const task = new Task();
