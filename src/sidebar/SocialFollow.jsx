import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialFollow = () => {
    return (
        <div className=' my-7 mx-1'>
            <h1 className='text-2xl font-bold pb-5'>Find Us On</h1>
            <div className='border-2 p-3 rounded-t-md'>
                <a href="https://github.com/sohel5G" target="blank" className='flex gap-3 items-center'>
                    <span className='bg-[#F3F3F3] p-2 rounded-full text-[#3b599c]'><FaFacebookF></FaFacebookF></span> <span className='text-base font-medium'>Facebook</span>
                </a>
            </div>
            <div className='border-l-2 border-r-2 p-3'>
                <a href="https://github.com/sohel5G" target="blank" className='flex gap-3 items-center'>
                    <span className='bg-[#F3F3F3] p-2 rounded-full text-[#58a7de]'><FaTwitter></FaTwitter></span> <span className='text-base font-medium'>Twitter</span>
                </a>
            </div>
            <div className='border-2 p-3 rounded-b-md'>
                <a href="https://github.com/sohel5G" target="blank" className='flex gap-3 items-center'>
                    <span className='bg-[#F3F3F3] p-2 rounded-full text-[#e03e1a]'><FaInstagram></FaInstagram></span> <span className='text-base font-medium'>Instagram</span>
                </a>
            </div>
        </div>
    );
};

export default SocialFollow;