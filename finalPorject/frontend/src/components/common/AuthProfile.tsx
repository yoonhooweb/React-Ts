import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/authStore";
import { logOutThunk } from "../../features/auth/authSlice";
import { LogOut } from "lucide-react";
import { useRevalidator } from "react-router";

export default function AuthProfile() {
    /* 
        데이터 재검증 훅 사용할땐 비동기 처리 router에 정의된 loader가 다시 실행된다. 
         ex) 로그인안하면 접속할수 없는 게시물 등록 페이지에서 로그아웃을 누르면 router에 설정된 loader값이 강제로 다시 실행됨
    */
    const { revalidate } = useRevalidator();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const user = useSelector((state: RootState) => state.kakaoAuth.user);
    const disPatch = useAppDispatch();
    return (
        <>
            <div className="relative">
                <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center space-x-2">
                    <img src={user?.profileImage} className="w-8 h-8 rounded-full border-2 border-blue-500" />
                </button>

                {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-1 z-50">
                        <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700">
                            <p className="text-sm font-medium">{user?.nickname}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
                        </div>
                        <button
                            onClick={async () => {
                                await disPatch(logOutThunk());
                                setIsUserMenuOpen(false);
                                revalidate();
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm  hover:bg-gray-100 dark:hover:bg-slate-700"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Sign out
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
