
import { Outlet } from 'react-router-dom';
import "./navbar.css"
import { NavBar } from './Navbar';
import FooterComponent from './footer/Footer';




const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet></Outlet>
            <FooterComponent />
        </>
    );
}

export default MainLayout