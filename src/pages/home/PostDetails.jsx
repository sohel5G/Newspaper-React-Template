import { Link, useParams } from "react-router-dom";
import HeaderBottom from "../../header/HeaderBottom";
import HeaderTop from "../../header/HeaderTop";
import QZone from "../../sidebar/QZone";
import SocialFollow from "../../sidebar/SocialFollow";
import SocialLogin from "../../sidebar/SocialLogin";
import useGetPosts from "../../hooks/hooks";
import { useEffect, useState } from "react";
import { BsArrowLeft } from 'react-icons/bs';
import Post from "./Post";

const PostDetails = () => {
    const [post, setPost] = useState({})
    const [filteredPost, setFilteredPost] = useState([])
    const {_id} = useParams()
    const posts = useGetPosts()
    
    useEffect(()=>{
        const findPost = posts.find(post => post._id === _id)
        if (findPost) {
            setPost(findPost)
        }

    }, [_id, posts])
    const { image_url, details, title, category_id } = post;


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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
                <div className="col-span-3">
                    <h1 className='text-2xl font-bold pb-5 mt-7 lg:mt-0'>Dragon News</h1>
                    <article className="border shadow-sm rounded-md p-4 lg:p-7">
                        <img className="w-full" src={image_url} alt={title} />
                        <h1 className='text-2xl font-bold leading-9 mt-5'> {title} </h1>
                        <p className="text-base py-6 leading-8"> {details} </p>
                        <Link className="inline-block" to={`/category/${category_id}`}><button className="flex items-center gap-2 bg-[#D72050] text-white text-lg py-2 px-4"> <BsArrowLeft></BsArrowLeft> <span>All news in this category</span></button></Link>
                        
                    </article>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                    <SocialFollow></SocialFollow>
                    <QZone></QZone>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-medium">Related News</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
                    {
                        !!filteredPost && filteredPost.slice(0, 3).map(post => <Post post={post} key={post._id}></Post>)
                    }
                </div>
            </div>
        </>
    );
};

export default PostDetails;