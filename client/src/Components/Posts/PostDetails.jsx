import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {API_URL} from "../../constants.js";

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                    setLoading(false);
                } else {
                    throw response;
                }
            } catch (error) {
                console.error(error);
                setError("Error fetching data. Try again later.");
            }
        };
        fetchPost();
    }, [id]);
    if (loading) return <div>Loading....</div>;
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to='/'>Back</Link>

        </div>
    );

}

export default PostDetails;