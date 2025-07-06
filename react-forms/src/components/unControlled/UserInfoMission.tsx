import { useRef } from "react";

function UserInfoMission() {

    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)

    const handleDataFormSend = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /* 
            폼 데이터 만든 후 get을 써서 input 에 있는 name값이랑 맞추면 한번에 가지고옴 checkbox의 경우 getAll 사용
            이 방법은 value값 을 가지고 오는것이다..
         */
        const formData = new FormData(formRef.current!);
        const name = formData.get("name");
        const email = formData.get("email");
        const gender = formData.get("gender");
        const skills = formData.getAll("skill");
        const bio = formData.get("bio");

        const nameNull = nameRef.current?.value
        if (nameNull == "") {
            alert("이름값이 없습니다.")
            return;
        }
        console.log({name,email,gender,skills,bio})
        console.log(name,email,gender,skills,bio)
    }

    return (
        <div className="user-info">
            <h1 className="user-info__title">User Information</h1>
            <form className="user-info__form" ref={formRef} onSubmit={handleDataFormSend}>
                <div className="form-group">
                    <label className="form-group__label" htmlFor="name">
                        이름:
                    </label>
                    <input
                        className="form-group__input"
                        type="text"
                        name="name"
                        id="name"
                        ref={nameRef}
                    />
                </div>

                <div className="form-group">
                    <label className="form-group__label" htmlFor="email">
                        이메일:
                    </label>
                    <input
                        className="form-group__input"
                        type="text"
                        name="email"
                        id="email"
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
                        />
                        남성
                    </label>
                    <label className="form-group__radio">
                        <input
                            type="radio"
                            id="female"
                            value="여성"
                            name="gender"
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
                            name="skill"
                        />
                        JavaScript
                    </label>
                    <label className="form-group__checkbox">
                        <input type="checkbox" value="React" name="skill" />
                        React
                    </label>
                    <label className="form-group__checkbox">
                        <input type="checkbox" value="Node.js" name="skill" />
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
                    ></textarea>
                </div>

                <button className="user-info__submit" type="submit">
                    제출
                </button>
            </form>

            {/* <div className="preview">
                <h2 className="preview__title">실시간 입력값</h2>
                <p className="preview__item">이름: {name}</p>
                <p className="preview__item">이메일: {email}</p>
                <p className="preview__item">성별: {gender}</p>
                <p className="preview__item"></p>
                <p className="preview__item">자기소개: {text}</p>
            </div> */}
        </div>
    );
}

export default UserInfoMission;
