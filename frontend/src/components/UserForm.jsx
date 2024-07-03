import React, { useEffect, useState } from 'react'
import imageToBase64 from '../helper/imageTobase64';
import { toast } from 'react-toastify';
import { apiGanerator } from '../helper/apiGanerator';

const UserForm = () => {

  const [cityData, setCityData] = useState([]);


  const [formData, setFormData] = useState({
    name: '',
    city: '',
    salary: '',
    mobile: '',
    profilePic: ''
  });


  const handelFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleProfilePic = async (e) => {
    // console.log(e);
    const file = await imageToBase64(e.target.files[0]);

    setFormData({ ...formData, profilePic: file });
  }


  useEffect(() => {

    const getCityData = async () => {

      try {

        const responseData = await apiGanerator('get-all-city', 'GET');

        if(!responseData.success){
          throw new Error('Get City Data Failed!');
        }

        

        setCityData(responseData.data);


      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }


    }

    getCityData();



  }, [])

  

  const handleSubmit = async (e) => {

    e.preventDefault();

    

    try {


      const responseData = await apiGanerator('add-user', 'POST', formData);

      if(!responseData.success){
        throw new Error('Add USer Failed!');
      }

      toast.success('User Added Successfully!');

      




    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }


  }

  // console.log(formData);

  return (
    <div>

      <h2 className='uppercase text-xl text-center my-6 font-semibold'>Add User</h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>


        <div className='flex items-center justify-between'>
          <label>Name:</label>

          <input type="text" className='border border-black w-1/2 px-2 py-1' onChange={handelFormChange} value={formData.name} name='name' />

        </div>

        <div className='flex items-center justify-between'>
          <label>City:</label>

          <select name="city" id="city" className='border border-black w-1/2' onChange={handelFormChange}>
    <option value=""> Select City</option>
          {cityData.length > 0 && (
            cityData.map(city=>{
              return (
                <option value={city.cityName} key={city.cityName}>{city.cityName}</option>
              )
            })
          )}



          </select>

        </div>

        <div className='flex items-center justify-between'>
          <label>Salary:</label>

          <input type="number" className='border border-black w-1/2 px-2 py-1' onChange={handelFormChange} value={formData.salary} name='salary' />

        </div>

        <div className='flex items-center justify-between'>
          <label>Mobile:</label>

          <input type="number" className='border border-black w-1/2 px-2 py-1' onChange={handelFormChange} value={formData.number} name='mobile' />

        </div>

        <div className='flex items-center justify-between'>
          <label>Prfile Picture:</label>

          <input type="file" className='border border-black w-1/2 px-2 py-1' onChange={handleProfilePic} />

        </div>





        <button className='bg-blue-600 text-white px-3 py-1 mt-4'>Submit</button>







      </form>




    </div>
  )
}

export default UserForm