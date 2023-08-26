import Navbar from '../components/Navbar/Navbar.jsx';
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Hola mundo' />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;