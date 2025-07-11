import Input from "./html/Input";
import Button from "./html/Button";
import { useState } from "react";

/* 글등록 하는곳 */
function TodoEdit({ addTodo }: { addTodo: (text: string) => void }) {
    const [text, setText] = useState("");

    const handleDataForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() === "") {
            alert("글자를 등록할수 없습니다.");
            return;
        }
        addTodo(text);
        setText("");
    };

    return (
        <>
            <form className='todo__form' onSubmit={handleDataForm}>
                <div className='todo__editor'>
                    <Input type='text' className='todo__input' placeholder='Enter Todo List' value={text} onChange={(e) => setText(e.target.value)} />
                    <Button className='todo__button' type='submit'>
                        Add
                    </Button>
                </div>
            </form>
        </>
    );
}

export default TodoEdit;
