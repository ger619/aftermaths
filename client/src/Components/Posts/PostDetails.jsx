import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchPostOne, deletePosts  } from "../../service/postService.js";

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetchPostOne(id );
                setPost(response)
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError("Error fetching data. Try again later.");
            }
        };
        fetchPost();
    }, [id]);

    const deletePost = async () => {
        try {
            await deletePosts(id);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    if (loading) return <div>Loading....</div>;
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to='/'>Back</Link>
            {' | '}
            {/* Delete Button */}
            <Link to={`/posts/${id}/edit`}>Edit</Link>
            <button onClick={deletePost}>
                Delete
            </button>
        </div>
    );

}

export default PostDetails;