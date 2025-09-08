import axios from "axios";

export const axiosInstanse = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 5000,
    withCredentials: true /* 쿠키기반 인증시스템에서는 필수이다. 이 값이 true 되어야지 쿠키가 요청에 포함되어 올바르게 전송된다.  */,
});

/* 
    요청을 보내기전에 이코드 실행 
 = 첫번째 매개변수는 정상 요청 
 = 두번재는 에러발생
*/
axiosInstanse.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("access_token");
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

/* 응답에 대한 인터셉트 
    토큰 재발급     
*/
let retry = false;
axiosInstanse.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !retry) {
            retry = true;
            try {
                // 🔹 refresh 요청
                const res = await axiosInstanse.post("/auth/refresh");
                console.log(res);

                if (!res.data.accessToken) throw new Error("토큰 재발급 실패");

                // 🔹 새 토큰 저장
                const newAccessToken = res.data.accessToken;
                sessionStorage.setItem("access_token", newAccessToken);

                // 🔹 원래 요청에 토큰 갱신
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

                retry = false;

                // 🔹 원래 요청 재실행
                return axiosInstanse(originalRequest);
            } catch (refreshError) {
                retry = false; // 실패 시 다시 초기화
                sessionStorage.removeItem("access_token");
                await axiosInstanse.post("/auth/logout");
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
