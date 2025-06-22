import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Spread from "./components/Spread";
import Button from "./components/Button";
import CountDisplay from "./components/count/CountDisplay";
import { useState } from "react";
import Count from "./components/useReducer/Count";

export default function App() {
    const handleClick2 = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(event)

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


    return (
        <>
            <Header />
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
        </>
    );
}
