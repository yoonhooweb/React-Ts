import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

/* createSlice는 객체를 받는다. */
const counterSlice = createSlice({
    /* 
        1. 해당 슬라이스를 구별할수있는 유니크한 이름으로 지어야한다. 
        2. 보통 파일이름이 같은경우는 없으니 네임속성은 파일 이름으로 지정한다.
    */
    name: "counterSlice",
    /* 
        1. slice파일에서 공유할 상태값을 지정한다. 
        2. 일반적으로 객체로 지정한다.
    */

    initialState: {
        count: 0
    },

    /* 
        reducers: 실제 상태(state)를 어떻게 바꿀지 정의한 함수들.
            - 각 키가 reducer 함수 이름이 되며, 자동으로 action도 생성됨.
            - state 매개변수는 initialState의 현재 값임.
            - immer가 적용되어 있어서 직접 수정해도 불변성 유지됨!
    */

    reducers: {
        /* action 으로 매개변수의 값을 받고 타입은 payloadAction<넘겨주는 값의 타입> */
        plus: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        /* 파라미터 2개 받는방법 */
        minus: (state, action: PayloadAction<{ num: number, num2: number }>) => {
            state.count -= action.payload.num
        },
        reset: (state) => {
            state.count = 0;
        }
    },
    /* 
       이거는 비동기일경우에는 reducers 속성에 등록이 불가하다.
       내부적으로 빌더라는 객체를 제공한다. 
       별로도 만든건 extraReducers에 등록
    */
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("pending")
        }).addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }).addCase(incrementAsync.rejected, () => {
            console.log("rejected")
        })
    }
});

/* 비동기 
    1. createAsyncThunk함수는 두개의 매개변수를 전달받는다.
    2. 첫번째는 : 해당 리듀서 함수에 고유이름
    3. 두번째는 : 비동기 함수 함수에 대한 로직 
 */
export const incrementAsync = createAsyncThunk(
    "counterSlice/incrementAsync",
    async (amount: number) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return amount;
    }
);

/* - reducer 함수들을 묶은 하나의 reducer를 export (store에 등록할 때 사용) */
export default counterSlice.reducer
/* 
    - 위에서 만든 plus, minus, reset reducer 함수 이름과 동일한 action creator 함수들이 자동 생성됨.
    - dispatch할 때 사용: dispatch(plus()), dispatch(minus()), dispatch(reset())
*/
export const { plus, minus, reset } = counterSlice.actions;