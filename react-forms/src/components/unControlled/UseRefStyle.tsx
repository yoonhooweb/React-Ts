import { useRef, type FormEvent } from "react";
import UserInfoMission from "./UserInfoMission";

function UseRefStyle() {
    const inputRef = useRef<HTMLInputElement>(null);
    const privacyRef = useRef<HTMLInputElement>(null);
    const termsRef = useRef<HTMLInputElement>(null);

    const formRef = useRef<HTMLFormElement>(null)

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleForm = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        console.log(e.target);
        console.log(inputRef.current?.value);

        const privacy = privacyRef.current?.checked;
        const terms = termsRef.current?.checked;

        if (privacy == false) {
            alert("약관을 체크해주세요");
            return false;
        }
        if (!terms) {
            alert("개인정보를 체크해주세요");
            return false;
        }
    };

    const handleRadio = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(formRef.current!);

        console.log(formData.get("option"))
    }

    const handleTextArea = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(textAreaRef.current?.value);
    }

    return (
        <>
            <form action="" onSubmit={handleForm}>
                <input type="text" ref={inputRef} />
                <button type="submit">버튼</button>
                <div>
                    <input type="checkbox" id="check1" ref={privacyRef} />
                    <label htmlFor="check1">약관동의</label>
                </div>
                <div>
                    <input type="checkbox" id="check2" ref={termsRef} />
                    <label htmlFor="check2">개인정보처리</label>
                </div>
            </form>

            <form action="" ref={formRef} onSubmit={handleRadio}>
                <div>
                    <input type="radio" id="radio1" name="option" value="gkldgkld" />
                    <label htmlFor="radio1">선택1</label>
                </div>
                <div>
                    <input type="radio" id="radio2" name="option" value="gkldgkld22" />
                    <label htmlFor="radio2">선택2</label>
                </div>

                <button type="submit">라디오제출</button>
            </form>

            <form action="" onSubmit={e => handleTextArea(e)}>
                <textarea name="" id="" ref={textAreaRef}></textarea>
                <button type="submit">라디오제출</button>
            </form>

            <UserInfoMission />
        </>
    );
}

export default UseRefStyle;
