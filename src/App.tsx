import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import AppLayout from "./layout/AppLayout";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
function App() {
  return(
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route  element={<AppLayout />}>
            <Route path="/"  element={<Home/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/products/:id" element={<ProductDetails/>}/>
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
