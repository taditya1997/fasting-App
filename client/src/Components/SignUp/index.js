import React, { useState } from 'react';
import './index.css';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [name,setName]=useState('');
    const [errorname,setErrorName]=useState(null);
    const [erroremail,setErrorEmail]=useState(null);
    const [errorpass,setPassEmail]=useState(null);


    async function handleSubmit(event)
    {
        event.preventDefault();
        console.log(email,pass);
        setEmail("");
        setPassword("");
        setErrorName(null);
        setName("")
        setErrorEmail(null);
        setPassEmail(null);
    

        try
        {
            const res= await fetch('/signup',{
                method:'POST',
                body:JSON.stringify({ name:name,email:email,password:pass}),
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
                window.location.assign('/');
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
                <h2>Sign Up</h2>
                <label >Name</label>
                <input type="name" value={name} required onChange={(event) => setName(event.target.value)} />
                <label>{errorname}</label>
                <label >Email</label>
                <input type="email" value={email} required onChange={(event) => setEmail(event.target.value)} />
                <label >{erroremail}</label>
                <label >Password</label>
                <input type="password" value={pass} required onChange={(event) => setPassword(event.target.value)} />
                <label >{errorpass}</label>
                <div className="Buttons">
                <button>Sign Up</button>
                </div>
               
            </form>
        </div>

    );
};

export default SignUp;