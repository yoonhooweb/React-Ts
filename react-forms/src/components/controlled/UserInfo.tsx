import { useState } from "react";
import UseInput from "../hook/UseInput";

export default function UserInfo() {
    //커스텀 훅 버전
    const { value: name, handleValue: handleName } = UseInput("");
    const { value: email, handleValue: handleEmail } = UseInput("");
    const { value: gender, handleValue: handleGender } = UseInput("");

    //일반 사용
    /* const [name, setName] = useState("");
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const [email, setEmail] = useState("");
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const [gender, setGender] = useState("");
    const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }; */
    /* const [skills, setSkills] = useState ({
		javascript : false,
		react :false,
		nodejs : false
	});
	const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSkills(prev => ({
			...prev,
			[e.target.name] : e.target.checked
		}));
	} */

    const [skills, setSkills] = useState<string[]>([]);

    const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSkills((prev) =>
            e.target.checked
                ? [...prev, value]
                : skills.filter((skill) => skill !== value)
        );
    };

    const [text, setText] = useState("");
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleFormSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        console.log("폼 제출 :", { name, email, gender, skills, text });
    };

    return (
        <div className="user-info">
            <h1 className="user-info__title">User Information</h1>
            <form className="user-info__form">
                <div className="form-group">
                    <label className="form-group__label" htmlFor="name">
                        이름:
                    </label>
                    <input
                        className="form-group__input"
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleName}
                        value={name}
                    />
                </div>

                <div className="form-group">
                    <label className="form-group__label" htmlFor="email">
                        이메일:
                    </label>
                    <input
                        className="form-group__input"
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleEmail}
                        value={email}
                    />
                </div>

                <div className="form-group form-group--radio">
                    <label className="form-group__label">성별:</label>
                    <label className="form-group__radio">
                        <input
                            type="radio"
                            id="male"
                            value="남성"
                            name="gender"
                            onChange={handleGender}
                            checked={gender === "남성"}
                        />
                        남성
                    </label>
                    <label className="form-group__radio">
                        <input
                            type="radio"
                            id="female"
                            value="여성"
                            name="gender"
                            onChange={handleGender}
                            checked={gender === "여성"}
                        />
                        여성
                    </label>
                </div>

                <div className="form-group form-group--checkbox">
                    <label className="form-group__label">기술 관심:</label>
                    <label className="form-group__checkbox">
                        <input
                            type="checkbox"
                            value="JavaScript"
                            name="javascript"
                            onChange={handleSkills}
                        />
                        JavaScript
                    </label>
                    <label className="form-group__checkbox">
                        <input
                            type="checkbox"
                            value="React"
                            name="react"
                            onChange={handleSkills}
                        />
                        React
                    </label>
                    <label className="form-group__checkbox">
                        <input
                            type="checkbox"
                            value="Node.js"
                            name="nodejs"
                            onChange={handleSkills}
                        />
                        Node.js
                    </label>
                </div>

                <div className="form-group">
                    <label className="form-group__label" htmlFor="bio">
                        자기소개:
                    </label>
                    <textarea
                        className="form-group__textarea"
                        id="bio"
                        name="bio"
                        placeholder="자기소개를 작성해주세요"
                        onChange={(e) => handleText(e)}
                    ></textarea>
                </div>

                <button
                    className="user-info__submit"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    제출
                </button>
            </form>

            <div className="preview">
                <h2 className="preview__title">실시간 입력값</h2>
                <p className="preview__item">이름: {name}</p>
                <p className="preview__item">이메일: {email}</p>
                <p className="preview__item">성별: {gender}</p>
                <p className="preview__item">
                    기술 관심:
                    {/* {skills.javascript ? "JavaScript ," : null}
                    {skills.react ? "react ," : null}
                    {skills.nodejs ? "nodejs" : null} */}
                    {skills}
                </p>
                <p className="preview__item">자기소개: {text}</p>
            </div>
        </div>
    );
}
