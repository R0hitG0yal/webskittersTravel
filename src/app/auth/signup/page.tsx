"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '../../../../context/authUserContext';
import { GoogleAuthProvider } from "firebase/auth";
import Card from '../../../../components/authCard';

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const { createUserWithEmailAndPassword } = useAuth();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        // if (passwordOne !== passwordTwo) {
        //     setError("Passwords do not match");
        //     return;
        // }

        createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Success. The user is created in firebase");
                router.push("/dashboard");
            })
            .catch(error => setError(error.message));
    };

    const { signInWithEmailAndPassword } = useAuth();

    // const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     setError(null);
    //     try {
    //         const authUser = await signInWithEmailAndPassword(email, password);
    //         if (authUser?.user) {
    //             const token = await authUser.user.getIdToken();
    //             console.log(token);
    //             localStorage.setItem('token', token);
    //             // router.push('/logged_in');
    //         }
    //     } catch (error: any) {
    //         setError(error.message);
    //     } finally {
    //         setEmail('');
    //         setPassword('');
    //     }
    // };

    return <Card
        heading='SignUp'
        subheading='Create Account using form below'
        email={email}
        password={password}
        error={error}
        setError={setError}
        setEmail={setEmail}
        setPassword={setPassword}
        handleClick={onSubmit}
        signOrLog='SignUp'
    />
}