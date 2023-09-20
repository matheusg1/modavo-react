import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar/Navbar.js';
import AppRoutes from './routes';

export default function App() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            <AppRoutes />
            <footer className='fs-7 d-flex flex-column align-items-end px-5'>
                <div className=''>Illustration by <a href="https://icons8.com/">Icons 8</a></div>
                <div>Vectors and icons by <a href="https://www.svgrepo.com" target="_blank">SVG Repo</a></div>
                <div className=''>Desenvolvido por Matheus G.</div>
            </footer>
        </div>
    );
}