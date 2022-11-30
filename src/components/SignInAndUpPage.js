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
        
        <div>

          <div>
            <img src={logo} />
          </div>

          <div>
            Technology is changing our lives at an irresistible speed. We use this change to make urban life and living easier.
          </div>

        </div>
        
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='bg-gray-50 ' type='text' placeholder='Email...' {...register("email")}/>
                <p>{errors.email?.message}</p>

                <input type='password' placeholder='Password...' {...register("password")}/>
                <p>{errors.password?.message}</p>

                <input type='submit' />

            </form>
        
        </div>
    </div>
  )
}

export default SignInAndUpPage