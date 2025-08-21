import { createBrowserRouter } from "react-router";
import Home from "../page/Home";
import About from "../page/About";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
