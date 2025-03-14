import {Link, Outlet} from 'react-router-dom';
import { ThemeButton } from "./ThemeButton";

const Navigation = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <ThemeButton />
            </header>

            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export {Navigation}