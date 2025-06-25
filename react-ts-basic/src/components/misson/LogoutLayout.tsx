import React, { type Dispatch, type SetStateAction } from 'react'

function LogoutLayout({ setIsLogin } : {setIsLogin : Dispatch<SetStateAction<boolean>>}) {
  return (
    <div>
        로그인이 필요합니다.
        <button onClick={ () => { setIsLogin (true)}}>로그인</button>
    </div>
  )
}

export default LogoutLayout