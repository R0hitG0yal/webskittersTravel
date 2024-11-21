"use client"
import { Dispatch, SetStateAction } from "react";
import Options from '../components/options';

export default function Card({ heading, subheading, setEmail, setPassword, handleClick, signOrLog }:
    {
        heading: string,
        subheading: string,
        setEmail: Dispatch<SetStateAction<string>>,
        setPassword: Dispatch<SetStateAction<string>>,
        handleClick: () => void
        signOrLog: string
    }) {
    return <div className="bg-slate-100 h-screen w-screen flex flex-col justify-center items-center">
        <div className="p-4 border-2 bg-blue-50 border-slate-300 rounded-lg min-w-[30%] max-w-60 text-center">
            <div className="w-[100%] flex justify-center">
                <img
                    src='/assets/logo.jpg'
                    alt="logo"
                    className="w-16 h-16 rounded-lg shadow-lg"
                />
            </div>

            <div className="font-serif text-2xl font-extrabold p-1 ">{heading}</div>
            <div className="font-serif text-lg text-slate-600 pb-1 tracking-tight">{subheading}</div>
            <div className="text-left px-6">
                <p className="font-serif text-lg pb-1">Email</p>
                <input
                    type="text"
                    placeholder="Enter email..."
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[100%]" />
            </div>
            <div className="text-left px-6">
                <p className="font-serif text-lg pb-1">Password</p>
                <input
                    type="password"
                    placeholder="Enter password..."
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[100%]" />
            </div>
            <button
                onClick={() => { handleClick }}
                className="p-2 bg-slate-800 w-[90%] text-white rounded-xl m-4">
                Create Account
            </button>
            <p className="text-center text-sm">Or {signOrLog} with</p>
            <div>
                <Options logo='' label='Apple' />
                <Options logo='' label='Gmail' />
                <Options logo='' label='Facebook' />
            </div>
        </div>
    </div>
}