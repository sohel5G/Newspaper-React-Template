import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const { title, image_url, details, rating, total_view, author, _id } = post;
  
    return (
        <article className='border rounded-md shadow-sm mb-6'>
            <div className='bg-[#F3F3F3] flex justify-between py-4 px-3 items-center'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='w-9 rounded-full' src={author.img} alt="Author name" />
                    </div>
                    <div>
                        <h4 className='font-semibold'> {author?.name} </h4>
                        <p> {author?.published_date && author?.published_date.slice(0, 11)} </p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='text-lg'> <FaRegBookmark></FaRegBookmark> </div>
                    <div className='text-xl'> <CiShare2></CiShare2> </div>
                </div>
            </div>
            <div className='p-4'>
                <Link to={`/post/${_id}`}> <h1 className='text-xl font-bold leading-9'> {title} </h1></Link>
                <Link to={`/post/${_id}`}><img className='w-full rounded-md mt-4' src={image_url} alt={title} /></Link>
                <p className='text-base py-6 leading-8'> 
                    {
                    details && details.length > 280 ? 
                    <>
                        {details.slice(0, 280)}
                            <Link to={`/post/${_id}`} className='text-[#ef6231] ml-2 underline'> Read more </Link>
                    </>  : 
                    <>
                        {details}
                    </> 
                    }
                </p>
                <hr />
                <div className='flex justify-between py-4 px-3 items-center'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-4 w-4" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-4 w-4" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-4 w-4" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-4 w-4" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-4 w-4" />
                            </div>
                        </div>
                        <div>
                            <p> {rating.number} </p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='text-lg'> <BsFillEyeFill></BsFillEyeFill> </div>
                        <div className='text-xl'> 
                            <p> {total_view} </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Post;

Post.propTypes = {
    post: PropTypes.object
}

