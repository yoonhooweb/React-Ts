import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Default from "./layouts/Default";
import PostCreate from "./pages/posts/PostCreate";
import Login from "./pages/auth/Login";
import Posts from "./pages/posts/Posts";
import PostRead from "./pages/posts/PostRead";
import NotFoundPage from "./pages/NotFound";
import Kakao from "./pages/auth/callback/Kakao";
import Signup from "./pages/auth/Signup";
import EmailLogin from "./pages/auth/EmailLogin";
import { redirectIfAuth, requireAuth, useFetchUserData } from "./loader/auth.loader";

const router = createBrowserRouter([
    {
        Component: Default,
        children: [
            {
                path: "",
                Component: Home,
            },
            {
                path: "/posts",
                Component: Posts,
            },
            {
                path: "/create-post",
                Component: PostCreate,
                /* 권한에 따라 접근가능하도록 */
                loader: requireAuth,
            },
            {
                path: "/edit/:id",
                Component: PostCreate,
                loader: requireAuth,
            },
            {
                path: "/post/:id",
                Component: PostRead,
            },
            {
                path: "/auth/login",
                Component: Login,
                loader: redirectIfAuth,
            },
            {
                path: "/auth/email-login",
                Component: EmailLogin,
                loader: redirectIfAuth,
            },
            {
                path: "/auth/signup",
                Component: Signup,
                loader: redirectIfAuth,
            },
            {
                path: "/auth/callback/kakao",
                loader: redirectIfAuth,
                Component: Kakao,
            },
            {
                path: "*",
                Component: NotFoundPage,
            },
        ],
    },
]);

export default function Route() {
    useFetchUserData();
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
