
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/authStore";
import { axiosInstanse } from "../../api/axios";
import { setUserData } from "../../features/auth/authSlice";
import { redirect } from "react-router";

export function useFetchUserData() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.kakaoAuth.user);

    useEffect(() => {
        const featchUserData = async () => {
            try {
                const accessToken = sessionStorage.getItem("access_token");
                //전역상태에는 값이 없고 엑세스토큰만 있는경우는 새로고침을 했다고 봐야함 ?
                if (!user && accessToken) {
                    const { data } = await axiosInstanse.get("/auth/me");
                    dispatch(setUserData(data));
                }
            } catch (e) {
                console.error(e)
            }
        }
        featchUserData()
    }, [dispatch, user])
}

/* 로그인 페이지로 팅기기 */
export const requireAuth = () => {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
        return redirect("/auth/login");
    }
};

/* 로그인한 사용자만 접근 가능 */
export const redirectIfAuth = () => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
        return redirect("/");
    }
}

