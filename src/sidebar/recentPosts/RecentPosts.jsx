import { useContext } from "react";
import { allContext } from "../../allContext/AllContext";
import RecentPost from "./RecentPost";

const RecentPosts = () => {
    const { posts } = useContext(allContext);

    return (
        <div>
            {
                !!posts && posts.slice(0, 3).map(post => <RecentPost post={post} key={post._id}></RecentPost>)
            }
        </div>
    );
};

export default RecentPosts;

