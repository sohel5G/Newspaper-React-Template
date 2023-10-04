import { FaGoogle, FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className=' my-4 mx-1'>
            <h1 className='text-2xl font-bold pb-5'>Login With</h1>
            <p className='text-[#2a81e2] flex items-center gap-2 py-2 justify-center border-2 border-[#2a81e2] rounded-lg text-sm font-medium my-3'><span> <FaGoogle /> </span> <span>Login with Google</span> </p>
            <p className='text-[#403F3F] flex items-center gap-2 py-2 justify-center border-2 border-[#403F3F] rounded-lg text-sm font-medium my-3'><span> <FaGithub /> </span> <span>Login with Github</span> </p>
        </div>
    );
};

export default SocialLogin;