import React, { useState, useEffect } from 'react';
import { API_URL } from "../../constants.js";
import { Link } from "react-router-dom";

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
    const deletePost = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setPosts(posts.filter((post) => post.id !== id));
            } else {
                throw response;
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="post-container">
                    <h2>
                        <Link to={`/posts/${post.id}`} className="post-title">
                            {post.title}
                        </Link>
                     </h2>
                    <p>{post.body}</p>

                    <button onClick={() => deletePost(post.id)}>
                        Delete
                    </button>
                </div>
            ))}
            </div>
    );

 }

 export default PostsList;