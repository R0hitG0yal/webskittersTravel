"use client"
import { useState } from 'react';
import Card from '../../../../components/authCard';

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    console.log(email, "---->",password);
    function handleClick() {
        //Do a backend post call with email and password to create User.
    }
 return <Card 
 image='' 
 heading='hghgg' 
 subheading='jkhjkbdn' 
 setEmail={setEmail} 
 setPassword={setPassword}
 handleClick={handleClick}/>  
}

export default SignUp;