
import { Outlet } from 'react-router-dom';
import "./navbar.css"
import { NavBar } from './Navbar';




const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet></Outlet>
        </>
    );
}

export default MainLayout