import React, { useState } from 'react';
import './index.css';
import auth from '../../auth';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [erroremail,setErrorEmail]=useState(null);
    const [errorpass,setPassEmail]=useState(null);
    
    async function handleSubmit(event)
    {
        event.preventDefault();
        console.log(email,pass);
        setEmail("");
        setPassword("");
        setErrorEmail(null);
        setPassEmail(null);
    

        try
        {
            const res= await fetch('/login',{
                method:'POST',
                body:JSON.stringify({email:email,password:pass}),
                headers:{'Content-Type':'application/json'}

            })

            const data= await res.json();
            console.log(data);
            if(data.error)
            {
                setErrorEmail(data.error.email);
                setPassEmail(data.error.password);
            }
            if(data.user)
            {
                if(!auth.isAuthencated()){
                    auth.login(()=>{
                        {props.history.push('/app')}
                    })
                }
            
            }
        }
        catch(error)
        {
            console.log(error);
           
        }

    }
    return (
        <div className="Form-Container">
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Login In</h2>
                <label >Email</label>
                <input type="email" value={email} required onChange={(event) => setEmail(event.target.value)} />
                <label >{erroremail}</label>
                <label >Password</label>
                <input type="password" value={pass} required onChange={(event) => setPassword(event.target.value)} />
                <div className="Buttons">
                <button>Log In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;