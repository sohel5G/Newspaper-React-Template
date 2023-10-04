import { Link } from "react-router-dom";
import HeaderBottom from "../../header/HeaderBottom";


const Register = () => {
    return (
        <div className="pt-6 pb-20">
            <HeaderBottom></HeaderBottom>
            <section>
                <div className="max-w-xl mx-auto">
                    <h1 className="text-4xl font-semibold text-center mt-10">Register your account</h1>
                    <hr className="mt-9" />
                    <form className="">
                        <div>
                            <p className="text-xl font-semibold mt-12">Your Name</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Photo URL</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="url" placeholder="Enter photo URL" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Email</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-6">Password</p>
                            <input className="text-base bg-[#F3F3F3] py-3 px-5 w-full mt-4" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="mt-10">
                            <input className="bg-[#403F3F] py-3 px-7 text-white text-base font-semibold w-full text-center cursor-pointer" type="submit" value="Register" />
                        </div>
                        <div className="mt-6 flex items-center gap-2">
                            <input className="h-4 w-4" type="checkbox" name="term" id="term" /> 
                            <label htmlFor="term">Accept <Link className="font-semibold" to={'/term-and-conditions'}>Term & Conditions</Link></label>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;