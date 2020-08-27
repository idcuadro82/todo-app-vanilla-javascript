import TodoItem from '../TodoItem/TodoItem.js';
import todoListObserver from "../../observers/TodoList.observer.js";
import CreateTodoItem from "../CreateTodoItem/CreateTodoItem.js";

export default class TodoList {
  constructor(htmlNode = null) {
    this._htmlNode = htmlNode;
    todoListObserver.addSubscriber(this.render);
  }

  get htmlNode() {
    return this._htmlNode;
  }

  set htmlNode(htmlNode) {
    this._htmlNode = htmlNode;
    this.render();
  }

  render = () => {
    this.cleanNode();

    this._htmlNode.innerHTML = `<div class="todo-list"></div>`;
    const todoListParent = this._htmlNode.childNodes[0];

    todoListObserver.todoList.forEach(todo => {
      const todoItem = new TodoItem({ ...todo });
      const todoItemHtml = todoItem.render();
      todoListParent.insertAdjacentHTML('beforeend', todoItemHtml);
      todoListParent.lastElementChild.querySelector('input').addEventListener('change', (e) => {
        todoListObserver.updateTodo(todo.id, !todo.completed);
      });
    });

    const createTodoItem = new CreateTodoItem();
    const createTodoItemHtml = createTodoItem.render();
    todoListParent.insertAdjacentHTML('beforeend', createTodoItemHtml);
  }

  cleanNode = () => {
    this._htmlNode.innerHTML = '';
  }
}
