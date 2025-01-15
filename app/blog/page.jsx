import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4'>
            {blogs.map(blog => <div key={blog.id} className='w-full border-2 my-2 p-2'>
                <div className='bg-gray-200 p-1'>
                    <h3>{blog.author}</h3>
                    <p>{blog.date}</p>
                </div>
                <h1 className='text-2xl my-2 font-semibold'>{blog.title}</h1>
                <p className='my-2 text-xs text-gray-500'>{blog?.content.split('...')[0]} <Link href={`/blog/${blog?.id}`} className='text-blue-500'>Learn more...</Link></p>
                {blog?.tags.map(item => <button key={item} className='border border-black rounded-lg p-2 my-1 mx-1 bg-gray-50  '>
                        {item}
                </button>)}
            </div>)}
        </div>
    );
};

const blogs = [
    {
      "id": 1,
      "title": "Understanding React Hooks",
      "author": "Jane Doe",
      "date": "2025-01-15",
      "content": "React hooks are a powerful feature that allows developers to use state and other React features without writing a class...",
      "tags": ["React", "JavaScript", "Web Development"]
    },
    {
      "id": 2,
      "title": "The Ultimate Guide to Node.js",
      "author": "John Smith",
      "date": "2025-01-12",
      "content": "Node.js is a runtime environment that lets you run JavaScript on the server side. In this guide, we'll explore the core concepts...",
      "tags": ["Node.js", "Backend", "JavaScript"]
    },
    {
      "id": 3,
      "title": "Mastering CSS Grid Layout",
      "author": "Emily Johnson",
      "date": "2025-01-10",
      "content": "CSS Grid Layout is a game-changer for web designers. With its powerful grid system, creating responsive designs has never been easier...",
      "tags": ["CSS", "Frontend", "Web Design"]
    },
    {
      "id": 4,
      "title": "A Beginner's Guide to MongoDB",
      "author": "Michael Brown",
      "date": "2025-01-08",
      "content": "MongoDB is a NoSQL database that stores data in JSON-like documents. It's a popular choice for modern web applications...",
      "tags": ["MongoDB", "Database", "NoSQL"]
    },
    {
      "id": 5,
      "title": "Top 10 JavaScript Libraries to Learn in 2025",
      "author": "Sophia Lee",
      "date": "2025-01-05",
      "content": "JavaScript libraries make development faster and easier. Here are the top 10 libraries you should consider learning in 2025...",
      "tags": ["JavaScript", "Libraries", "Programming"]
    }
  ]
  
export default Blog;