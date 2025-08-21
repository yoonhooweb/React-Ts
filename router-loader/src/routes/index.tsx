import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Post from "./pages/post/Post";
import Default from "./layouts/Default";
import PostLoader from "./pages/post/PostLoader";
import { axiosInstance } from "../api/axios";
import PostLoding from "./pages/post/PostLoding";

const router = createBrowserRouter([
    {
        Component: Default,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/post",
                Component: Post,
            },
            {
                path: "/post-loader",
                Component: PostLoader, //비동기처리가 끝나야지 페이지 이동을 한다. get요청에서만 할수있다.
                loader: async () => {
                    const { data } = await axiosInstance.get("/posts22");
                    return data;
                },
                HydrateFallback: PostLoding,
                errorElement: <h1>에러나용</h1>,
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
