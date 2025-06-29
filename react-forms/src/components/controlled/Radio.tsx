import { useState } from "react";

function Radio() {
    //라디오 기존적으로 하나 체크를 해놓을수있게 value속성값을 초기값으로 넣어준다
    /* const [selectRadio, setSelectRadio] = useState("radio1"); */
    const [radioGroup, setRadioGroup] = useState({
        radio1 : "",
        color : ""
    })

    /* const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectRadio(e.target.value);
    }; */

    const handleRadioGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioGroup(radioGroup => ( {
            ...radioGroup,
            [e.target.name] : e.target.value
        }))
    }

    return (
        <section>
            <h1 style={{ borderTop: "5px solid #333", paddingTop: "20px" }}>
                Radio
            </h1>
            <div>
                <label>
                    <input
                        type="radio"
                        name="radio1"
                        id="radio1"
                        value="radio1"
                        checked={radioGroup.radio1 === "radio1"}
                        /* onChange={handleRadio} */
                        onChange={handleRadioGroup}
                    />
                    옵션1
                </label>
                <label>
                    <input
                        type="radio"
                        name="radio1"
                        id="radio2"
                        value="radio2"
                        checked={radioGroup.radio1 === "radio2"}
                        /* onChange={handleRadio} */
                        onChange={handleRadioGroup}
                    />
                    옵션2
                </label>
                <label>
                    <input
                        type="radio"
                        name="radio1"
                        id="radio3"
                        value="radio3"
                        checked={radioGroup.radio1 === "radio3"}
                        /* onChange={handleRadio} */
                        onChange={handleRadioGroup}
                    />
                    옵션3
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="color"
                        id="color1"
                        value="color1"
                        checked={radioGroup.color === "color1"}
                        /* onChange={handleRadio} */
                        onChange={handleRadioGroup}
                    />
                    color 옵션1
                </label>
                <label>
                    <input
                        type="radio"
                        name="color"
                        id="color2"
                        value="color2"
                        checked={radioGroup.color === "color2"}
                        /* onChange={handleRadio} */
                        onChange={handleRadioGroup}
                    />
                    color 옵션2
                </label>
                <label>
                    <input
                        type="radio"
                        name="color"
                        id="color3"
                        value="color3"
                        checked={radioGroup.color === "color3"}
                        /* onChange={handleRadio} */
                        onChange={handleRadioGroup}
                    />
                    color 옵션3
                </label>
            </div>
        </section>
    );
}

export default Radio;
