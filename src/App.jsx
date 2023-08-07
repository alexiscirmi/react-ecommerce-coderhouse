import './assets/scss/_colors.scss'
import './App.scss'
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting='Hola mundo' />
    </div>
  );
}

export default App;