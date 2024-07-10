import React from 'react';
import '../css/style.css'; // Ensure your CSS file is correctly imported
import Navbar from '../components/Navbar';
import BlogLayout from '../components/BlogLayout';

const Blog = () => {

    return (
        
        <>
        <Navbar/>
        <BlogLayout/>
      </>
      
    );
};

export default Blog;
