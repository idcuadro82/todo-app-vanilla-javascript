import {
  FILTER_ALL,
  FILTER_COMPLETE,
  FILTER_PENDING
} from '../components/TodoFilter/TodoFilter.js';

class TodoListObserver {
  constructor() {
    this._todoList = [];
    this._currentFilter = 'all';
    this._subscribers = [];
  }

  get todoList() {
    let filteredList = [];
    switch (this._currentFilter) {
      case FILTER_COMPLETE:
        filteredList = this._todoList.filter(todo => todo.completed);
        break;
      case FILTER_PENDING:
        filteredList = this._todoList.filter(todo => !todo.completed);
        break;
      case FILTER_ALL:
      default:
        filteredList = JSON.parse(JSON.stringify(this._todoList));
        break;
    }
    return filteredList;
  };

  set todoList(todoList) {
    console.log('todoList  => ', todoList);
    this._todoList = JSON.parse(JSON.stringify(todoList));
    this._filteredList = JSON.parse(JSON.stringify(todoList));
    this.notify();
  }

  addTodo = (todo) => {
    this._todoList.push(todo);
    this.notify();
  }

  addSubscriber = (callback) => {
    this._subscribers.push(callback);
  }

  updateTodo = (id, state) => {
    const todo = this._todoList.find(todo  => todo.id == id);
    todo.completed = state;
    this.notify();
  }

  filterTodoList = (filter) => {
    this._currentFilter = filter;
    this.notify();
  }

  notify = () => {
    this._subscribers.forEach(subscriber => {
      subscriber(this.todoList);
    });
  }
}

const instance = new TodoListObserver();

export default instance;
