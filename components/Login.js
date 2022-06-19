import React, { useState } from 'react';
import RegModal from './RegModal';
import { useForm } from "react-hook-form";
import useFirebase from '../hooks/UseFirebase';
import { useRouter } from "next/router";
const Login = () => {
    const [showModal, setShowModal] = useState(false)
    const {loginUser} = useFirebase()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
       loginUser(data.email, data.password, router)
      };
    return (
        <div className='px-32 bg-slate-50 grid grid-cols-2 h-screen'>
            <div className='flex flex-col justify-center'>
                <h1 className="text-6xl font-bold text-blue-500">Meetup</h1>
                <p className='text-3xl my-3'>
                Meetup helps you connect and share with the people in your life.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <div className='bg-white shadow-md rounded-lg p-4 flex flex-col'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='border rounded-md block w-96 p-3 text-lg  ring-1 mb-4' type="text" placeholder='Email address or phone number' {...register("email")} />
                    <input className='border rounded-md block w-96 p-3 text-lg  ring-1 mb-4' type="password" placeholder='Password' {...register("password")} />
                    <input className='text-center cursor-pointer bg-blue-600 py-3 inline-block text-white text-lg w-96 font-bold rounded-md' type="submit" value="Log In" />
                    </form>
                    <p className='text-center text-sm py-4 text-blue-500'>Forgotten Passoword?</p>
                    <hr />
                    <div className='mx-auto'>
                    <button onClick={() => setShowModal(true)} className='text-center bg-green-500 p-2  text-white text-lg w-52 font-bold rounded-md mt-3' type="submit" value="Log In">Create New Account</button>
                    </div>
                </div>
            </div>
            <RegModal onClose={() => setShowModal(false)} show={showModal} />
        </div>
    );
};

export default Login;