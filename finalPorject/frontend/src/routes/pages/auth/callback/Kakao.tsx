import { Mail } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Redirection from "../../../../components/common/Redirection";
import { axiosInstanse } from "../../../../api/axios";
import { setUserData } from "../../../../features/auth/authSlice";
import { useAppDispatch } from "../../../../store/authStore";

export default function Kakao() {
    const [searchParams] = useSearchParams(); /* 쿼리스트링 값 가져오는법 */
    const accessToken = searchParams.get("access_token");
    const emailYn = searchParams.get("email");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [showForm, setShowForm] = useState(false); // 이메일 정보를 요청받을수 있는 폼을 보여주기위한 상태
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleFormAction = async () => {
        setError("");
        try {
            if (accessToken) sessionStorage.setItem("access_token", accessToken);
            const {
                /* data 데이터 중에  user 객체 구조분해할당으로 받아옴 */
                data: { user },
            } = await axiosInstanse.patch("/auth/update-email", { email });
            dispatch(
                setUserData({
                    id: user.id,
                    kakaoId: user.kakaoId,
                    profileImage: user.profileImage,
                    nickname: user.nickname,
                    email: user.email,
                })
            );
            navigate("/");
        } catch (e) {
            setError(e instanceof Error ? e.message : "unknown Error");
        }
    };

    const feachAndSaveUser = useCallback(async () => {
        setError("");
        try {
            if (accessToken) sessionStorage.setItem("access_token", accessToken);
            const { data } = await axiosInstanse.get("/auth/me");
            dispatch(setUserData(data));
            navigate("/");
        } catch (e) {
            setError(e instanceof Error ? e.message : "unknown Error");
        }
    }, [accessToken, dispatch, navigate]);

    useEffect(() => {
        if (emailYn === "N") {
            setShowForm(true);
        } else {
            feachAndSaveUser();
        }
    }, [emailYn, feachAndSaveUser]);
    return (
        <>
            <>
                {/* 이메일 정보를 받아야 할 때 */}
                {showForm ? (
                    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
                        <div className="w-full max-w-md">
                            <div className="bg-slate-800 rounded-lg shadow-xl p-8">
                                <div className="text-center mb-8">
                                    <h1 className="text-2xl font-bold text-white mb-2">You're almost there</h1>
                                    <p className="text-gray-400">Sign up with just your email!</p>
                                </div>

                                <form className="space-y-4" action={handleFormAction}>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full bg-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                                placeholder="Enter your email"
                                                autoComplete="off"
                                                name="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        {error && <p className="text-rose-500 mt-2">{error}</p>}
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            className="flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                            onClick={() => navigate(-1)} /* 뒤로가기 */
                                        >
                                            Cancel
                                        </button>
                                        {/* 사용자 email 업데이트할수있는 함수  */}
                                        <button
                                            type="submit"
                                            className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* 이메일 정보 없이 리다이렉션 처리하면 될 때 */
                    <Redirection />
                )}
            </>
        </>
    );
}
