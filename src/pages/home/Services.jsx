import { useEffect, useState } from "react";
import ServiceCards from "../../components/ServiceCards";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services)
    return (

        <div className="my-20">
            <div className="text-center space-y-4">
                <h1 className="text-3xl  text-orange-400">services</h1>
                <h2 className="font-bold text-4xl">Our Service Area</h2>
                <p className="w-3/4 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {
                services.map(service => <ServiceCards key={service._id} service={service}></ServiceCards>)
               }
            </div>
        </div>
    );
};

export default Services;