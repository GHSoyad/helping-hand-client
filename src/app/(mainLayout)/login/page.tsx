"use client";
import Loader from '@/components/shared/Loader';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  const [formLoading, setFormLoading] = useState(false);


  // Handle login
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    const user = await signIn("helping-hand", {
      email: loginInfo.email,
      password: loginInfo.password,
      callbackUrl: "/"
    })

    setFormLoading(false);
  }


  return (
    <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 flex justify-center mt-20'>
      <div className='bg-primary-content/25 max-w-md p-4 md:p-8 border-2 border-primary rounded-lg flex-1 relative'>
        {
          formLoading && <Loader />
        }
        <>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold text-primary text-center'>Login</h1>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="Your Email"
                name='email'
                className="input input-bordered w-full"
                onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                required
                type="password"
                placeholder="Your Password"
                name='password'
                className="input input-bordered w-full"
                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
              />
            </div>
            <button className='btn border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary' disabled={formLoading}>Login</button>
            <p className='text-sm text-center'>Don&apos;t Have an Account? <Link href='/register' className='font-bold text-base hover:underline hover:text-primary'>Register</Link></p>
          </form>
        </>
      </div>
    </div>
  );
};

export default LoginPage;