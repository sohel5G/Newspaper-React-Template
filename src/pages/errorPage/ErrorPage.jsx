
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)

    return (
       <div className='h-[100vh] flex justify-center items-center text-center'>
            <div>
                <h1 className='text-3xl'> {error.status} </h1>
                <h1 className='text-2xl py-5'> {error.statusText} </h1>
                <Link className='bg-red-600 text-white py-3 px-5 rounded-md' to={'/'}> <button>Go to homepage </button> </Link>
            </div>
       </div>
    );
};

export default ErrorPage;