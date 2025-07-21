import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import { useState } from "react";

function TodoListItem({
    todo,
    toggleChecked,
    handleDelete,
}: {
    todo: todo;
    toggleChecked: (id: number) => void;
    handleDelete: (id: number) => void;
}) {
    const [isModify, setIsmodify] = useState(false);
    console.log(isModify);

    const toggleModify = () => {
        setIsmodify((prev) => !prev);
    };
    return (
        <>
            {/* 할 일이 완료되면 .todo__item--complete 추가 */}
            <li className={`todo__item `}>
                {!isModify && (
                    <Checkbox
                        parentClassName={"todo__checkbox-group"}
                        type='checkbox'
                        className='todo__checkbox'
                        checked={todo.completed}
                        onChange={() => toggleChecked(todo.id)}
                    >
                        {todo.text}
                    </Checkbox>
                )}
                {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)*/}
                {isModify && <input type='text' className='todo__modify-input' />}
                <div className='todo__button-group'>
                    <Button className='todo__action-button' onClick={toggleModify}>
                        <SvgPencil />
                    </Button>
                    <Button className='todo__action-button' onClick={() => handleDelete(todo.id)}>
                        <SvgClose />
                    </Button>
                </div>
            </li>
        </>
    );
}

export default TodoListItem;
