import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Todo() {
    const [todoArray, setTodoArray] = useState<todo[]>([]);

    const addTodoList = (text: string) => {
        setTodoArray((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);
    };

    return (
        <>
            <TodoHeader />
            {/* 할 일 등록 */}
            <TodoEdit todoArrayPush={addTodoList} />
            {/* <!-- 할 일 목록 --> */}
            <TodoList />
        </>
    );
}

export default Todo;
