import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../service/postService.js";

const NewPostForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            title,
            body,
        };
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
        if (response.ok) {
            const { id } = await response.json();
            navigate(`/posts/${id}`);
        } else {
            console.error("Failed to create post");
        }
    }
    return (
        <div>
        <h2>New Post to Add</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titleInput">Title: </label>
                    <input
                        id="titleInput"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="bodyInput">Body: </label>
                    <textarea
                        id="bodyInput"
                        type="text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Create Post</button>
                </div>
            </form>
        </div>
    );
}

export default NewPostForm;