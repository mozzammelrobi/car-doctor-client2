import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;