import { Outlet } from "react-router";

export default function DashBoard() {
    return (
        <>
            <h1>DashBoard Component</h1>
            <Outlet />
        </>
    );
}
