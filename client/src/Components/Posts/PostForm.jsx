import { useState } from "react";
import PropTypes from "prop-types";

const PostForm = ({ post, headerText, onSubmit, buttonText }) => {
    const [formData, setFormData] = useState(
        post ||{
        title: "",
        body: "",
        image: "",
    });

    return (
       <div>
           <h2>{headerText}</h2>
           <form onSubmit={(e) => {
               e.preventDefault();
               onSubmit(formData);
           }}>
               <div>
                   <label htmlFor="title">Title: </label>
                   <input
                       className="border border-gray-400"
                       id="title"
                       type="text"
                       value={formData.title}
                       onChange={(e) => setFormData({
                            ...formData,
                            title: e.target.value,
                       })}
                   />
               </div>
               <div>
                   <label htmlFor="body">Body: </label>
                   <textarea
                       className="border border-gray-400"
                       id="body"
                       type="text"
                       value={formData.body}
                       onChange={(e) => setFormData({
                            ...formData,
                            body: e.target.value,
                       })}
                   />
               </div>

               <div>
                   <label htmlFor="title">Image: </label>
                   <input
                       id="image"
                       type="file"
                       accept={"image/*"}
                       onChange={(e) => setFormData({
                           ...formData,
                           image: e.target.files[0],
                       })
                   }

                   />
               </div>

               <div>
                   <button
                       type="submit"
                       className="border border-gray-400"
                   >
                       {buttonText}
                   </button>
               </div>


           </form>
       </div>
    );
}

PostForm.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }),
    headerText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

PostForm.defaultProps = {
    post: null,
}
export default PostForm;

