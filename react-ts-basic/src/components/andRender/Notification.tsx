import { useState } from "react"

function Notification() {
    const [showNotification, setShowNotification] = useState(true);
    const handleShowBtn = (isShow : boolean) =>  {
        console.log(isShow);
        setShowNotification(isShow);
    }

    return (
        <>
            {
                showNotification && <h1>새로운 알림이 도착했습니다.</h1>
            }
            {showNotification &&  <button onClick={ () => handleShowBtn(false) }>알림닫기</button>}
            {!showNotification && <button onClick={ () => handleShowBtn(true) }>알림보기</button>}
           
            
        </>        
    )
}

export default Notification