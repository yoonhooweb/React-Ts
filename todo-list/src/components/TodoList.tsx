import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

function TodoList() {
    return (
        <ul className='todo__list'>
            {/* <!-- 할 일 목록이 없을 때 --> */}
            <TodoListEmpty />
            {/* <!-- 할 일 목록이 있을 때 -->*/}

            <TodoListItem />
        </ul>
    );
}

export default TodoList;
