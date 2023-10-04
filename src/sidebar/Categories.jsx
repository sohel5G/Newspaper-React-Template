import { useContext } from "react";
import { allContext } from "../allContext/AllContext";
import { Link } from "react-router-dom";


const Categories = () => {

    const { categories } = useContext(allContext);

    return (
        <div className="mx-1 my-4">
            <h1 className='text-lg lg:text-xl font-semibold bg-[#E7E7E7] py-2 lg:py-3 px-2 text-center'>National News</h1>
            <ul className="py-5 pl-4 lg:pl-9">
                {
                    !!categories && categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`} className="text-xl hover:text-[#ef6231] py-3 block"> {category.name} </Link></li> )
                }
            </ul>
        </div>
    );
};

export default Categories;