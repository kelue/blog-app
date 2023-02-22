import React from 'react'
import GoBack from '../common/GoBack'
const BlogDetails = () => {
  
    const bgStyle = {
        backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')`,
    }
  
    return (
        <div className='p-3'>
        <GoBack />    
        <div className="p-5">
            <div className="p-5 text-center bg-image img-fluid rounded-2" style={bgStyle} >
                <div className="mask" style={{backgroundColor: `rgba(0, 0, 0, 0.6)`}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Heading</h1>
                        <h4 className="mb-3">Subheading</h4>
                    </div>
                </div>
                </div>
            </div>
            <div className='mt-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
        </div>
        </div>
  )
}

export default BlogDetails
