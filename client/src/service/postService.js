import { API_URL } from "../constants";


const fetchAllPost = async () => {
    const response = await fetch(`${API_URL}`);
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
const deletePosts = async (id) => {

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

export { deletePosts, fetchAllPost, fetchPostOne };