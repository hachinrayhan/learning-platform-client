import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion className='container my-5 text-start'>
            <h2>Questions and Answers Section</h2>
            <Accordion.Item eventKey="0">
                <Accordion.Header>#1 what is cors?</Accordion.Header>
                <Accordion.Body>
                    CORS stands for <strong>Cross-Origin Resource Sharing</strong>. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. <br />

                    In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>#2 Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    I am using firebase because firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br />
                    <strong>Other Options to implement authentication:</strong> <br />
                    i. Auth0 <br />
                    ii. Passport <br />
                    iii. Keycloak <br />
                    iv. MongoDB <br />
                    v. Okta etc...
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>#3 How does the private route work?</Accordion.Header>
                <Accordion.Body>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. <br />

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>#4 What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />

                    <strong>Working of Node.js:</strong> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

                    Node.js basically works on two concept <br />

                    i. Asynchronous <br />
                    ii. Non-blocking I/O
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;