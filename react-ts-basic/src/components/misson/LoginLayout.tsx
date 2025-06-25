import type { Dispatch, SetStateAction } from "react"

function LoginLayout( { setIsLogin } : {setIsLogin : Dispatch<SetStateAction<boolean>>}) {
  return (
    {/* <div>
        환영합니다. 사용자!
        <button onClick={ () => { setIsLogin (false)}}>로그아웃</button>
    </div> */}
  )
}

export default LoginLayout