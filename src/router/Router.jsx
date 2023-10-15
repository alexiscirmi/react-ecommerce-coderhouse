import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.jsx'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from '../components/Cart/Cart.jsx'
import Checkout from '../components/Checkout/Checkout.jsx'
import { CartProvider } from '../context/cartContext.jsx'

function Router() {
  return (
    <HashRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/coderhouse-react-project' element={<ItemListContainer />} />
          <Route path='/coderhouse-react-project/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/coderhouse-react-project/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/coderhouse-react-project/cart' element={<Cart />} />
          <Route path='/coderhouse-react-project/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </HashRouter>
  )
}

export default Router