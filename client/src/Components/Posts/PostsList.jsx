import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchAllPost, deletePost } from "../../service/postService.js";
import CarouselHeader from "../CarouselHeader/index.jsx";

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
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
                console.error("Failed to fetch post", error);
            }
        }
        loadPosts();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    const deletePostHandler = async (id) => {
        try {
            await deletePost(id);
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Failed to fetch post", error);
        }
    }
    return (
        <div>
            <CarouselHeader />

            <div>
                {posts.map((post) => (
                    <div key={post.id} className="post-container">
                        <h2>
                            <Link to={`/posts/${post.id}`} className="post-title">
                                {post.title}
                            </Link>
                         </h2>
                        <p>{post.body}</p>
                        <div className="flex justify-center">
                            {post.image_url && (
                                <img src={post.image_url} alt={post.title} className="w-80 rounded-lg border-2 border-[#ccc] shadow-2xl "/>
                            )}
                        </div>
                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                        {' | '}
                        <button onClick={() => deletePostHandler(post.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

 }

 export default PostsList;