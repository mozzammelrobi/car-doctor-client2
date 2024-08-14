import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData()
    // console.log(services)
    const {_id,img,title,description} = services;
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Service Details: {title}</h1>
            <img src={img} alt="" />
            <p className="text-red-800">Description</p>

            <p>{description}</p>
            <Link to={`/checkout/${_id}`}> <button className="btn btn-secondary btn-sm">Checkout</button></Link>

        </div>
    );
};

export default ServiceDetails;