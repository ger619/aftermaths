import { API_URL } from "../constants";


const fetchAllPost = async () => {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

const createPost = async (post) => {
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();

}

const fetchPostOne = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
const deletePost = async (id) => {

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    // if status code is 204, return null
    if (response.status === 204) {
        return null;
    }
        return await response.json();
}

export { createPost, deletePost, fetchAllPost, fetchPostOne };