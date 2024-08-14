import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Checkout = () => {
    const {user} = useContext(AuthContext)
    const services = useLoaderData()
    console.log(services)
    const {  title, price, img,service_id } = services;


    const handleCheckout = (e) => {
        e.preventDefault();
        const form = e.target
        const Name = form.FirstName.value;
        const date = form.date.value;
        const price = form.price.value;
        const email = form.email.value;
        const OrderInfo = { CustomarName: Name,title, date, service_id,  image: img, price, email }
        // console.log(OrderInfo)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(OrderInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('booking successfull')
                }
            })


    }
    return (
        <div>
            <h1 className="text-amber-500 font-bold text-3xl text-center">Booking service: {title} </h1>
            <div className="flex justify-center items-center my-6 border-4 border-red-600">


                <form onSubmit={handleCheckout} className="">
                    <div className="grid grid-cols-2 gap-6 p-10 border-4 w-full border-teal-400 *:">
                        <div className="form-control w-full border border-red-500">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name="FirstName" placeholder="First Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="" className="input input-bordered" required />

                        </div><div className="">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="numer" name="price" defaultValue={'$' + price} placeholder="" className="input input-bordered" />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className=" mt-6">
                        <button className="btn btn-primary w-full">Order Conform</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Checkout;