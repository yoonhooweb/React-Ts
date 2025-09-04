import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstanse } from "../../api/axios";


export interface User {
    id: string,
    kakaoId: string,
    profileImage?: string
    nickname: string,
    email?: string
}

export interface AuthStore {
    isLogin: boolean,
    user: User | null,
}

const initialState: AuthStore = {
    isLogin: false,
    user: null,
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<User>) {
            state.isLogin = true;            // boolean <- OK
            state.user = action.payload;     // User | null <- User  대입 OK (위에서 타입 제대로 잡았기 때문)
        },
        /* refresh 토큰을 지우는 유일한 방법은 api 호출해서 거기서 지워야한다. */
        clearUserData(state) {
            state.isLogin = false;
            state.user = null;
        }
    }
})

export const logOutThunk = createAsyncThunk("/auth/logout", async (_, { dispatch }) => {
    await axiosInstanse.post("/auth/logout");
    sessionStorage.removeItem("access_token");
    dispatch(authSlice.actions.clearUserData())
})

export default authSlice.reducer;
export const { setUserData, clearUserData } = authSlice.actions;


