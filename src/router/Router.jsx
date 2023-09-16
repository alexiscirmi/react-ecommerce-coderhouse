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
    <CartContextComponent>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextComponent>
  )
}

export default Router;