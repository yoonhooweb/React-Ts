import TodoEdit from "./TodoEdit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Todo() {
    return (
        <>
            <TodoHeader />
            {/* 할 일 등록 */}
            <TodoEdit />
            {/* <!-- 할 일 목록 --> */}
            <TodoList />
        </>
    );
}

export default Todo;
