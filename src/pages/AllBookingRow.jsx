/* eslint-disable react/prop-types */


const AllBookingRow = ({ booking , handleDelete, handleBookingConfirm }) => {
    const { image, email, date, price, CustomarName, _id,status } = booking;
    // console.log(booking)

    return (
        <tr>
            <th>
                <button
                    onClick={()=> handleDelete(_id)}
                    className="btn btn-circle btn-sm">
                    Delete 
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{email}</div>
                        <div className="text-sm opacity-50">{CustomarName}</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>{date}</td>
            <th>
               {
                status === 'confirm' ?  <span className="font-bold text-primary">Confirm</span>
                : <button onClick={()=> handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Panding</button>}
            </th>
        </tr>

    );
};

export default AllBookingRow;