
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="text-sm text-gray-500 mb-2">
              {post.date} • {post.readTime}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {post.excerpt}
            </p>
          </div>
          <div>
            <Link to={`/blog/${post.id}`} className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 inline-block">
              Lire la suite
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 h-full">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
            style={{ height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
