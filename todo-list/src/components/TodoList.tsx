import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

function TodoList({
    todoList,
    toggleChecked,
    dataDelete,
    deleteCheckedTodos,
    handleModify,
}: {
    todoList: todoType[];
    toggleChecked: (id: number) => void;
    dataDelete: (id: number) => void;
    deleteCheckedTodos: () => void;
    handleModify: (id: number, data: string) => void;
}) {
    return (
        <ul className='todo__list'>
            {/* <!-- 할 일 목록이 없을 때 --> */}
            {todoList.length === 0 && <TodoListEmpty />}
            {/* <!-- 할 일 목록이 있을 때 -->*/}
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} toggleChecked={toggleChecked} dataDelete={dataDelete} handleModify={handleModify} />
            ))}
            <button onClick={deleteCheckedTodos}>체크된 할 일 삭제</button>
        </ul>
    );
}

export default TodoList;
