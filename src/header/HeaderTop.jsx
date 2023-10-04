import moment from 'moment/moment';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <div className='flex justify-center text-center items-center'>
            <div className='py-9'>
                <Link to={'/'}><img src={logo} alt="Website main logo" /></Link>
                <p className='py-4 text-lg'>Journalism Without Fear or Favour</p>
                <p className='text-lg font-normal'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
        </div>
    );
};

export default HeaderTop;