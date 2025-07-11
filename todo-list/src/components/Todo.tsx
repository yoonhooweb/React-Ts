import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

/* 최상단 부모컴포넌트에서 데이터 관리 */
function Todo() {
    const [todos, setTodos] = useState<todo[]>([]);

    function addTodo(text: string) {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);
    }

    const toggleTodo = (id: number) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => (todo.id !== id ? { ...todo, completed: !todo.completed } : todo)));
    };

    return (
        <>
            <TodoHeader />
            {/* 할 일 등록 */}
            <TodoEdit addTodo={addTodo} />
            {/* <!-- 할 일 목록 --> */}
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}

export default Todo;
