import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.jsx'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from '../components/Cart/Cart.jsx'
import Checkout from '../components/Checkout/Checkout.jsx'
import { CartContextComponent } from '../components/context/cartContext.jsx'

function Router() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartContextComponent>
    </BrowserRouter>
  )
}

export default Router