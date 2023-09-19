"use client"
import React from 'react';
import { useState } from 'react';
const RegisterForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password) {
      seterror("Please enter all fields");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (res.ok) {
        const form = e.target;
        form.reset; // Corrected method invocation
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  }
  
console.log(name);

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Register</h1>
          <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit} >
          <div className="relative mt-6">
              <input
                type="text"
                
               onChange={e=>setname(e.target.value)}
                placeholder="username"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none text-black"
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                user Name
              </label>
            </div>
            <div className="relative mt-6">
              <input
               onChange={e=>setemail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none text-black"
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div className="relative mt-6">
              <input
                onChange={e=>setpassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none text-black"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            
            <div className="my-6">
              <button onClick={handleSubmit}
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Register
              </button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Already have account?
              <a
                href="#!"
                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Login
              </a>
              .

            </p>
            {error&&(<div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error} 
            </div>)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
