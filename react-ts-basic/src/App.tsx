import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Spread from "./components/Spread";
import Button from "./components/Button";
import CountDisplay from "./components/count/CountDisplay";
import { use, useState } from "react";
import Count from "./components/useReducer/Count";
import CountingPage from "./components/useReducer/CountingPage";
import LoginLayout from "./components/misson/LoginLayout";
import LogoutLayout from "./components/misson/LogoutLayout";
import SwitchComponent from "./components/switchRender/SwitchComponent";
import Notification from "./components/andRender/Notification";


export default function App() {
    /* const handleClick2 = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(event)

    const numberValue = 30;
    const stringValue = "스트링";
    const booleanValue = true;
    const array = [1,2,3,4];
    const object = {name : 'jo' , age : 20}
    const handleClick = ( ) => alert("안녕하세요")

    const obj = {
        name : 'jone',
        age : 21,
        txt : "하이하이"
    }

    const [count , setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count => count + 1);
    }

    const handleDecrement = () => {
        setCount((prev) => prev <= 0 ? 0 : prev - 1 );
    }

    const handleReset = () => {
        setCount(0)
    }

    const [userInfo, setUserInfo] = useState({
        name : 'park',
        age : 20,
        gender : 'male'
    })

    const [ isLogin , setIsLogin] = useState(false); */

    /* const [light , setLight] = useState<"red" | "yellow" | "green">("red");

    const handleLight = (light : string) => {
        switch ( light ) {
            case "red" :
                setLight ("yellow")
                break;
            case "yellow" :
                setLight ("green")
                break;
            case "green" :
                setLight ("red")
                break;
            default : 
                return light
        }
    } */

        const [item, setItem] = useState(["사과", "바나나", "오렌지"]);
        const [isAdd, setIsAdd] = useState(false);

        const handleItem = () => {
            let newArray = [...item]
            newArray.push("포도");
            setItem(newArray);
            setIsAdd(true)
        }


    return (
        <>
            {/* <Header />
            <Home 
                name="yoonhoo"
                age={20}
                numberValue = { numberValue }
                stringValue = { stringValue }
                booleanValue = { booleanValue }
                array = { array }
                object = {object}
                handleClick = {handleClick}
            />
            <Spread {...obj} />
            <Footer />
            <Button message={"playing!!"} handleClick2 = {handleClick2}> playBtn </Button> 
            <h1>State : {count}</h1>
            <button onClick={ handleIncrement }> 증가 클릭 </button>
            <button onClick={ handleDecrement }> 감소 클릭 </button>
            <button onClick={ handleReset }> 리셋 클릭 </button>

            <CountDisplay />
            <Count />

            <CountingPage />
           {  
                isLogin ? <LoginLayout setIsLogin = {setIsLogin} /> : <LogoutLayout setIsLogin = { setIsLogin }/>
            } 

             <SwitchComponent light = {light} handleLight = { handleLight }/> */}

             <Notification />
             <ul>
                {
                    item.map (( v:string , i:number ) => {
                        return <li>{v}</li>
                    }) 
                }
             </ul>

             <button onClick={handleItem} disabled= {isAdd}>포도추가</button>
        </>
    );
}


