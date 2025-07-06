import React from "react";
import Input from "./html/Input";
import Button from "./html/Button";

function TodoEdit() {
    return (
        <>
            <form className="todo__form">
                <div className="todo__editor">
                    <Input
                        type="text"
                        className="todo__input"
                        placeholder="Enter Todo List"
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
