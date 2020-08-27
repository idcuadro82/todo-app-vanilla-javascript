import TodoFilter from './components/TodoFilter/TodoFilter.js';
import TodoList from './components/TodoList/TodoList.js';
import TodoService from './services/todo.service.js';
import todoListObserver from './observers/TodoList.observer.js'

const todoListID = 'todo-list';
const todoFilterID = 'todo-filter';

class App {
  constructor(htmlNode = null) {
    this._htmlNode = htmlNode;
    this._filter = new TodoFilter();
    this._todoList = new TodoList();
    
    const resolveTodos = todoList => todoListObserver.todoList = todoList;
    TodoService.getTodoList().then(resolveTodos);
  }

  get htmlNode() {
    return this._htmlNode;
  }

  set htmlNode(htmlNode) {
    this._htmlNode = htmlNode;
    this.render();
  }

  renderFilter = () => {
    const filterNode = document.getElementById(todoFilterID);
    this._filter.htmlNode = filterNode;
    this._filter.render();
  }

  renderTodoList = () => {
    const todoListNode = document.getElementById(todoListID);
    this._todoList.htmlNode = todoListNode;
    this._todoList.render();
  }

  render = () => {
    this._htmlNode.innerHTML = `
      <div class="todo-app">
        <div class="todo-app__header">
          <div class="todo-app__title">TO-DO List.</div>
          <div id=${todoFilterID}></div>
        </div>
        <div class="todo-app__content">
          <div id=${todoListID}></div>
        </div>
      </div>
    `;

    this.renderFilter();
    this.renderTodoList();
  }
}

export default App;
