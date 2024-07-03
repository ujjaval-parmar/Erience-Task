import React, { useEffect, useState } from 'react'
import { apiGanerator } from '../helper/apiGanerator';
import { toast } from 'react-toastify';

const UserList = ({ setUpdateUserId }) => {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {

        const getUserData = async () => {

            try {
                setLoading(true);
                setError(false);
                const responseData = await apiGanerator('get-all-user', 'GET');

                // if(!responseData.seccess){
                //     throw new Error('Get All User Failed!');
                // }

                // console.log(responseData)
                setUserData(responseData.data);


            } catch (err) {
                console.log(err);
                toast.error(err.message);
            }finally{
                setLoading(false);
            }


        }

        getUserData();


    }, []);

    const handleDeleteUser = async (id) => {

        try {

            const responseData = await apiGanerator(`delete-user/${id}`, "delete");


            setUserData(userData.filter(user => user._id !== id));


            toast.success('User Deleted Successfully!');





        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }


    }


    return (
        <div className='mt-10'>

            {loading && <h2 className='text-center text-xl font-medium'>Loading......</h2>}


            {userData && userData.length > 0 && <table className='w-full text-center '>

                <thead>

                    <tr className='border border-black border-collapse'>

                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Mobile</th>
                        <th>Profile Picture</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>


                </thead>

                <tbody>

                    {userData.length > 0 && userData.map((user, index) => {
                        return (
                            <tr key={user._id} className='border border-black border-collapse'>
                                <td className=''>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.salary}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <img src={user.profilePic} alt="profile-pic" className='w-12 h-12 object-cover mx-auto' />
                                </td>
                                <td>
                                    <button onClick={() => setUpdateUserId(user._id)}>➡</button>
                                </td>
                                <td>
                                    <button onClick={(e) => handleDeleteUser(user._id)}>➡</button>
                                </td>
                            </tr>
                        )
                    })}



                </tbody>






            </table>}




        </div>
    )
}

export default UserList