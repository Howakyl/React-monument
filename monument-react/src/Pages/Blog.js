import React from 'react';
import BlogArticle from '../components/BlogArticle';
import BlogHeader from '../components/BlogHeader';
import './Blog.css';

const Blog = (props) => {
    return (
        <div>
            <BlogHeader />
            <BlogArticle />
        </div>
    )
};

export default Blog;