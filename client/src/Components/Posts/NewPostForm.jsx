// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { createPost } from "../../service/postService.js";
import PostForm from "./PostForm.jsx";

const NewPostForm = () => {
    const navigate = useNavigate();

    const handleCreateSubmit = async (formData) => {
        try {
           const response = await createPost(formData);
           navigate(`/posts/${response.id}`)
        } catch (error) {
            console.error("Failed to create post" ,error);
        }
    };
    return (
        <PostForm
            headerText="CREATE NEW POST"
            onSubmit={handleCreateSubmit}
            buttonText="Create Post"
        />
    );
}

export default NewPostForm;