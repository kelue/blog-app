import React from 'react'
import PostDetails from '../../components/Blog/PostDetails'
import GoBack from '../../components/common/GoBack'

const BlogPost = () => {


    
    //if it is edit sha grab details from database


  return (
    <div className='p-4'>
        <GoBack />
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
              <div className="card bg-dark text-white rounded-3">
                  <div className="card-body p-5 text-center">
                    <PostDetails />

                  </div>
              </div>
              </div>
          </div>
          </div>
    </div>
  )
}

export default BlogPost