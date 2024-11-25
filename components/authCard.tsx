"use client"
import { Dispatch, SetStateAction } from "react";
import Options from '../components/options';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Link from "next/link";

export default function Card({ heading, subheading, email, password, error, setError, setEmail, setPassword, handleClick, signOrLog }:
    {
        heading: string,
        subheading: string,
        setEmail: Dispatch<SetStateAction<string>>,
        setPassword: Dispatch<SetStateAction<string>>,
        handleClick: (event: React.FormEvent<HTMLFormElement>) => void
        signOrLog: string,
        email: string,
        password: string,
        error: string | null,
        setError: Dispatch<SetStateAction<string | null>>,
    }) {
    const auth = getAuth();
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider(); // Ensure this is initialized correctly

        signInWithPopup(auth, provider)
            .then((result) => {

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const accessToken = credential?.accessToken || "";
                localStorage.setItem('token', accessToken);

                // The signed-in user info.
                const user = result.user;
                console.log('User Info:', user);

            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                // Ensure the email is available before accessing it
                const email = error.customData?.email;
                if (email) {
                    console.log("Error Email:", email);
                }

                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                if (credential) {
                    console.log("Error Credential:", credential);
                }

                console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
            });
    };


    const handleFacebookLogin = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential?.accessToken || "";
                localStorage.setItem('token', accessToken);


                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (<div className=" h-screen w-screen flex flex-col justify-center items-center">
        <Container className="max-w-[400px] text-center pb-[10px]" style={{ paddingTop: '40px 0px' }}>
            <Row>
                <Col className=" text-3xl font-semibold">
                    <h2>{heading}</h2>
                </Col>
            </Row>
            <Row>
                <Col className=" text-xl font-serif pb-2">
                    <h2>{subheading}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form
                        onSubmit={handleClick}
                    >    {error && <Alert color="danger">{error}</Alert>}
                        <FormGroup row >
                            <div className="text-left pl-[16%] py-1">
                                <Label for="loginEmail" sm={4} >Email</Label>
                            </div>
                            <Col sm={8}>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    name="email"
                                    id="loginEmail"
                                    placeholder="Email"

                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <div className="text-left pl-[16%] py-1">
                                <Label for="loginEmail" sm={4} >Password</Label>
                            </div>
                            <Col sm={8}>
                                <Input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    id="loginPassword"
                                    placeholder="Password"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Button className="p-2 bg-slate-800 w-[80%] text-white rounded-xl m-4">{signOrLog}</Button>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col className='text-black'>
                                {
                                    signOrLog === 'login' ?
                                        <>
                                            No account? <Link href="/auth/signup" className="text-blue-500">Create one</Link>
                                        </> :
                                        <>
                                            Already have an Account? <Link href="/auth/login" className="text-blue-500">Login</Link>
                                        </>
                                }
                            </Col>
                        </FormGroup>

                    </Form>
                </Col>
            </Row>
        </Container>


        <div className='max-w-[300px] min-w-[250px] mx-auto'>
            <Options handleButtonClick={handleFacebookLogin} logo={FaFacebookF} label='Facebook' fill='blue' />
            <Options handleButtonClick={handleGoogleLogin} logo={FcGoogle} label='Google' fill='' />
        </div>
    </div>
    );
}