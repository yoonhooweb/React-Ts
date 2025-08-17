import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000, // 5초동안 데이터요청이 안끝나면 에러 나게한다.
    headers: {
        "Content-Type": "application/json"
    }
})