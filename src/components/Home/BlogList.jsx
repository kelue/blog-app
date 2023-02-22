import React from 'react'
import BlogItem from './BlogItem'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs }) => {
  return (
    <>
        <Row xs={1} md={2} lg={4}>
            {blogs.map(blog=> <Link to={`/blog/${blog.id}`} className='text-decoration-none text-reset'>< BlogItem blog={blog} key={blog.id} /></Link> )}
        </Row>
    </>
    )
}

export default BlogList
