import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

function TodoList({
    todoList,
    toggleChecked,
    handleDelete,
}: {
    todoList: todo[];
    toggleChecked: (id: number) => void;
    handleDelete: (id: number) => void;
}) {
    return (
        <ul className='todo__list'>
            {/* <!-- 할 일 목록이 없을 때 --> */}
            {todoList.length < 0 && <TodoListEmpty />}
            {/* <!-- 할 일 목록이 있을 때 -->*/}

            {todoList.map((todo) => {
                return <TodoListItem key={todo.id} todo={todo} toggleChecked={toggleChecked} handleDelete={handleDelete} />;
            })}
        </ul>
    );
}

export default TodoList;
