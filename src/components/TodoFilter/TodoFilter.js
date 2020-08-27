import todoListObserver from "../../observers/TodoList.observer.js";

export const FILTER_ALL = 'all';
export const FILTER_COMPLETE = 'complete';
export const FILTER_PENDING = 'pending';

const filterOptionsConfig = [
  {
    id: 'filter-all',
    label: 'All',
    value: FILTER_ALL,
    attributeName: '_filterAllInput',
    checked: true
  },
  {
    id: 'filter-completed',
    label: 'Completed',
    value: FILTER_COMPLETE,
    attributeName: '_filterCompleteInput'
  },
  {
    id: 'filter-pending',
    label: 'Pending',
    value: FILTER_PENDING,
    attributeName: '_filterPendingInput'
  },
];

class TodoFilter {
  constructor(htmlNode = null) {
    this._htmlNode = htmlNode;
    filterOptionsConfig.forEach(filter => this[filter.attributeName] = null);
  }

  get htmlNode() {
    return this._htmlNode;
  }

  set htmlNode(htmlNode) {
    this._htmlNode = htmlNode;
    this.render();
  }

  addReferences() {
    filterOptionsConfig.forEach(filter => {
      this[filter.attributeName] = document.getElementById(filter.id);
      this[filter.attributeName].checked = filter.checked;
      this[filter.attributeName].addEventListener('change', (e) => {
        const filter = e.target.value;
        todoListObserver.filterTodoList(filter);
      });
    });
  }

  render() {
    this._htmlNode.innerHTML = `
      <div class="todo-filter">
      ${
      filterOptionsConfig.reduce((template, filter) => {
        const newOption = `
            <label class="todo-filter__item radio-container">
              <input
                type="radio"
                name="filter"
                id=${filter.id} 
                value=${filter.value} 
              />
              <span class="radio-mark"></span>
              ${filter.label}
            </label>
          `;
        return `${template}${newOption}`;
      }, '')
      }
      </div>
    `;
    this.addReferences();
  }
}

export default TodoFilter;
