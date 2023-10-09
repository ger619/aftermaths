import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { deletePosts, fetchAllPost, fetchPostOne } from "../../service/postService.js";

const PostsList = () => {
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    // Fetch posts from API
    useEffect(() => {
        async function loadPosts() {
            try {
                const posts = await fetchAllPost();
                setPosts(posts);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false)
            }
        }
        loadPosts();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    const deletePost = async (id) => {
        try {
            await deletePosts(id);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Failed to delete the post", error);
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
                    <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                    {' | '}
                    <button onClick={() => deletePost(post.id)}>
                        Delete
                    </button>
                </div>
            ))}
            </div>
    );

 }

 export default PostsList;