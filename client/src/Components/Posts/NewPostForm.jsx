// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import { createPost } from "../../service/postService.js";
import PostForm from "./PostForm.jsx";
import {objectToFormData} from "../../utils/formDataHelper.js";

const NewPostForm = () => {
    const navigate = useNavigate();

    const handleCreateSubmit = async (rawData) => {
        // Lets create the form data object
        // needs to be wrapped in a post[field] objects
        try {
            const formData = objectToFormData({post: rawData})
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