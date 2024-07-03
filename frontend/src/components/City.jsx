import React, { useState } from 'react'
import { apiGanerator } from '../helper/apiGanerator';
import { toast } from 'react-toastify';

const City = () => {

    const [cityName, setCityName] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{

            const responseData = await apiGanerator('add-city', 'POST', {cityName});


            // console.log(responseData);

            toast.success('City add sccess!')
            
            setCityName('');


        }catch(err){
            console.log(err);
            toast.error(err.message);
        }
        
    }

    return (
        <div className='max-w-lg mt-10'>

            <form className='w-full ' onSubmit={handleSubmit}>

                <div className='flex items-center justify-between'>
                    <label>City Name:</label>

                    <input type="text"  className='border border-black w-1/2 px-2 py-1' onChange={(e)=> setCityName(e.target.value)} value={cityName}/>

                </div>
                <button className='bg-blue-600 text-white px-3 py-1 mt-4'>Submit</button>

            </form>


        </div>
    )
}

export default City