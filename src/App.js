import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'

import Index from './pages/inicio';
import Navbar from './components';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
    <Navbar/>
    <Index/>
    </div>
  );
}

export default App;
