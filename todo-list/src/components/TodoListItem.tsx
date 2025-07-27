import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import React, { useState } from "react";

function TodoListItem({
    todo,
    toggleChecked,
    dataDelete,
    handleModify,
}: {
    todo: todoType;
    toggleChecked: (id: number) => void;
    dataDelete: (id: number) => void;
    handleModify: (id: number, title: string) => void;
}) {
    const [isModify, setIsModify] = useState(false);
    const [modify, setModify] = useState("");

    const toggleModify = () => {
        setIsModify((prev) => !prev);
        setModify((modify) => (modify === "" ? todo.title : modify));
        if (modify !== "" && modify !== todo.title) {
            handleModify(todo.id, modify);
        }
    };
    console.log("todoListItem");
    return (
        <>
            {/* 할 일이 완료되면 .todo__item--complete 추가 */}
            <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
                {isModify == false ? (
                    <Checkbox
                        parentClassName={"todo__checkbox-group"}
                        type="checkbox"
                        className="todo__checkbox"
                        checked={todo.completed}
                        onChange={() => toggleChecked(todo.id)}
                    >
                        {todo.title}
                    </Checkbox>
                ) : (
                    /* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)*/
                    <input type="text" className="todo__modify-input" value={modify} onChange={(e) => setModify(e.target.value)} />
                )}

                <div className="todo__button-group">
                    <Button className="todo__action-button" onClick={toggleModify}>
                        <SvgPencil />
                    </Button>
                    <Button className="todo__action-button" onClick={() => dataDelete(todo.id)}>
                        <SvgClose />
                    </Button>
                </div>
            </li>
        </>
    );
}

export default React.memo(TodoListItem);
/* export default TodoListItem; */
