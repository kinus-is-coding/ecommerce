import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
interface AuthFormData {
  email: string;
  password: string; 
} 
const Auth: React.FC = () => {
  
  const [authMode,setAuthMode]=useState<"signup"|"login">("signup")
  const [error,setError]=useState<string|undefined>(undefined)
  const {signup,login}=useAuth()
  const {register,handleSubmit,formState:{errors}}=useForm<AuthFormData>()

  const navigate=useNavigate()

  const onSubmit = (data: AuthFormData) => {
    setError(undefined)
    let result
    if(authMode==="signup"){
      result=signup(data.email,data.password)
    }else{ 
      result=login(data.email,data.password)
    }
    if(result.success){
      navigate("/ ")
    }else{
      setError(result.error)
    }
  } 
  return (
    <div className='auth-page'>
      <div className='container'>
        <div className='auth-container'>
          <h1 className='auth-title'>{authMode==="signup"?"Signup":"Login"}</h1>
          <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
            {error&& <div className='error-msg'>{error}</div>}
            <div className='form-group'>
              <label className='form-label' htmlFor='email'>Email:</label>
              <input className='form-input' type="email" id='email'{...register('email',{ required: "Email là bắt buộc" }) }/>
              {errors.email&&<span>Email is required</span>}
            </div>
            <div className='form-group'>
              <label className='form-label' htmlFor='password'>Password:</label>
              <input className='form-input' type="password" id='password' {...register("password", { minLength: { value: 6, message: "Tối thiểu 6 ký tự" } })}/>
              {errors.password&&<span>Password length more than 6</span>}
            </div>
            <button type='submit' className='btn btn-primary'>{authMode==="signup"?"Signup":"Login"}</button>
          </form>
          <div className='auth-switch'>
            {authMode==="signup"?
              <p>Already have an account? 
              <span className='auth-link' onClick={()=>{setAuthMode("login")}}>Login</span></p>
            :
              <p>Dont have an account? 
              <span className='auth-link' onClick={()=>{setAuthMode("signup")}}>Signup</span></p>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Auth