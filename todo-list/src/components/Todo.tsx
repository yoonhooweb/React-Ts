import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

/* 최상단 부모컴포넌트에서 데이터 관리 */
function Todo() {
    const [todoList, setTodoList] = useState<todo[]>([]);

    const handleTodoList = (text: string) => {
        setTodoList((prev) => [
            ...prev,
            {
                id: Date.now(),
                text: text,
                completed: false,
            },
        ]);
    };

    const toggleChecked = (id: number) => {
        setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const handleDelete = (id: number) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <TodoHeader />
            {/* 할 일 등록 */}
            <TodoEdit handleTodoList={handleTodoList} />
            {/* <!-- 할 일 목록 --> */}
            <TodoList todoList={todoList} toggleChecked={toggleChecked} handleDelete={handleDelete} />
        </>
    );
}

export default Todo;
