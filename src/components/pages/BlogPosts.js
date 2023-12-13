// src/components/BlogList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPosts.css';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data)
        setPosts(data);
      
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul className='blog-post'>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              <img src={post.thumbnailUrl} alt={post.title}   style={{ width: '100px', height: '100px', objectFit: 'cover' }}/>
              <div>
                <h3>{post.title}</h3>
                <p>Date: {post.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;
