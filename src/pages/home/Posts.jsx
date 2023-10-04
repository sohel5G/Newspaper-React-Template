import { useContext } from "react";
import Post from "./Post";
import { allContext } from "../../allContext/AllContext";


const Posts = () => {

    const {posts} = useContext(allContext);

    return (
        <div>
            {
                !!posts && posts.map(post => <Post post={post} key={post._id}></Post>)
            }
        </div>
    );
};

export default Posts;