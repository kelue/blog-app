import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BlogDetails from '../../components/Blog/BlogDetails';

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    //grab the data from the api
  
    //set the state of the blog to be displayed to the content
  }, [])
  

  return (
    <>
      {/* Blog Header and Blog Body  */}
      <BlogDetails />

    </>
  )
}

export default Blog
