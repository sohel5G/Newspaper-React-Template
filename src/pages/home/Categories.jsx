import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPosts from "../../hooks/hooks";
import Post from "./Post";
import HeaderTop from "../../header/HeaderTop";
import HeaderBottom from "../../header/HeaderBottom";


const Categories = () => {

    const [filteredPost, setFilteredPost] = useState([])
    const { category_id } = useParams()
    const posts = useGetPosts()

    useEffect(() => {
        const filteredPosts = posts.filter(post => post.category_id === category_id)
        if (filteredPosts) {
            setFilteredPost(filteredPosts)
        }

    }, [posts, category_id])
    

    return (
        <>
            <HeaderTop></HeaderTop>
            <HeaderBottom></HeaderBottom>
            {
                !!filteredPost && filteredPost.length > 0 ?
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
                        {
                            !!filteredPost && filteredPost.length > 0 ? filteredPost.map(post => <Post post={post} key={post._id}></Post>) : <h1 className="text-5xl text-center py-32"> No news on this category </h1>
                        }
                    </div>
                </> :
               <>
                    <div>
                        <h1 className="text-5xl text-center py-32"> No news on this category </h1>
                    </div>
               </>
            }
        </>
    );
};

export default Categories;