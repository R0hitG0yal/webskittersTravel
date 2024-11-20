"use client"
import { Dispatch, SetStateAction } from "react";

export default function Card ({image, heading, subheading, setEmail, setPassword, handleClick}: 
    {image: string, 
        heading: string, 
        subheading: string, 
        setEmail:Dispatch<SetStateAction<string>>, 
        setPassword: Dispatch<SetStateAction<string>>,
        handleClick: ()=> void
    }) {
    return <div>
        <img
        src={image}
        alt="logo"
        className=""
        />
        <div>{heading}</div>
        <div>{subheading}</div>
        <div>
            <p>Email</p>
            <input 
            type="text" 
            placeholder="Enter email..."

            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <p>Password</p>
            <input 
            type="password" 
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button 
        onClick={() => {handleClick}}>Create Account</button>
    </div>
}