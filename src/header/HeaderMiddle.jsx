
import Marquee from "react-fast-marquee";
import useGetPosts from "../hooks/hooks";
import { Link } from "react-router-dom";

const HeaderMiddle = () => {

    const posts = useGetPosts()

    return (
       <div>
            <div className="flex items-center bg-[#F3F3F3] py-4 px-5 rounded-md">
                <div>
                    <button className="bg-[#D72050] py-3 px-5 text-white rounded-sm mr-4">Latest</button>
                </div>
                <div>
                    <Marquee pauseOnHover="true" className="font-medium text-lg">
                       <div>
                            {
                                !!posts && posts.map(post => <Link to={`/post/${post._id}`} key={post._id}> {post.title}  ⇐⇑⇒  </Link>)
                            }
                       </div>
                    </Marquee>
                </div>
            </div>
       </div>
    );
};

export default HeaderMiddle;

