import HeaderTop from "../../header/HeaderTop";
import HeaderMiddle from "../../header/HeaderMiddle";
import HeaderBottom from "../../header/HeaderBottom";
import SocialLogin from "../../sidebar/SocialLogin";
import SocialFollow from "../../sidebar/SocialFollow";
import QZone from "../../sidebar/QZone";
import Adds from "../../sidebar/Adds";
import Categories from "../../sidebar/Categories";
import Posts from "./Posts";
import RecentPosts from "../../sidebar/recentPosts/RecentPosts";

const Home = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-5 py-10">
                <aside className="hidden lg:block">
                    <h1 className='text-2xl font-bold pb-5 my-4'>All Category</h1>
                    <Categories></Categories>
                    <RecentPosts></RecentPosts>
                </aside>
                <main className="col-span-2">
                    <h1 className='text-2xl font-bold pb-5 my-4'>Dragon News Home</h1>
                    <Posts></Posts>
                </main>
                <aside>
                    <SocialLogin></SocialLogin>
                    <SocialFollow></SocialFollow>
                    <QZone></QZone>
                    <Adds></Adds>
                </aside>
            </div>
        </>
    );
};

export default Home;