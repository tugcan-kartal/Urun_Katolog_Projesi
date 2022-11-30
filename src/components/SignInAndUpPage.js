import React from 'react';
import './SignInAndUpPage.css';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import logo from '../images/indir.png';


function SignInAndUpPage() {

    const schema=yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).max(20).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit=(data)=>{
        console.log(data);
    }

  return (
    <div>


        <div className='flex justify-evenly items-center'>

          <div className='mt-32'>

            <div className='w-48'>
              <img className='rounded-full mb-8' src={logo} />
            </div>

            <div className='font-mono'>
              Technology is changing our lives at an irresistible speed. 
              <br />
              We use this change to make urban life and living easier.
            </div>

          </div>
          
          <div className='shadow-lg w-96 h-48 text-center mt-32 bg-slate-50 p-4'>

              <form onSubmit={handleSubmit(onSubmit)}>

                  <input className='bg-gray-30 border border-gray-300 text-gray-900 text-lg rounded-lg outline-3 hover:outline-blue-400 pl-4 mb-4' type='text' placeholder='Email...' {...register("email")}/>
                  <p>{errors.email?.message}</p>

                  <input className='bg-gray-30 border border-gray-300 text-gray-900 text-lg rounded-lg outline-3 hover:outline-blue-400 pl-4 mb-4' type='password' placeholder='Password...' {...register("password")}/>
                  <p>{errors.password?.message}</p>

                  <input className='bg-blue-400 p-1 pl-4 pr-4 mx-16 mb-2 rounded-lg' type='submit' value='Log In'/>

              </form>
              
              <div className='bg-green-400 p-1 pl-4 pr-4 w-3/4 ml-14 rounded-lg'>
                Create New Account
              </div>
          
          </div>

        </div>


    </div>
  )
}

export default SignInAndUpPage