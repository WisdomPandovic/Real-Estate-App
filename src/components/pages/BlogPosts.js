import Nav from '../Nav';
import Footer from '../Footer';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPosts.css';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const unsplashApiUrl = 'https://source.unsplash.com/400x200/?realestate';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const updatedPosts = await Promise.all(data.slice(0, 10).map(async (post) => {
          const imageResponse = await fetch(unsplashApiUrl);
          const imageUrl = imageResponse.url;
          
          return {
            ...post,
            imageUrl,
            date: new Date().toLocaleDateString(),
          };
        }));
        
        setPosts(updatedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='bck-whitesmoke'>
      <Nav />
      <div className='blog-page'>
      <h2 className='blog-post-header'>Blog Posts</h2>
      <div className='blog-posts'>
        {posts.map(post => (
          <div key={post.id}>
            <img src={post.imageUrl} alt="Blog Image" />
            <h2>{post.title}</h2>
            <p>Published on: {post.date}</p>
            <button>View Post</button>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPosts;
