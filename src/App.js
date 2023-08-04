import './css/style.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting='Hola mundo' />
      <Footer />
    </div>
  );
}

export default App;