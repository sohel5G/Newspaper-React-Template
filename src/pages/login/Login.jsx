import { Link } from "react-router-dom";
import HeaderBottom from "../../header/HeaderBottom";


const Login = () => {
    return (
        <div className="pt-6 pb-20">
            <HeaderBottom></HeaderBottom>
            <section>
                <div className="max-w-xl mx-auto">
                    <h1 className="text-4xl font-semibold text-center mt-10">Login your account</h1>
                    <hr className="mt-9" />
                    <form>
                        <div>
                            <p className="text-xl font-semibold mt-12">Email address</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Password</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="mt-10">
                            <input className="bg-[#403F3F] py-3 px-7 text-white text-base font-semibold w-full text-center cursor-pointer" type="submit" value="Login" />
                        </div>
                        <p className="mt-7 text-center">Dont’t Have An Account ? <Link className="text-[#e03e1a] font-semibold" to={'/register'}>Register</Link></p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;