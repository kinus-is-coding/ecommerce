import { createContext,useContext,useState} from "react";
import { getProductById,type Product } from "../data/products";
interface Cart{
  id:string
  quantity:number
}
interface CartItemFull extends Cart {
  product: Product
}
interface CartContextType {
  cartItems: Cart[];
  addToCart: (productId: string) => void;
  getCartItemWithProduct:()=>CartItemFull[];
  updateQuantity:(productId: string,quantity:number)=>void;
  removeItem:(productId:string)=>void;
  getCartTotal:()=>number
}

const CartContext=createContext<CartContextType|undefined>(undefined) 
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems,setCartItems]=useState<Cart[]>([])
    

    function addToCart(productId:string){
      const existed=cartItems.find((item)=>item.id===productId)
      
      if(existed)
      {
        const updatedCartItems=cartItems.map((item)=>item.id===productId?{id:productId,quantity:existed.quantity+1}:item)
        setCartItems(updatedCartItems )
      }else{

        setCartItems([...cartItems,{id:productId,quantity:1 }])
      }
    }
    function removeItem(productId:string){
      setCartItems(
          cartItems.filter((item)=>
          item.id!==productId)
        )
    }
    function updateQuantity(productId:string,quantity:number){
      if(quantity<=0){
        removeItem(productId )
        return
      }
      setCartItems(
        cartItems.map((item)=>
        item.id===productId
        ?{...item,quantity}
        :item)
      )
    }
    function getCartTotal(){
       const total= cartItems.reduce((total,item)=>{
         const product=getProductById(item.id)
         return total+(product?product.price*item.quantity:0)
       },0)
       return total
    }
    function getCartItemWithProduct() {
      return cartItems
        .map((item) => ({
          ...item,
          product: getProductById(item.id)
        }))
        .filter((item): item is CartItemFull => !!item.product);
    }
    return <CartContext.Provider value={{addToCart,cartItems,getCartItemWithProduct,updateQuantity,removeItem,getCartTotal}}> 
            {children} 
           </CartContext.Provider>
}
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useAuth phải được dùng trong AuthProvider bro ạ!');
  }
  return context;
};