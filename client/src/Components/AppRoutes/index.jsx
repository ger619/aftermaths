import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList  from "../Posts/PostsList.jsx";
import PostDetails from "../Posts/PostDetails.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/posts/new" element={<h1>New Post</h1>} />
            <Route path="/posts/:id" element={<PostDetails/>} />
        </Routes>
    );
}
export default AppRoutes;
