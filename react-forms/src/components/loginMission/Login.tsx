import { useState } from "react";

function Login() {
    const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

    const [userPw, setUserPw] = useState("");
    const [error, setError] = useState({
        id: "",
        pw: "",
    });
    const [userRememberId, setUserRememberId] = useState(false);

    const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserId(value);
        setError((prev) => ({
            ...prev,
            id: value.length <= 8 ? "아이디는 7글자 이상써주세요" : "",
        }));

        console.log(value); // 최신 입력값을 바로 확인
    };

    const handleUserPw = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserPw(value);
        setError((prev) => ({
            ...prev,
            pw: value.length < 8 ? "비밀번호는 8자리 이상입니다." : "",
        }));
        console.log(userPw);
    };

    const handleCheckbox = () => {
        setUserRememberId((prev) => !prev);
        console.log(userRememberId);
    };

    const formDataSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userId?.trim() && !userId) {
            setError((prev) => ({
                ...prev,
                id: !userId?.trim() ? "아이디를 입력해주세요" : "",
            }));
        }
        if (userPw.length < 8) {
            setError((prev) => ({
                ...prev,
                pw: userPw.length < 8 ? "비밀번호는 8자리 이상입니다." : "",
            }));
        }

        localStorage.setItem("userId", userId);
        localStorage.setItem("reememberId", "true");

        console.log("로그인성공");
    };

    return (
        <div className="bg-blue">
            <h1>로그인</h1>
            <p>계속하려면 정보를 입력하세요</p>

            <form action="" onSubmit={formDataSend}>
                <div>
                    <input
                        type="text"
                        name="id"
                        id="id"
                        value={userId}
                        onChange={handleUserId}
                    />
                    {error.id && <p style={{ color: "red" }}>{error.id}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        name="pw"
                        id="pw"
                        value={userPw}
                        onChange={handleUserPw}
                    />
                    {error.pw && <p style={{ color: "red" }}>{error.pw}</p>}
                </div>
                <div>
                    <label htmlFor="">
                        <input
                            type="checkbox"
                            name="rememberId"
                            id="rememberId"
                            checked={userRememberId}
                            onChange={handleCheckbox}
                        />
                        아이디 기억하기
                    </label>
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;
