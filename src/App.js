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
            <footer className='footer-custom border-top d-flex flex-column flex-md-row justify-content-between mx-0 mx-md-5 pt-3 pb-3'>
                <div className='d-flex flex-column pb-2 pb-md-0'>
                    <div className=''>Desenvolvido por <a className='link-offset-2 link-underline link-underline-opacity-0 text-primary-emphasis' href="https://github.com/matheusg1" target='_blank'>Matheus G.</a> e <a className='link-offset-2 link-underline link-underline-opacity-0 text-primary-emphasis' href="https://www.linkedin.com/in/duarrte/" target='_blank'>Luan Souza</a></div>                    
                </div>
                <div className='d-flex flex-column'>
                    <div>Imagens por <a className='link-offset-2 link-underline link-underline-opacity-0 text-primary-emphasis' href="https://www.pexels.com/" target="_blank">Pexels</a></div>
                    <div className=''>Ilustrações por <a className='link-offset-2 link-underline link-underline-opacity-0 text-primary-emphasis' href="https://icons8.com/" target='_blank'>Icons 8</a></div>
                    <div>Vetores e ícones por <a className='link-offset-2 link-underline link-underline-opacity-0 text-primary-emphasis' href="https://www.svgrepo.com" target="_blank">SVG Repo</a></div>
                </div>
            </footer>
        </div>
    );
}