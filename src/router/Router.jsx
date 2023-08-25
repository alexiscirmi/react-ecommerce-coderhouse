import '../assets/scss/_colors.scss';
import '../App.scss';
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
        {/* <Route path='users/*' element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;