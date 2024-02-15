"use client";
import React, { FormEvent, useState } from 'react';
import Loader from '@/components/shared/Loader';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const router = useRouter();
  const [formLoading, setFormLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  // Handle login
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    const user = await signIn("helping-hand", {
      email: loginInfo.email,
      password: loginInfo.password,
      redirect: false,
    })

    if (user?.ok) {
      toast.success("Logged in Successfully!");
      router.push("/dashboard");
    } else {
      toast.error(user?.error || "Unable to Login!");
    }

    setFormLoading(false);
  }


  return (
    <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 flex justify-center min-h-[calc(100vh-64px)] relative'>
      <div className='bg-primary-content/25 w-full max-w-md p-4 md:p-8 border-2 border-primary rounded-lg flex-1 h-min absolute top-1/2 -translate-y-1/2'>
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