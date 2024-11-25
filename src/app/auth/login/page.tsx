"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '../../../../context/authUserContext';
import { GoogleAuthProvider } from "firebase/auth";
import Card from '../../../../components/authCard';

export default function Home() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { signInWithEmailAndPassword } = useAuth();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        try {
            const authUser = await signInWithEmailAndPassword(email, password);
            if (authUser?.user) {
                const token = await authUser.user.getIdToken();
                console.log(token);
                localStorage.setItem('token', token);
                router.push('/dashboard');
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setEmail('');
            setPassword('');
        }
    };

    return <Card
        heading='Login'
        subheading='Login using form below'
        email={email}
        password={password}
        error={error}
        setError={setError}
        setEmail={setEmail}
        setPassword={setPassword}
        handleClick={onSubmit}
        signOrLog='login'
    />
}
