import { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect( () => {
      const auth = localStorage.getItem('Users');
      if(auth) {
          navigate('/');
      }
  });
  const Login = async() => {
        let data = await fetch('http://localhost:10101/disks',{
        method: 'post',
        body: JSON.stringify({UserName, Password, Email}),
        headers: {
           'Content-Type': 'application/json'
        }
     });
     data = await data.json();
     setUserName("");
     setPassword("");
     setEmail("");
     if(data){
         localStorage.setItem("Users",JSON.stringify(data));
         navigate('/');
     }
  }
  return (
    <div className="App">
        <div className='formdata'>
            <p className='username'>User Name</p>
               <input type='text' value={UserName}
                  onChange={(e) => setUserName(e.target.value)}/>
             <p className='password'>Password</p>
                <input type='password' value={Password}
                  onChange={(e) => setPassword(e.target.value)}/>   
             <p className='email'>Email</p>
                 <input type='email' value={Email}
                    onChange={(e) => setEmail(e.target.value)}/> 
             <p>
                  <button onClick={Login}>SignUp</button>  
             </p>         
        </div>
    </div>
  );
}

export default SignUp;