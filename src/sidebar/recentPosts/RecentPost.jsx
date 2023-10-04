import PropTypes from 'prop-types';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const RecentPost = ({post}) => {

    const { title, image_url, rating, total_view, _id } = post;

    return (
        <article className='border rounded-md shadow-sm mb-4'>
            <div className='p-4'>
                <Link to={`/post/${_id}`}><img className='w-full rounded-md' src={image_url} alt={title} /></Link>
                <Link to={`/post/${_id}`}> <h1 className='text-lg font-medium leading-7 py-5'> {title}</h1></Link>
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

export default RecentPost;

RecentPost.propTypes = {
    post: PropTypes.object
}