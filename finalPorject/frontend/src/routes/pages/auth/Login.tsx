import { Mail } from "lucide-react";

export default function Login() {
    const handleKaKaoLogin = () => {
        window.location.href = "http://localhost:4000/auth/kakao"; //카카오 로그인 요청
    };
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-slate-800 rounded-lg shadow-xl p-8">
                    {/* 헤더 */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">Welcome to SULOG</h1>
                        <p className="text-gray-400">Sign in with your account</p>
                    </div>

                    <div className="space-y-4">
                        {/* 이메일 로그인 버튼 */}
                        <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                            <Mail className="w-5 h-5" />
                            Continue with Email
                        </button>

                        {/* 구분선 */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 text-gray-400 bg-slate-800">Or continue with</span>
                            </div>
                        </div>

                        {/* 카카오 로그인 버튼 */}
                        <button
                            className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-[#000000] py-3 rounded-lg hover:bg-[#FDD800] transition-colors font-medium"
                            onClick={handleKaKaoLogin}
                        >
                            <img
                                src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
                                alt="Kakao Logo"
                                className="w-5 h-5"
                            />
                            Continue with Kakao
                        </button>

                        {/* 회원가입 유도 */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 text-gray-400 bg-slate-800">Don't have an account?</span>
                            </div>
                        </div>

                        {/* 회원가입 버튼 */}
                        <button className="w-full flex items-center justify-center gap-2 bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600 transition-colors font-medium">
                            Create an account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
