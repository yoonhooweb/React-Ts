import {  useState } from "react";

function Textarea() {

    const [text, setText] = useState("");

    const handleText = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }
    return (
        <div>
            <h1 style={{ borderTop: "5px solid #333", paddingTop: "20px" }}>
                TextArea
            </h1>
            <textarea
                name=""
                id=""
                value={text}
                onChange={e=>handleText(e)}
            ></textarea>
            <p>입력된 텍스트 : {text} </p>
        </div>
    );
}

export default Textarea;
