import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface User {
    _id: string,
    kakaoId: string,
    profileImage: string
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
    }
})

export default authSlice.reducer;
export const { setUserData } = authSlice.actions;


