class TodoItem {
  constructor({ title, description, completed }) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
  render() {
    const { title, description, completed } = this;
    const checkText = completed ? "Completed" : "Pending";
    const componentClass = `todo-item ${ completed ? 'completed' : '' }`;

    return `
      <div class="${componentClass}">
        <div class="todo-item__info">
          <div class="row"> 
            <label>Title:</label>
            <p>${title}</p>
          </div>
          <div class="row">
            <label>Description:</label>
            <p>${description}</p>
          </div>
        </div>
        <div class="todo-item__state">
          <label class="checkbox-container">
            ${checkText}
            <input
              type="checkbox"
              name="todoItemCheckbox"
              ${completed ? 'checked' : ''}
            >
            <span class="check-mark"></span>
          </label>
        </div>
      </div>
    `;
  }
}

export default TodoItem;
