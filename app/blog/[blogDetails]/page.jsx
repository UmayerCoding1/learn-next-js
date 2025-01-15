import React from 'react';

const BlogDetails = ({ params }) => {

    const { title, author, date, content, tags } = blogs.filter(blog => blog?.id.toString() === params?.blogDetails)[0];


    return (
        <div>
            <p>{title}</p>
            <p>{author}</p>
            <p>{date}</p>
            <p>{content}</p>
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
export default BlogDetails;