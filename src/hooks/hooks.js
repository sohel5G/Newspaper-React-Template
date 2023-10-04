import { useEffect, useState } from "react"

const useGetPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return posts;

}


export const useGetCategoris = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return categories;

}


export default useGetPosts;



