import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import { useState } from "react";

function TodoListItem({
    todo,
    toggleChecked,
    dataDelete,
    handleModify,
}: {
    todo: todoType;
    toggleChecked: (id: number) => void;
    dataDelete: (id: number) => void;
    handleModify: (id: number, data: string) => void;
}) {
    const [isModify, setIsModify] = useState(false);
    const [modify, setModify] = useState("");

    const handleInput = () => {
        setIsModify((prev) => !prev);
        setModify((prev) => (prev === "" ? todo.data : modify));
        if (modify !== "" && modify !== todo.data) {
            handleModify(todo.id, modify);
        }
    };
    return (
        <>
            {/* 할 일이 완료되면 .todo__item--complete 추가 */}
            <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
                {!isModify && (
                    <Checkbox
                        parentClassName={"todo__checkbox-group"}
                        type="checkbox"
                        className="todo__checkbox"
                        checked={todo.completed}
                        onChange={() => toggleChecked(todo.id)}
                    >
                        <label>{todo.data}</label>
                    </Checkbox>
                )}
                {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출)*/}
                {isModify && <input type="text" className="todo__modify-input" value={modify} onChange={(e) => setModify(e.target.value)} />}
                <div className="todo__button-group">
                    <Button className="todo__action-button" onClick={handleInput}>
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

export default TodoListItem;
