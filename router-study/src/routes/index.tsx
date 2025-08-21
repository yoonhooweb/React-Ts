import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../page/Home";
import About from "../page/About";
import DashBoardHome from "../page/dashboard/DashBoardHome";
import DashBoard from "../page/dashboard/DashBoard";
import DashBoardSetting from "../page/dashboard/DashBoardSetting";
import Default from "../page/layouts/Default";
import Post from "../page/post/Post";
import PostDetail from "../page/post/PostDetail";
import Login from "../page/auth/Login";

/* const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
            {
                index: true,
                element: <DashBoardHome />,
            },
            {
                path: "setting", // dashboard/setting
                element: <DashBoardSetting />,
                children: [
                    {
                        index: true,
                        element: <h1>데쉬보드 셋팅 하위 메뉴 </h1>,
                    },
                ],
            },
        ],
    },
]); */

/* 레이아웃 구축 */
const router = createBrowserRouter([
    {
        Component: Default,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
                action: async ({ request }) => {
                    const formData = await request.formData();
                    const email = formData.get("email");
                    const pw = formData.get("pw");
                    console.log(email, pw);
                    return { message: "로그인성공!" };
                },
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/post/*" /* post시작하는 경로는 다 이리로 들어온다  */,
                element: <Post />,
            },
            {
                path: "/post?/:id",
                element: <Post />,
            },
            {
                path: "/post/:id/detail/:detailId",
                element: <PostDetail />,
            },
            {
                path: "/group" /* 세그먼트만 추가하고싶을때 사용 */,
                /* Component: DashBoardLayout, */
                children: [
                    {
                        path: "dashboard",
                        element: <DashBoard />,
                        children: [
                            {
                                index: true,
                                element: <DashBoardHome />,
                            },
                            {
                                path: "setting", // dashboard/setting
                                element: <DashBoardSetting />,
                                children: [
                                    {
                                        index: true,
                                        element: <h1>데쉬보드 셋팅 하위 메뉴 </h1>,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                path: "*",
                element: <h1>404 Error Not Found</h1>,
            },
        ],
    },
]);

export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
