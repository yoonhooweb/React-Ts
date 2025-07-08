import Input from "./html/Input";
import Button from "./html/Button";
import { useState } from "react";

function TodoEdit({ todoArrayPush }: { todoArrayPush: (text: string) => void }) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() === "") {
            alert("글자를 입력해주세요.");
        }
        todoArrayPush(text);
        setText("");
    };

    return (
        <>
            <form className='todo__form' onSubmit={handleSubmit}>
                <div className='todo__editor'>
                    <Input type='text' className='todo__input' value={text} placeholder='Enter Todo List' onChange={(e) => setText(e.target.value)} />
                    <Button className='todo__button' type='submit'>
                        Add
                    </Button>
                </div>
            </form>
        </>
    );
}

export default TodoEdit;
