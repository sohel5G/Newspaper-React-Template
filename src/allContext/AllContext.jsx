import { createContext } from "react";
import PropTypes from 'prop-types';
import useGetPosts, { useGetCategoris } from "../hooks/hooks";

export const allContext = createContext(null);

const AllContext = ({ children }) => {

    const posts = useGetPosts();
    const categories = useGetCategoris()



    const authAndPosts = {posts, categories }
    return (
        <>
            <allContext.Provider value={authAndPosts}>
                {children}
            </allContext.Provider>
        </>
    );
};

export default AllContext;

AllContext.propTypes = {
    children: PropTypes.node
}
