import React from 'react'
import Navigation from '../../components/common/Navigation'
import RegisterForm from '../../components/SignUp/RegisterForm'

const Register = () => {
  return (
    <>
      <Navigation />
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white rounded-3">
                  <div className="card-body p-5 text-center">
                    <RegisterForm />
                  </div>
              </div>
              </div>
          </div>
          </div>
      </section> 
    </>
  )
}

export default Register
