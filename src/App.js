import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar';
import AppRoutes from './routes';

export default function App() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            <AppRoutes />
        </div>
    );
}