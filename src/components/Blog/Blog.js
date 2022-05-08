import { CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Blog = () => {
    return (
        <div className='mx-5'>

            <div className='border-2 border-red-200 rounded p-5 my-2'>
                <div className='flex mb-2'>
                    <QuestionMarkCircleIcon className='w-6 h-6'></QuestionMarkCircleIcon> <h3>What is the differece between JavaScript and Node.js?</h3>
                </div>
                <div className='flex mb-2'>
                    <CheckCircleIcon className='w-6 h-6'></CheckCircleIcon> <p>
                        JavaScript is a asynchronous single threaded non-blocking programming Language. Whereas, Node.js is a runtime environment of JavaScript. Node.js has the same v-8 engin that runs JavaScript in browser. We can run JavaScript codes anywhere if node is installed.
                    </p>
                </div>
            </div>

            <div className='border-2 border-red-200 rounded p-5 my-2'>
                <div className='flex mb-2'>
                    <QuestionMarkCircleIcon className='w-6 h-6'></QuestionMarkCircleIcon> <h3>When should you use node.js and when should you use MongoDB?</h3>
                </div>
                <div className='flex mb-2'>
                    <CheckCircleIcon className='w-6 h-6'></CheckCircleIcon> <p>
                        Node.js is a JavaScript runtime that handles I/O intensive tasks better that CPU intensive tasks. So we should use node.js if I/O intensive tasks are required.
                        We should use mongoDB when we know that our schema or pattern of data may change rapidly.
                    </p>
                </div>
            </div>

            <div className='border-2 border-red-200 rounded p-5 my-2'>
                <div className='flex mb-2'>
                    <QuestionMarkCircleIcon className='w-6 h-6'></QuestionMarkCircleIcon><h3>What is the difference between SQL and NoSQL?</h3>
                </div>
                <div className='flex mb-2'>
                    <CheckCircleIcon className='w-6 h-6'></CheckCircleIcon> <p>
                        Basically SQL and NoSQL are types of Database. In relational database, a programming language is used to interface with, which is called SQL. NoSQL databases are non-relational databases. So SQL is not used in these kind of databases.
                    </p>
                </div>
            </div>

            <div className='border-2 border-red-200 rounded p-5 my-2'>
                <div className='flex mb-2'>
                    <QuestionMarkCircleIcon className='w-6 h-6'></QuestionMarkCircleIcon><h3>What is the purpose of JWT and how does it work?</h3>
                </div>
                <div className='flex mb-2'>
                    <CheckCircleIcon className='w-6 h-6'></CheckCircleIcon> <p>
                        JSON Web Token is used to secure tokens!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;