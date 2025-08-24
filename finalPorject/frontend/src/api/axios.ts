import axios from "axios";

export const axiosInstanse = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 5000,
    withCredentials: true /* 쿠키기반 인증시스템에서는 필수이다. 이 값이 true 되어야지 쿠키가 요청에 포함되어 올바르게 전송된다.  */
})

/* 
    요청을 보내기전에 이코드 실행 
 = 첫번째 매개변수는 정상 요청 
 = 두번재는 에러발생
*/
axiosInstanse.interceptors.request.use(
    (config) => {
        console.log(`config ${config}`)
        const token = sessionStorage.getItem("access_token");
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }, (error) => {
        Promise.reject(error)
    })