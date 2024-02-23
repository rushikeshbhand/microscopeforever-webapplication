import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="containermax-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-lime-50 px-10 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 border border-lime-600 rounded bg-transparent text-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none my-1">Create Account</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link className="underline border-blue text-blue-600 cursor-pointer" to="/login">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
    )
}
