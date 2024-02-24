import React from 'react'
import {Link} from 'react-router-dom'

export default function () {
  return (
    <div className="min-h-screen flex flex-col">
            <div className="containermax-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-lime-200 px-10 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Log in</h1>

                    <input
                        type="text"
                        className="block border border-grey-light w-80 p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        className="block border border-grey-light w-80 p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 border border-lime-600 rounded bg-transparent text-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none my-1">Login</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account?
                    <Link className="underline border-blue text-blue-600 cursor-pointer" to="/signup">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>
  )
}
