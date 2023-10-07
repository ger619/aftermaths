import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { API_URL } from "../../constants";

const PostEditForm = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        //Fetch the post from the API by ID this is the same as the show page
        const fetchCurrentPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                } else {
                    throw response;
                }
            } catch (err) {
                console.error(err);
                setError("Something went wrong. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchCurrentPost();

    }, [id]);

    // This is for the form submission after editing the post
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: post.title,
                    body: post.body,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                navigate(`/posts/${data.id}`);

            } else {
                throw response;
            }
        } catch (e) {
            console.error(e);
        }
    };
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="post-title">Title</label>
                    <input
                        type="text"
                        name="post-title"
                        id="post-title"
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="post-body">Body</label>
                    <textarea
                        name="post-body"
                        id="post-body"
                        value={post.body}
                        onChange={(e) => setPost({ ...post, body: e.target.value })}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostEditForm