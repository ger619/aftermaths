// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { fetchPostOne, updatePost } from "../../service/postService.js";
import PostForm from "./PostForm.jsx";

const PostEditForm = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Fetch the post from the API by ID this is the same as the show page
        const fetchCurrentPost = async () => {
            try {
                const data = await fetchPostOne(id);
                setPost(data);
            } catch (e) {
                setError("Not Found");
            } finally {
                setLoading(false);
            }
        };
        fetchCurrentPost();
    }, [id]);

    // This is for the form submission after editing the post
    const handleUpdateSubmit = async ( formData ) => {

        formData.append("post[title]", rawData.title);
        formData.append("post[body]", rawData.body);
        formData.append("post[image]", rawData.image);

        try {
            const response = await updatePost(id, formData);
            navigate(`/posts/${response.id}`);
        } catch (e) {
            console.error(e);
        }
    };

    if (loading) return <div>Loading...</div>;
    return (
       <PostForm
           post={post}
           headerText="EDIT POST"
           onSubmit={handleUpdateSubmit}
           buttonText="Update Post"
       />
    )
}

export default PostEditForm