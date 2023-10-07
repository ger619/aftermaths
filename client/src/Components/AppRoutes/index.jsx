 import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList  from "../Posts/PostsList.jsx";
import PostDetails from "../Posts/PostDetails.jsx";
 import NewPostForm from "../Posts/NewPostForm.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/posts/new" element={<NewPostForm/>} />
            <Route path="/posts/:id" element={<PostDetails/>} />
        </Routes>
    );
}
export default AppRoutes;
