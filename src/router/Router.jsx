import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer.jsx'
import { CartContextComponent } from '../components/context/cartContext.jsx';

function Router() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </CartContextComponent>
    </BrowserRouter>
  )
}

export default Router;