import { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();
  const auth = localStorage.getItem("Users");
  useEffect( () => {
      if(auth) {
         navigate('/');
      }    
  },[]);
  const LoginHandler = async() => {
    let data = await fetch('http://localhost:10101/login',{
      method: 'post',
      body: JSON.stringify({Email, Password}),
      headers: {
         'Content-Type': 'application/json'
      }
   });
   data = await data.json();
   setEmail("");
   setPassword("");
   if(data.UserName){
       localStorage.setItem("Users",JSON.stringify(data));
       navigate('/');
   } else {
       alert('Recard Not Found!!');
   }
  }
  return (
    <div className="App">
        <div className='formdata'>
            <p className='email'>Email</p>
                <input type='email' value={Email}
                    onChange={(e) => setEmail(e.target.value)}/> 
             <p className='password'>Password</p>
                <input type='password' value={Password}
                  onChange={(e) => setPassword(e.target.value)}/>   
             <p>
                  <button onClick={LoginHandler}>Login</button>  
             </p>         
        </div>
    </div>
  );
}

export default Login;