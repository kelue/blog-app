import React from 'react'
import { Form } from 'react-bootstrap'
import SubmitButton from '../common/SubmitButton'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
}).required();

const LoginForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
   
   
      const onSubmit = data => {
        //this is where we will do the fetch call to the api for user details
        console.log(data)
    };


  return (
    <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register('email')}/>
                <p className='text-danger'>{errors.email?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register('password')} />
                <p className='text-danger'>{errors.password?.message}</p>
            </Form.Group>
            
            
            <SubmitButton variant={'secondary'} type={'submit'}/>

            <div>
                <p className="mt-3">Don't have an account? <a href="/register" className="text-white-50 fw-bold text-decoration-none">Sign Up</a>
                </p>
            </div>
        </Form>
    </div>
  )
}

export default LoginForm