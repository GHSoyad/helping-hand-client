"use client";
import Loader from '@/components/shared/Loader';
import { createUser } from '@/utils/actions/createUser';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const RegisterPage = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [formLoading, setFormLoading] = useState(false);

  // Handle register
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    const res = await createUser(loginInfo);
    if (res.success) {
      toast.success(res.message);
      router.push("/login");
    } else {
      toast.error(res.message);
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
            <h1 className='text-2xl font-semibold text-primary text-center'>Register</h1>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Your Full Name"
                name='name'
                className="input input-bordered w-full"
                onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
              />
            </div>
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
                pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$'
                title='Password must be 6 characters containing a Uppercase, a Lowercase and a digit'
                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
              />
            </div>
            <button className='btn border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary' disabled={formLoading}>Register</button>
            <p className='text-sm text-center'>Already Have an Account? <Link href='/login' className='font-bold text-base hover:underline hover:text-primary'>Login</Link></p>
          </form>
        </>
      </div>
    </div>
  );
};

export default RegisterPage;