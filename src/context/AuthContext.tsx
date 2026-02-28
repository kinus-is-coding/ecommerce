import { createContext,useContext,useState} from "react";

interface User {
  email: string;
  password?:string
} 

interface AuthContextType {
  signup:(email:string, password:string)=>{success:boolean,error?:string};
  User:User|null;
  login:(email:string, password:string)=>{success:boolean,error?:string};
  logout:()=>void
}

const AuthContext=createContext<AuthContextType|undefined>(undefined) 
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const savedEmail = localStorage.getItem("currentemail");

    const [User, setUser] = useState<User | null>(
    savedEmail ? { email: savedEmail } : null
    );

    function signup(email:string,password:string){
        const users=JSON.parse(localStorage.getItem("users")||"[]")
        const newUser={email,password}
        if(users.find((u:User)=>u.email===email)){
            return {success:false,error:"Email existed"}
        }
        users.push(newUser)
        localStorage.setItem("users",JSON.stringify(users))
        localStorage.setItem("currentemail",email)
        setUser({email})
        return {success:true}
    }
    function login(email:string,password:string){
        const users=JSON.parse(localStorage.getItem("users")||"[]")
        const user=(users.find((u:User)=>u.email===email&&u.password===password))
        if(!user){
          return {success:false,error:"Invalid email or password"}
        }
        localStorage.setItem("currentemail", email);
        setUser({email})
        return {success:true }
         
        
    }
    function logout(){
      localStorage.removeItem("currentemail")
      setUser(null)
    }
    return <AuthContext.Provider value={{signup,login,User,logout}}> 
            {children}
           </AuthContext.Provider>
}
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải được dùng trong AuthProvider bro ạ!');
  }
  return context;
};