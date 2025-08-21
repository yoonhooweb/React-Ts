import { Form, useActionData, useNavigate } from "react-router";

export default function Login() {
    const data = useActionData();
    const navi = useNavigate();
    return (
        <>
            <Form method="POST">
                <input type="email" name="email" autoComplete="off" />
                <input type="pw" name="pw" />
                <button type="submit"> 로그인 </button>
            </Form>
            {data && data.message}
            <button onClick={() => navi("/")}> 홈으로</button>
        </>
    );
}
