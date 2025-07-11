import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

function TodoList({ todos, toggleTodo, deleteTodo }: { todos: todo[]; toggleTodo: (id: number) => void; deleteTodo: (id: number) => void }) {
    return (
        <ul className='todo__list'>
            {/* <!-- 할 일 목록이 없을 때 --> */}
            {todos.length === 0 && <TodoListEmpty />}
            {/* <!-- 할 일 목록이 있을 때 -->*/}
            {todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList;
