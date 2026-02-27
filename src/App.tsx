import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import AppLayout from "./layout/AppLayout";
function App() {
  return(
    <Routes>
      <Route  element={<AppLayout />}>
        <Route path="/"  element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  )
}

export default App
