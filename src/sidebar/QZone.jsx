import qZone1 from "../assets/img/qZone1.png"
import qZone2 from "../assets/img/qZone2.png"
import qZone3 from "../assets/img/qZone3.png"

const QZone = () => {
    return (
        <div className="bg-[#F3F3F3] p-5 my-4 mx-1 rounded">
            <h1 className='text-2xl font-bold py-5'>Q-Zone</h1>
            <img className="mt-2" src={qZone1} alt="qZone1" />
            <img className="mt-4" src={qZone2} alt="qZone2" />
            <img className="mt-4" src={qZone3} alt="qZone3" />
        </div>
    );
};

export default QZone;