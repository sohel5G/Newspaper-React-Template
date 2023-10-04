
import Marquee from "react-fast-marquee";

const HeaderMiddle = () => {

    return (
       <div>
            <div className="flex items-center bg-[#F3F3F3] py-4 px-5 rounded-md">
                <div>
                    <button className="bg-[#D72050] py-3 px-5 text-white rounded-sm mr-4">Latest</button>
                </div>
                <div>
                    <Marquee pauseOnHover="true" className="font-medium text-lg">
                        I can be a React component, multiple React components, or just some text.  |   I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>
       </div>
    );
};

export default HeaderMiddle;

