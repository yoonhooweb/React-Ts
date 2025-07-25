import { Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function Stopwatch() {
    const [time, setTime] = useState(0); // ms
    const [isRunning, setIsRunning] = useState(false); //타이머 시작 중지

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000); //밀리초를 분(minute)으로 바꿈 (1000 * 60 = 60000)
        const seconds = Math.floor((ms % 60000) / 1000); //분을 제외한 나머지 밀리초에서 초(second)를 구함
        const milliseconds = Math.floor((ms % 1000) / 10); // 1초 = 1000ms니까, 그 안에서 0.01초 단위로 표시하고자 10으로 나눔

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
    };

    useEffect(() => {
        let intervalId: number; //setInterval이 반환하는 ID를 저장해 둘 변수 clearInterval로 멈추려면 필요함
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 10);
            }, 10);
        }

        return () => {
            if (isRunning) clearInterval(intervalId);
        };
    }, [isRunning]);

    return (
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4'>
            <div className='flex flex-col items-center justify-center space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8'>
                <div className='text-5xl font-mono font-semibold text-gray-800 dark:text-white'>{formatTime(time)}</div>

                <div className='flex space-x-4'>
                    {/* 시작중 - "bg-red-500 hover:bg-red-600" */}
                    {/* 정지중 - "bg-green-500 hover:bg-green-600" */}
                    <button
                        className={`p-3 rounded-full transition-colors bg-green-500 hover:bg-green-600 text-white`}
                        onClick={() => setIsRunning((prev) => !prev)}
                    >
                        {/* 시작버튼 <Play size={24} /> */}
                        {/* 정지버튼  <Pause size={24} /> */}
                        {isRunning ? <Pause size={24} /> : <Play size={24} />}
                    </button>

                    <button className='p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors'>
                        <RotateCcw size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
