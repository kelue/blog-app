import React from 'react'
import { Form } from 'react-bootstrap'
import SubmitButton from '../common/SubmitButton'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  firstname: yup.string().required().min(5),
  lastname: yup.string().required(),
  confirmPassword: yup.string().required().label('Confirm password').oneOf([yup.ref('password'), null], 'Passwords does not match'),
  userRole: yup.string().required()
}).required();

const RegisterForm = () => {

    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit = data => {
        //this is where we will do the fetch call to the api for user details
        console.log(data)

        //reset the values of the form after successfully submitting the data
        reset({
            firstname: '',
            lastname: '',
            password: '',
            email: '',
            confirmPassword: '',
            userRole: 'author'
          }, {
            keepErrors: true, 
          });
    };


  return (
    <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter first name" {...register('firstname')}/>
                <p className='text-danger'>{errors.firstname?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter last name" {...register('lastname')}/>
                <p className='text-danger'>{errors.lastname?.message}</p>
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Retype Password" {...register('confirmPassword')} />
                <p className='text-danger'>{errors.confirmPassword?.message}</p>
            </Form.Group>
            
            <Form.Group className='mb-3' controlId='role'>
                <Form.Label>Select User role</Form.Label>
                <Form.Select {...register('userRole')}>
                    <option value='author'>Author</option>
                    <option value='publisher'>Publisher</option>
                </Form.Select>
                <p className='text-danger'>{errors.userRole?.message}</p>
            </Form.Group>
            
            <SubmitButton variant={'secondary'} type={'submit'}/>

            <div>
                <p className="mt-3">Already have an account with us? <a href="/login" className="text-white-50 fw-bold text-decoration-none">Login here</a>
                </p>
            </div>
        </Form>
    </div>
  )
}

export default RegisterForm