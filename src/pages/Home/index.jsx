import React from 'react'
import { useState } from 'react';
import Navigation from '../../components/common/Navigation';
import BlogList from '../../components/Home/BlogList';
import EmptyList from '../../components/Home/EmptyList';
import Header from '../../components/Home/Header';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  //also use useEffect to grab the data

  return (
    <>
        {/* Navbar */}
        <Navigation />
        < Header />

        {/* Blog List & Empty list  */}
        { !blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </>
  )
}

export default Home;
