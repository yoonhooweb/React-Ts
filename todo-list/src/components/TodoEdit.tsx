import Input from "./html/Input";
import Button from "./html/Button";
import { useState } from "react";

/* 글등록 하는곳 */
function TodoEdit({ handleTodoData }: { handleTodoData: (data: string) => void }) {
    const [todoData, setTodoData] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleTodoData(todoData);
        setTodoData("");
    };

    return (
        <>
            <form className="todo__form" onSubmit={(e) => handleSubmit(e)}>
                <div className="todo__editor">
                    <Input
                        type="text"
                        className="todo__input"
                        placeholder="Enter Todo List"
                        value={todoData}
                        onChange={(e) => setTodoData(e.target.value)}
                    />
                    <Button className="todo__button" type="submit">
                        Add
                    </Button>
                </div>
            </form>
        </>
    );
}

export default TodoEdit;
