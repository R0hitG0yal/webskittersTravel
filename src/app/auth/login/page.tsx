"use client"
import { useState } from 'react';
import Card from '../../../../components/authCard';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    console.log(email, "---->", password);
    function handleClick() {
        //Do a backend post call with email and password to create User.
    }
    return <Card
        heading='Log in'
        subheading='Log in by using the form below'
        setEmail={setEmail}
        setPassword={setPassword}
        handleClick={handleClick}
        signOrLog='log in' />
}

export default Login;