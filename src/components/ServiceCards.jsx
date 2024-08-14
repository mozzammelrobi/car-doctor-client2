/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCards = ({ service }) => {
    // console.log(service)
    const { _id, title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="text-4xl font-bold"> {title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className='text-xl text-red-600'>Price: {price}</p>
                    <Link to={`/details/${_id}`}>
                        <button className="text-red-600"> <FaArrowRightLong /> </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;