import React, { useState, useEffect } from 'react';
import { API_URL } from "../../constants.js";

const PostsList = () => {
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // Fetch posts from API
    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    throw response;
                }
            } catch (e) {
                setError("Something went wrong. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="post-container">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
            </div>
    );

 }

 export default PostsList;