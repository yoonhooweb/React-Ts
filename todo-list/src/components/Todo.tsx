import { useCallback, useEffect, useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
/* import { addTodo, deleteTodo, fetchTodos, handleModifyApi } from "../todo"; */

/* 최상단 부모컴포넌트에서 데이터 관리 */
function Todo() {
    /* const [todoList, setTodoList] = useState<todoType[]>([]); */
    const [todoList, setTodoList] = useState<todoType[]>(JSON.parse(localStorage.getItem("todoList") || "[]"));

    const handleTodoData = (data: string) => {
        setTodoList((prev) => [
            ...prev,
            {
                id: Date.now(),
                title: data,
                completed: false,
            },
        ]);
    };

    const toggleChecked = useCallback((id: number) => {
        setTodoList(todoList.map((prev) => (prev.id === id ? { ...prev, completed: !prev.completed } : prev)));
    }, []);

    const dataDelete = useCallback((id: number) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }, []);

    const deleteCheckedTodos = useCallback(() => {
        setTodoList((prev) => prev.filter((todo) => !todo.completed));
    }, []);

    const handleModify = useCallback((id: number, data: string) => {
        setTodoList((prev) => prev.map((todo) => (todo.id === id ? { ...todo, data: data } : todo)));
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        return () => {};
    }, [todoList]);

    useEffect(() => {
        const randomText = Array.from({ length: 10 }, (_, index) => `todo#${index + 1}`);
        randomText.forEach((text) => console.log(text));
    }, []);

    /* useEffect(() => {
        fetchTodos().then(setTodoList);
    }, []);

    // 2. 할 일 추가
    const handleTodoData = async (title: string) => {
        const newTodo = await addTodo(title);
        setTodoList((prev) => [...prev, newTodo]);
    };

    // 3. 할 일 체크/수정/삭제 등 서버와 동기화
    const toggleChecked = async (id: number) => {
        // 서버에 PATCH 요청 필요 (아직 구현 안됨)
        setTodoList((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const dataDelete = async (id: number) => {
        await deleteTodo(id);
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    };

    const deleteCheckedTodos = async () => {
        // 반복적으로 서버에 삭제 요청 필요 (아직 구현 안됨)
        setTodoList((prev) => prev.filter((todo) => !todo.completed));
    };

    const handleModify = async (id: number, title: string) => {
        const updated = await handleModifyApi(id, title);
        setTodoList((prev) => prev.map((todo) => (todo.id === id ? updated : todo)));
    }; */

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
