import { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

/* 최상단 부모컴포넌트에서 데이터 관리 */
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
