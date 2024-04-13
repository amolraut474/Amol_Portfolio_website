import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from './Blog_deta';
import './Blog.css';

export default function BlogList() {
  return (
    <div className="blog-page">
   
      <div className="container">
        <div className="blog-row">
          {blogPosts.map(post => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="blog-list">
                <Link to={`/blog/${post.id}`}>
                  <img src={post.imageUrl} alt={post.title} />
                  <h2>{post.title}</h2>
                </Link>
                <p>{post.content}</p>
                <h3><Link className="cus-inner-head-link color-bg" to={`/blog/${post.id}`}>Read More</Link></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
