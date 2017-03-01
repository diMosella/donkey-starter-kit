import React, { PureComponent, PropTypes } from 'react';
import Todo from './Todo';

class TodoList extends PureComponent {
  render () {
    const { todos, onTodoClick } = this.props;
    return <ul className='todo-list'>
      { todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      )}
    </ul>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;