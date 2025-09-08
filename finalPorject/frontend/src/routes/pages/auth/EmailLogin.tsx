import { Mail, Lock, Eye } from "lucide-react";
import { useState } from "react";
import { axiosInstanse } from "../../../api/axios";
import { useAppDispatch } from "../../../store/authStore";
import { setUserData } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router";

export default function EmailLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isShowPw, setIsShowPw] = useState(false);
    const dispatch = useAppDispatch();

    const handleLogin = async () => {
        setError("");
        try {
            if (email.trim() === "") {
                setError("email 비어있다.");
                return;
            }
            if (password.length < 6) {
                setError("비밀번호가 6글자보다 짧습니다.");
                return;
            }

            const {
                data: { accessToken, user },
            } = await axiosInstanse.post("/auth/login", {
                email,
                password,
            });

            const userData = {
                id: user._id,
                kakaoId: user.kakaoId,
                profileImage: user.profileImage,
                nickname: user.nickname,
                email: user.email,
            };

            sessionStorage.setItem("access_token", accessToken);
            dispatch(setUserData(userData));

            navigate("/");
        } catch (e) {
            setError(e instanceof Error ? e.message : "뭔에러야");
        }
    };

    return (
        <div className='min-h-[calc(100vh-64px)] flex items-center justify-center px-4'>
            <div className='w-full max-w-md'>
                <div className='bg-slate-800 rounded-lg shadow-xl p-8'>
                    {/* 헤더 */}
                    <div className='text-center mb-8'>
                        <h1 className='text-2xl font-bold text-white mb-2'>Welcome to SULOG</h1>
                        <p className='text-gray-400'>Please enter your credentials to continue</p>
                    </div>

                    {/* 에러 */}
                    {error && (
                        <div className='mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg'>
                            <p className='text-red-500 text-sm'>Password must be at least 6 characters long</p>
                        </div>
                    )}

                    <form action={handleLogin} className='space-y-4'>
                        {/* 이메일 입력 */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                                Email Address
                            </label>
                            <div className='relative'>
                                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                                <input
                                    type='email'
                                    id='email'
                                    className='w-full bg-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* 비밀번호 입력 */}
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-300 mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                                <input
                                    type={!isShowPw ? "password" : "text"}
                                    id='password'
                                    className='w-full bg-slate-700 text-white pl-10 pr-12 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                                    placeholder='Enter your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type='button'
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300'
                                    onClick={() => setIsShowPw((prev) => !prev)}
                                >
                                    <Eye className='h-5 w-5' />
                                </button>
                            </div>
                        </div>

                        {/* 버튼 */}
                        <div className='flex gap-3'>
                            <button type='button' className='flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors'>
                                Back
                            </button>
                            <button type='submit' className='flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
