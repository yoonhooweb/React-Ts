import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

/* 최상단 부모컴포넌트에서 데이터 관리 */
function Todo() {
    const [todoList, setTodoList] = useState<todoType[]>([]);

    const handleTodoData = (data: string) => {
        setTodoList((prev) => [
            ...prev,
            {
                id: Date.now(),
                data: data,
                completed: false,
            },
        ]);
    };

    const toggleChecked = (id: number) => {
        setTodoList(todoList.map((prev) => (prev.id === id ? { ...prev, completed: !prev.completed } : prev)));
    };

    const dataDelete = (id: number) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    };

    const handleModify = (id: number, data: string) => {
        setTodoList((prev) => prev.map((todo) => (todo.id === id ? { ...todo, data: data } : todo)));
    };

    const deleteCheckedTodos = () => {
        setTodoList((prev) => prev.filter((todo) => !todo.completed));
    };

    return (
        <>
            <TodoHeader />
            {/* 할 일 등록 */}
            <TodoEdit handleTodoData={handleTodoData} />
            {/* 할 일 목록 */}
            <TodoList
                deleteCheckedTodos={deleteCheckedTodos}
                todoList={todoList}
                toggleChecked={toggleChecked}
                dataDelete={dataDelete}
                handleModify={handleModify}
            />
        </>
    );
}

export default Todo;
