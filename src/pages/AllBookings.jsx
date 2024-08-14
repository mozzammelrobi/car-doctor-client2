import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import AllBookingRow from "./AllBookingRow";

const AllBookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBookings(data)

            })
    }, [])


    const handleDelete = (id) => {
        const proceed = confirm('Are You Sure You Want To Delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings-delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }


    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = "confirm"
                    const newBooking = [updated, ...remaining]
                    setBookings(newBooking)
                }
            })
    }

    return (
        <div>
            All bookings: {bookings.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <p>Action Delete</p>
                            </th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <AllBookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></AllBookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookings;