import { Link, NavLink, Outlet } from "react-router";

export default function Default() {
    return (
        <>
            <header>
                <h1>헤더영역</h1>
            </header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <NavLink
                        className={({ isActive, isPending, isTransitioning }) =>
                            [isActive ? "isActive" : "", isPending ? "isPending" : "", isTransitioning ? "isTransitioning" : ""].join("")
                        }
                        viewTransition /* 부드럽게 이동하는 효과 isTransitioning 이 잠깐동안만 true가 된다.*/
                        to="/dashboard"
                    >
                        dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
            <Outlet />
            <footer> 푸터영역</footer>
        </>
    );
}
